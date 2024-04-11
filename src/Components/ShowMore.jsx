import { useState } from "react";
import StudentExtras from "./StudentExtras";

export default function ShowMore({student}) {
  //Add function that toggles show and hide for the "Show More.."
  //Show More should have info from codewars
  const [showMore, setShowMore] = useState(false);

  // //!Create our variable that will hold the codewars info of each student. Didn't work
  // const codeWarsInfo = Object.entries(student.codewars);

  function toggleShowMore() {
    setShowMore(!showMore);
  }

  return (
    <div className="showMore">
      <button onClick={toggleShowMore}>
        <span>
        { !showMore ? "Show More..." :"Show Less..." }
        </span>
      </button>

      {showMore ? (
        <div className="student-info__moreInfo">
          <StudentExtras studentID={student.id}/>
        </div>
      ): null}
    </div>
  )
}