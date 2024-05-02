import { useState } from "react";
import StudentExtras from "./StudentExtras";

export default function ShowMore({student, studentID, notes, students, appendNotes}) {
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
            studentID={studentID}
            notes={notes}
            student={student}
            students={students}
            appendNotes={appendNotes}
          />
        </div>
      ) : null}
    </div>
  );
}
