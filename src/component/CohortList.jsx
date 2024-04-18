export default function CohortList({student,handleList,generateNewColor}){
  
    let cohort=student.cohort.cohortCode.match(/[a-z]/gi).join(``)+` `+student.cohort.cohortCode.match(/[0-9]/gi).join(``)
    
    return (
      <li className="cohort-element"  onClick={handleList} >
        <button id={student.cohort.cohortCode} className="cohort-button" style={{backgroundColor:generateNewColor(),color:`white`}}>
        {cohort}
      </button></li>
     
      
    )
}
