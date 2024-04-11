import { useState } from "react";

export default function ShowMore() {
  //Add function that toggles show and hide for the "Show More.."
  //Show More should have info from codewars
  const [showMore, setShowMore] = useState(false);

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
    </div>
  )
}