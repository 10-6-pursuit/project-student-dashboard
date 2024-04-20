import { useState } from "react";
import "./Students.css";
import StudentDetails from "./StudentDetails";

export default function Student({ student, onAddNotesToStudent }) {
	const [showMore, setShowMore] = useState(false);
	function toggleShowMore() {
		setShowMore(!showMore);
	}
	const fullname = `${student.names.preferredName} ${student.names.middleName[0]}. ${student.names.surname}`;

	const date = new Date(student.dob);
	const options = { month: "long", day: "numeric", year: "numeric" };
	const dob = date.toLocaleDateString("en-US", options);

	function isOnTrack() {
		const { resume, linkedin, github, mockInterview } = student.certifications;
		const REQUIRED_CODEWARS_SCORE = 600;
		return (
			resume &&
			linkedin &&
			github &&
			mockInterview &&
			student.codewars.current.total > REQUIRED_CODEWARS_SCORE
		);
	}

	return (
		<li className="student">
			<div className="student__preview">
				<div className="student__img__container">
					<img src={student.profilePhoto} alt="profile photo of the student" />
				</div>

				<div className="student__description">
					<div className="student__description__demographics">
						<b className="global__subtitle">{fullname}</b>
						<p>{student.username}</p>
						<p>
							<span className="text-primary">Birthday:</span> <span>{dob}</span>
						</p>
						<p className="showmore text-primary" onClick={toggleShowMore}>
							{showMore ? "Show Less.." : "Show More.."}
						</p>
					</div>
					{isOnTrack() && <p className="text-primary">On Track To Graduate</p>}
				</div>
			</div>
			{showMore && (
				<StudentDetails
					{...student}
					onAddNotesToStudent={onAddNotesToStudent}
				/>
			)}
		</li>
	);
}
