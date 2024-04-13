import { useState } from "react";
import StudentExtras from "./StudentExtras";

export default function ShowMore({student, codewars, certifications, scores}) {
  const [showMore, setShowMore] = useState(false);

  // //!Create variable that will hold the codewars, scores, and certification info of each student. 

  function toggleShowMore() {
    setShowMore(!showMore);
  }

  //!This is it: Found in stack overflow, kept getting error, on 'Objects are not valid as a react child'
  // const codewars = Object.keys(student.codewars).map(codewarsOpt => (codewarsOpt, student.codewars[codewarsOpt]));
  // console.log(codewars)

  return (
    <div className="showMore">
      <button onClick={toggleShowMore}>
        <span>
        { !showMore ? "Show More..." :"Show Less..." }
        </span>
      </button>

      {showMore ? (
        <div className="student-info__moreInfo">
          <StudentExtras studentID={student.id} codewars={codewars} certifications={certifications} scores={scores}/>
        </div>
      ): null}
    </div>
  )
}