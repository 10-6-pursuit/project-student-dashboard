 
 import { useState} from "react";
 import React from "react"
 import data from "./data/data.json";
 import Students from "./Components/Students";
 import SideBar from "./Components/SideBar";
 
 import CohortList from "./Components/CohortList";

export default function App() {

  // function StudentCount ({ singleStudent}) {
  //   return (
  //     <p> Total Students: {singleStudent.length}</p>
  //   )
  // }
//   const [singleStudent, setSingleStudent] = useState([]);
//   useEffect(() => {
//     setSingleStudent(data);
//   }, []);
  
//   const totalStudents= singleStudent.length;
//   console.log(singleStudent);
//   return ( 
//     <div>
//       <p>Total Students: {totalStudents}</p>
//       </div>
    
//   );
// }
  
  const[students, setStudents] = useState(data);
  const [singleStudent, setSingleStudent] = useState([]);
  //setSingleStudent(data);



  

  
  
  return (

    <div className="AppStyle">
          <div className="StudentDash">
         <h1>Student Dashboard</h1> 
         <h3>Total Students: {students.length}</h3>
         </div>
      <div className="DivStyle">
      <SideBar setStudents={setStudents} data= {data}/>
      {/* <CohortList /> */}
      <Students students={students} className="list"/>
      </div>
      
      
      
      


      
      {/* function cohortList () {
        const "names": {
          "preferredName": "Israel",
          "middleName": "Benjamin",
          "surname": "Rodriguez"
        },
        "username": "israel.rodriguez@pursuit.org",
        "dob": "2/3/1979",
        "profilePhoto": "https://xsgames.co/randomusers/avatar.php?g=male&minimum_age=38&maximum_age=48",
        "codewars": 
      } */}
    </div>
    
    
    
  );
}
