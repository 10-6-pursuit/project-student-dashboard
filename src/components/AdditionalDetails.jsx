import React from "react";
import "/src/styles/AdditionalDetails.css"

export default function AdditionalDetails({
  student,
  showDetails,
  toggleDetails,
}) {
  const score = student.codewars.current.total;
  const resume = student.certifications.resume;
  const linkedin = student.certifications.linkedin;
  const github = student.certifications.github;
  const mockInterview = student.certifications.mockInterview;

  const codewarsGoalReachedPercentage = (goal, total) =>
    Math.floor((total / goal) * 100);
  const percentage = (x) => Math.floor(x * 100);

  return (
    showDetails && (
      <div className="card__details">
        <div className="card__details__codewars">
          <h3 className="card__details__title">Codewars</h3>
          <p className="card__details__para">
            <span className="green-txt">Codewars Score: </span>
            {score}
          </p>
          <p className="card__details__para">
            <span className="green-txt">Last Week: </span>
            {student.codewars.current.lastWeek}
          </p>
          <p className="card__details__para">
            <span className="green-txt">Goal: </span>
            {student.codewars.goal.total}
          </p>
          <p className="card__details__para">
            <span className="green-txt">Percent of Goal Achieved: </span>
            {codewarsGoalReachedPercentage(
              student.codewars.goal.total,
              student.codewars.current.total
            )}
            %
          </p>
        </div>
        <div className="card__details__scores">
          <h3 className="card__details__title">Scores</h3>
          <p className="card__details__para">
            <span className="green-txt">Assignments: </span>
            {percentage(student.cohort.scores.assignments)}%
          </p>
          <p className="card__details__para">
            <span className="green-txt">Projects: </span>
            {percentage(student.cohort.scores.projects)}%
          </p>
          <p className="card__details__para">
            <span className="green-txt">Assessments: </span>
            {percentage(student.cohort.scores.assessments)}%
          </p>
        </div>
        <div className="card__details__certs">
          <h3 className="card__details__title">Certifications</h3>
          <p className="card__details__para">
            <span className="green-txt">Resume: </span>
            {resume ? "✅" : "❌"}
          </p>
          <p className="card__details__para">
            <span className="green-txt">LinkedIn: </span>
            {linkedin ? "✅" : "❌"}
          </p>
          <p className="card__details__para">
            <span className="green-txt">GitHub: </span>
            {github ? "✅" : "❌"}
          </p>
          <p className="card__details__para">
            <span className="green-txt">Mock Interview: </span>
            {mockInterview ? "✅" : "❌"}
          </p>
        </div>
      </div>
    )
  );
}
