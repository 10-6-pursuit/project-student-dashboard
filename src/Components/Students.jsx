import { useState, React } from "react";
// import React from "react";
import Student from "./Student";

export default function Students({students}) {
    const studentCards =
        students.map(singleStudent => <Student singleStudent={singleStudent}/>);
    return <ul>{studentCards}</ul>
}