import Student from "./Student";
import "./Students.css";
export default function Students({
	students,
	cohortTitle,
	onAddNotesToStudent
}) {
	return (
		<div className="students">
			<h2 className="global__title">{cohortTitle}</h2>
			<p>
				<span>Total Students:</span>
				<span className="text-primary">{students.length}</span>
			</p>
			<ul className="students__list">
				{students.map((ele) => (
					<Student
						student={ele}
						key={ele.id}
						onAddNotesToStudent={onAddNotesToStudent}
					/>
				))}
			</ul>
		</div>
	);
}
