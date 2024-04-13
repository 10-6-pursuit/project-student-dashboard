import React, { useState } from "react";
import "/src/styles/StudentCard.css";

export default function StudentCard({ student }) {
  const [showDetails, setShowDetails] = useState(false);

  const middleInitial = (str) => `${str[0]}.`;

  function formatDate(inputDate) {
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

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const codewarsGoalReachedPercentage = (goal, total) => Math.floor((total / goal) * 100);

  const percentage = (x) => Math.floor(x * 100);

  return (
    <div key={student.id} className="card">
      <img
        src={student.profilePhoto}
        alt={`${student.names.preferredName}'s profile photo`}
        className="card__img"
      />
      <div className="card__container">
        <h3 className="card__container__name">
          {student.names.preferredName} {middleInitial(student.names.middleName)}{" "}
          {student.names.surname}
        </h3>
        <p className="card__container__username">{student.username}</p>
        <p className="card__container__dob">
          <span>Birthday: </span>
          {formatDate(student.dob)}
        </p>
      </div>
      {showDetails && (
          <div className="card__details">
            <div className="card__details__codewars">
                <h3 className="card__details__title">Codewars</h3>
                <p className="card__details__para"><span>Codewars Score: </span>{student.codewars.current.total}</p>
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
                <p className="card__details__para"><span>Resume: </span>{student.certifications.resume ? <>&#x2714;</> : <>&#x58;</>}</p>
                <p className="card__details__para"><span>LinkedIn: </span>{student.certifications.linkedin ? <>&#x2714;</> : <>&#x58;</>}</p>
                <p className="card__details__para"><span>Mock Interview: </span>{student.certifications.github ? <>&#x2714;</> : <>&#x58;</>}</p>
                <p className="card__details__para"><span>GitHub: </span>{student.certifications.monckInterview ? <>&#x2714;</> : <>&#x58;</>}</p>
            </div>
          </div>
        )}
        <button className="card__show-more-btn" onClick={toggleDetails}>
          {showDetails ? "Show Less" : "Show More..."}
        </button>
    </div>
  );
}
