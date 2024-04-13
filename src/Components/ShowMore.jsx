import { useState } from "react";
import StudentExtras from "./StudentExtras";

export default function ShowMore({
  student,
  codewars,
  certifications,
  scores,
  notes,
}) {
  const [showMore, setShowMore] = useState(false);

  function toggleShowMore() {
    setShowMore(!showMore);
  }

  return (
    <div className="showMore">
      <button onClick={toggleShowMore}>
        <span>{!showMore ? "Show More..." : "Show Less..."}</span>
      </button>

      {showMore ? (
        <div className="student-info__moreInfo">
          <StudentExtras
            studentID={student.id}
            codewars={codewars}
            certifications={certifications}
            scores={scores}
            notes={notes}
          />
        </div>
      ) : null}
    </div>
  );
}
