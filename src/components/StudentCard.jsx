import React, { useState } from "react";
import AdditionalDetails from "./AdditionalDetails";
import OneOnOneNotes from "./OneOnOneNotes";
import CommentsSection from "./CommentSection";
import "/src/styles/StudentCard.css";

export default function StudentCard({ student }) {
  const [showDetails, setShowDetails] = useState(false);
  const [comments, setComments] = useState(student.notes);

  const score = student.codewars.current.total;
  const resume = student.certifications.resume;
  const linkedin = student.certifications.linkedin;
  const github = student.certifications.github;
  const mockInterview = student.certifications.mockInterview;
  
  const formatDate = (input) => {
    const date = new Date(input);
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  };

  const toggleDetails = () => setShowDetails(!showDetails);
  const addComment = (commenter, comment) => {
    const newComment = { commenter, comment };
    setComments([...comments, newComment]);
  };

  return (
    <div key={student.id} className="card">
      <div className="card__outer-container">
        <img src={student.profilePhoto} alt={`${student.names.preferredName}'s profile photo`} className="card__img"/>
        <div className="card__inner-container">
          <div className="card__inner-inner-container">
            <h3 className="card__inner-inner-container__content name">{student.names.preferredName} {student.names.middleName.charAt(0)}. {student.names.surname}</h3>
            <h3 className="card__inner-inner-container__content onTrack">{resume && linkedin && github && mockInterview && score >= 600 ? "On Track for Graduation" : null}</h3>
          </div>
          <p className="card__inner-container__content">{student.username}</p>
          <p className="card__inner-container__content"><span className="green-txt">Birthday: </span>{formatDate(student.dob)}</p>
          <button className="card__show-more-btn" onClick={toggleDetails}>{showDetails ? "Show Less" : "Show More..."}</button>
        </div>
      </div>
      <AdditionalDetails student={student} showDetails={showDetails} />
      {showDetails && (
        <div>
          <OneOnOneNotes addComment={addComment} />
          <CommentsSection comments={comments} />
        </div>
      )}
    </div>
  );
}
