import React, { useState } from "react";
import "/src/styles/StudentCard.css";

export default function StudentCard({ student }) {
  const [showDetails, setShowDetails] = useState(false);

  const score = student.codewars.current.total;
  const resume = student.certifications.resume;
  const linkedin = student.certifications.linkedin;
  const github = student.certifications.github;
  const mockInterview = student.certifications.mockInterview;

  const middleInitial = (str) => `${str[0]}.`;
  const formatDate = (inputDate) => {
    const parts = inputDate.split("/");
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[parseInt(parts[0], 10) - 1];
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
    return `${month} ${day}, ${year}`;
  }
  const toggleDetails = () => setShowDetails(!showDetails);
  const codewarsGoalReachedPercentage = (goal, total) => Math.floor((total / goal) * 100);
  const percentage = (x) => Math.floor(x * 100);

  return (
    <div key={student.id} className="card">
      <div className="card__outer-container">
        <img
          src={student.profilePhoto}
          alt={`${student.names.preferredName}'s profile photo`}
          className="card__img"
        />
        <div className="card__inner-container">
          <div className="card__inner-inner-container">
            <h3 className="card__inner-inner-container__content name">{student.names.preferredName} {middleInitial(student.names.middleName)} {student.names.surname}</h3>
            <h3 className="card__inner-inner-container__content onTrack">{(resume && linkedin && github && mockInterview && score >= 600) ? "On Track for Graduation" : null}</h3>
          </div>
          <p className="card__inner-container__content">{student.username}</p>
          <p className="card__inner-container__content"><span>Birthday: </span>{formatDate(student.dob)}</p>
        </div>
      </div>
      {showDetails && (
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
                <p className="card__details__para"><span>Resume: </span>{resume ? "✅": "❌"}</p>
                <p className="card__details__para"><span>LinkedIn: </span>{linkedin ? "✅": "❌"}</p>
                <p className="card__details__para"><span>GitHub: </span>{github ? "✅": "❌"}</p>
                <p className="card__details__para"><span>Mock Interview: </span>{mockInterview ? "✅": "❌"}</p>
            </div>
          </div>
        )}
        <button className="card__show-more-btn" onClick={toggleDetails}>{showDetails ? "Show Less" : "Show More..."}</button>
    </div>
  );
}
