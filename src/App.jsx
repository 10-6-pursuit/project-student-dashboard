import { useState } from "react";
import data from "./data/data.json";
import Cohorts from "./components/cohorts/Cohorts";
import Students from "./components/students/index";
import "./index.css";
import "./assets/App.css";
function App() {
	const [students, setStudents] = useState(data);
	const [cohortTitle, setCohortTittle] = useState("All Students");

	function filterClass(cohort) {
		let filtered = [...data];
		if (cohort.cohortCode !== "all") {
			filtered = filtered.filter(
				(ele) => ele.cohort.cohortCode === cohort.cohortCode
			);
		}
		setStudents(filtered);
		setCohortTittle(cohort.name);
	}

	function addNotesToStudent(id, payload) {
		setStudents((prev) =>
			prev.map((ele) => {
				if (id === ele.id) {
					return { ...ele, notes: [...ele.notes, payload] };
				} else {
					return ele;
				}
			})
		);
	}
	function getCohorstList() {
		const unique = new Map();
		data.forEach(({ cohort }) => {
			if (!unique.has(cohort.cohortCode)) {
				//extract the name and year
				const name = cohort.cohortCode.slice(0, cohort.cohortCode.length - 4);
				const year = cohort.cohortCode.slice(cohort.cohortCode.length - 4);
				unique.set(cohort.cohortCode, {
					...cohort,
					name: `${name} ${year}`,
				});
			}
		});
		const cohorts = [...unique.values()].sort(
			(a, b) => new Date(a.cohortStartDate) - new Date(b.cohortStartDate)
		);
		return [{ name: "All students", cohortCode: "all" }, ...cohorts];
	}
	const cohorts = getCohorstList();
	return (
		<div className="dashboard">
			<header className="header">
				<h1>Student Dashboard</h1>
			</header>
			<main>
				<div className="main__wrapper">
					<Cohorts onFilterClass={filterClass} cohorts={cohorts} />
					<Students
						students={students}
						cohortTitle={cohortTitle}
						onAddNotesToStudent={addNotesToStudent}
					/>
				</div>
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
