import { useState } from "react";

export default function CohortList({ cohortStudents, cohortClick }) {
    const [studentsState, setStudents] = useState(cohortStudents);

    const getBatches = () => studentsState.reduce((batches, student) => {
        if (!batches.includes(student.cohort.cohortCode)) {
            batches.push(student.cohort.cohortCode);
        }
        return batches;
    }, []);

    const formatBatch = (batch) => {
        let formattedBatch;
        let batchSeason = batch.substring(0, batch.length - 4);
        formattedBatch = batch.replace(batchSeason, batchSeason + ' ');
        return formattedBatch;
    }
    const uniqueBatches = getBatches();

    const getBatchesMarkup = uniqueBatches.map((batch) =>
        <li key={batch} cohort={batch} onClick={(event) => cohortClickHandler(event)} >{formatBatch(batch)}</li>);

    const cohortClickHandler = (event) => {
        cohortClick(event.target.attributes["cohort"].value, event.target.innerHTML)
    }
    return (
        <>
            <h2>Choose a Class by Start Date</h2>
            <ul class="cohort-ul">
                <li key="allStudents" cohort="allStudents" onClick={(event) => cohortClickHandler(event)}>All Students</li>
                {getBatchesMarkup}</ul>
        </>
    )
}