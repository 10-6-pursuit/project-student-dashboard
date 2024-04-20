import { useState } from "react";

export default function CohortList({ cohortStudents, cohortClick }) {

    //TO SORT STUDENT LIST BY DATE
    const orderByDate = (dataList) => {
        return dataList.sort(function (a, b) {
            return new Date(b.cohort.cohortStartDate) - new Date(a.cohort.cohortStartDate);
        });
    }
    const [studentsState, setStudents] = useState(orderByDate(cohortStudents));

    const getBatches = () => studentsState.reduce((batches, student) => {
        if (!batches.includes(student.cohort.cohortCode)) {
            batches.push(student.cohort.cohortCode);
        }
        return batches;
    }, []);

    //TO FORMAT COHORT NAME BY HUMAN READABLE FORMAT
    const formatBatch = (batch) => {
        let formattedBatch;
        let batchSeason = batch.substring(0, batch.length - 4);
        formattedBatch = batch.replace(batchSeason, batchSeason + ' ');
        return formattedBatch;
    }
    const uniqueBatches = getBatches();

    // TO CREATE UNIQUE COHORT LIST MARKUP 
    const getBatchesMarkup = uniqueBatches.map((batch) =>
        <li key={batch} class="margin-10" cohort={batch} onClick={(event) => cohortClickHandler(event)} >{formatBatch(batch)}</li>);

    //TO HANDLE COHORT CLICK
    const cohortClickHandler = (event) => {
        cohortClick(event.target.attributes["cohort"].value, event.target.innerHTML)
    }
    return (
        <>
            <h3 class="margin-10">Choose a Class by Start Date</h3>
            <ul class="cohort-ul">
                <li class="margin-10" key="allStudents" cohort="allStudents" onClick={(event) => cohortClickHandler(event)}>All Students</li>
                {getBatchesMarkup}</ul>
        </>
    )
}