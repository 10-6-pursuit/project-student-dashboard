import "./CohortList.css";

export default function CohortList({data, handleCohort, currentCohort}) {
    let cohortArray = data.map(obj => obj.cohort.cohortCode);
    let newCohortArray = [...new Set(cohortArray)];
 
    let modifiedCohortArray = newCohortArray.map(ele => ele.replace(/([A-Za-z])(\d)/g, '$1 $2'));

    return (
        <div className="cohortlist">
            <h2 className="cohortlist-title">Choose a Class by Start Date</h2>
            <p className="cohortlist-elem" onClick={handleCohort}>All Students</p>
            <hr/>
            {modifiedCohortArray.map(ele => <><p className="cohortlist-elem" onClick={handleCohort} >{ele}</p><hr/></>)}
            {/* {currentCohort} */}
        </div>
    )
}