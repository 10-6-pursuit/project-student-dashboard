import "./Cohorts.css";

export default function Cohort({ onFilterClass, cohorts }) {
	return (
		<section className="cohorts">
			<h2 className="global__title">Choose a class by start date</h2>
			<ul className="cohorts__list">
				{cohorts.map((ele, idx) => (
					<li
						onClick={() => onFilterClass(ele)}
						className="cohorts__list__item"
						key={idx}
					>
						{ele.name}
					</li>
				))}
			</ul>
		</section>
	);
}
