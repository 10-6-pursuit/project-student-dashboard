import { useState } from "react";
import React from "react";


export default function SideBar ( {setStudents, data}) {
   function filterStudents(event) {
    setStudents(data.filter(person => person.cohort.cohortCode === event.target.innerText))
   }

    return (

<div class = "Sidebar">
    <h1> Choose a Class by Start Date</h1>

        <p onClick= {()=>setStudents(data)}> All Students</p>
         <hr/>

        <p onClick= {event => filterStudents(event)}> Winter2026⛄️</p>
        <hr/>

        <p onClick= {event => filterStudents(event)}> Fall2026🌧️</p>
        <hr/>

        <p onClick= {event => filterStudents(event)}> Summer2026🌞</p>
        <hr/>

        <p onClick= {event => filterStudents(event)}> Spring2026🌸</p>
        <hr/>

        <p onClick= {event => filterStudents(event)}> Winter2025⛄️</p>
        <hr/>

        <p onClick= {event => filterStudents(event)}> Fall2025🌧️</p>
        <hr/>

        <p onClick= {event => filterStudents(event)}> Summer2025🌞</p>
        <hr/>

        <p onClick= {event => filterStudents(event)}>Spring2025🌸</p>
</div>
    );
    }