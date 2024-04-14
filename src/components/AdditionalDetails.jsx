import React from "react";

export default function AdditionalDetails({ student, showDetails, toggleDetails }) {
  const score = student.codewars.current.total;
  const resume = student.certifications.resume;
  const linkedin = student.certifications.linkedin;
  const github = student.certifications.github;
  const mockInterview = student.certifications.mockInterview;

  const codewarsGoalReachedPercentage = (goal, total) => Math.floor((total / goal) * 100);
  const percentage = (x) => Math.floor(x * 100);

  return (
    showDetails && (
      <div className="card__details">
        <div className="card__details__codewars">
          <h3 className="card__details__title">Codewars</h3>
          <p className="card__details__para"><span>Codewars Score: </span>{score}</p>
          <p className="card__details__para"><span>Last Week: </span>{student.codewars.current.lastWeek}</p>
          <p className="card__details__para"><span>Goal: </span>{student.codewars.goal.total}</p>
          <p className="card__details__para"><span>Percent of Goal Achieved: </span>{codewarsGoalReachedPercentage(student.codewars.goal.total, student.codewars.current.total)}%</p>
        </div>
        <div className="card__details__scores">
          <h3 className="card__details__title">Scores</h3>
          <p className="card__details__para"><span>Assignments: </span>{percentage(student.cohort.scores.assignments)}%</p>
          <p className="card__details__para"><span>Projects: </span>{percentage(student.cohort.scores.projects)}%</p>
          <p className="card__details__para"><span>Assessments: </span>{percentage(student.cohort.scores.assessments)}%</p>
        </div>
        <div className="card__details__certs">
          <h3 className="card__details__title">Certifications</h3>
          <p className="card__details__para"><span>Resume: </span>{resume ? "✅" : "❌"}</p>
          <p className="card__details__para"><span>LinkedIn: </span>{linkedin ? "✅" : "❌"}</p>
          <p className="card__details__para"><span>GitHub: </span>{github ? "✅" : "❌"}</p>
          <p className="card__details__para"><span>Mock Interview: </span>{mockInterview ? "✅" : "❌"}</p>
        </div>
      </div>
    )
  );
}
