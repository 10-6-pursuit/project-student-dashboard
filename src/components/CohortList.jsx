import "/src/components/CohortList.css"

export default function CohortList({cohortSelection, handleCohortChange}) {

   const colorObj = {
    ["Winter 2026"] : "red",
    ["Fall 2026"] : "yellow",
    ["Summer 2026"] : "pink",
    ["Spring 2026"] : "blue",
    ["Winter 2025"] : "purple",
    ["Fall 2025"] : "grey",
    ["Summer 2025"] : "orange",
    ["Spring 2025"] : "green"
   }

   console.log(colorObj)

    return (
        <div className="cohortList__card">
            <h2>Choose A Class by Start Date</h2>
            {cohortSelection.map((cohort,i) => <li key={i}><input style={{color:colorObj[cohort] ? colorObj[cohort]: "black"}} type="button" onClick={handleCohortChange} value={cohort} /></li>)}
        </div>
    )
}