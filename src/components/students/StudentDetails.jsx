import Notes from "./Notes";

export default function StudentDetails({
	id,
	codewars,
	certifications,
	cohort,
	notes,
	onAddNotesToStudent,
}) {
	const goalPercent = parseInt(
		(codewars.current.total * 100) / codewars.goal.total
	);

	return (
		<>
			<div className="details">
				<div className="codewars">
					<h2 className="details__title global__subtitle">Codewars:</h2>
					<p className="details__item">
						<span className="text-primary ">Current Total:</span>
						<span> {codewars.current.total}</span>
					</p>
					<p className="details__item">
						<span className="text-primary">Last Week:</span>
						<span>{codewars.current.lastWeek}</span>
					</p>
					<p className="details__item">
						<span className="text-primary">Goal:</span>
						<span>{codewars.goal.total}</span>
					</p>
					<p className="details__item">
						<span className="text-primary">Percent of goal Achieved:</span>
						<span> {goalPercent}%</span>
					</p>
				</div>

				<div className="scores">
					<h2 className="details__title global__subtitle">Scores:</h2>
					<p className="details__item">
						<span className="text-primary ">Assignments:</span>
						<span>{cohort.scores.assignments * 100}%</span>
					</p>
					<p className="details__item">
						<span className="text-primary ">Projects:</span>
						<span>{cohort.scores.projects * 100}%</span>
					</p>
					<p className="details__item">
						<span className="text-primary ">Assessments:</span>
						<span>{cohort.scores.assessments * 100}%</span>
					</p>
				</div>
				<div className="certifications">
					<h2 className="details__title global__subtitle">Certifications:</h2>
					<p className="details__item">
						<span className="text-primary">Resume:</span>
						{certifications.resume ? (
							<i className="fa-solid fa-square-check text-success"></i>
						) : (
							<i className="fa-solid fa-square-xmark text-danger"></i>
						)}
					</p>
					<p className="details__item">
						<span className="text-primary">Linkedin:</span>
						{certifications.linkedin ? (
							<i className="fa-solid fa-square-check text-success"></i>
						) : (
							<i className="fa-solid fa-square-xmark text-danger"></i>
						)}
					</p>
					<p className="details__item">
						<span className="text-primary">Mock Interview:</span>
						{certifications.mockInterview ? (
							<i className="fa-solid fa-square-check text-success"></i>
						) : (
							<i className="fa-solid fa-square-xmark text-danger"></i>
						)}
					</p>
					<p>
						<span className="text-primary">GitHub:</span>
						{certifications.github ? (
							<i className="fa-solid fa-square-check text-success"></i>
						) : (
							<i className="fa-solid fa-square-xmark text-danger"></i>
						)}
					</p>
				</div>
			</div>
			<Notes id={id} notes={notes} onAddNotesToStudent={onAddNotesToStudent} />
		</>
	);
}
