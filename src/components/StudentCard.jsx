import React, { useState } from "react";
import AdditionalDetails from "./AdditionalDetails";
import OneOnOneNotes from "./1on1Notes";
import "/src/styles/StudentCard.css";

export default function StudentCard({ student }) {
  const [showDetails, setShowDetails] = useState(false);
  const [comments, setComments] = useState(student.notes);

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
  };
  const toggleDetails = () => setShowDetails(!showDetails);

  const addComment = (commenter, comment) => {
    const newComment = { commenter, comment };
    setComments([...comments, newComment]);
  };

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
            <h3 className="card__inner-inner-container__content name">
              {student.names.preferredName}{" "}
              {middleInitial(student.names.middleName)} {student.names.surname}
            </h3>
            <h3 className="card__inner-inner-container__content onTrack">
              {student.certifications.resume &&
              student.certifications.linkedin &&
              student.certifications.github &&
              student.certifications.mockInterview &&
              student.codewars.current.total >= 600
                ? "On Track for Graduation"
                : null}
            </h3>
          </div>
          <p className="card__inner-container__content">{student.username}</p>
          <p className="card__inner-container__content">
            <span className="green-txt">Birthday: </span>
            {formatDate(student.dob)}
          </p>
        </div>
      </div>
      <AdditionalDetails student={student} showDetails={showDetails} />
      {showDetails && (
        <div>
          <OneOnOneNotes addComment={addComment} />
          <div>
            <h3>Comments</h3>
            {comments.map((note, index) => (
              <div key={index}>
                <p><strong>{note.commenter}:</strong> {note.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <button className="card__show-more-btn" onClick={toggleDetails}>
        {showDetails ? "Show Less" : "Show More..."}
      </button>
    </div>
  );
}
