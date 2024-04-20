import Header from "./component/Header";
import data from "./data/data.json";
import "./App.css";
import CohortList from "./component/CohortList";
import StudentCard from "./component/StudentCard";
import { useState } from "react";

function App() {
  const [backgroundColor, setBackgroundColor] = useState(`white`);
  const [color, setColor] = useState(`black`);

  const [newList, setNewList] = useState(data);
  // const [showMore, setShowMore] = useState(``);
  // const [showMoreBool, setShowMoreBool] = useState(false);



  const [cohort, setCohort] = useState(`All-students`);
  const [NumberOfStudent, setNumberOfStudent] = useState(data.length);

  function addComment(student, comment) {
    for (let element of newList) {
      element.id === student.id && element.notes.push(comment);

      setNewList([...newList]);
    }
  }
  // function toggleShow(arg) {
  //  if(arg&&!showMoreBool){
  //   setShowMore(arg);
  //   setShowMoreBool(true)
  //  }
  //  if(arg&&showMoreBool){
  //   setShowMore(``);
  //   setShowMoreBool(false)
  //  }
   
  // }

  let array = [];
  let newArray = [];
  for (let element of data) {
    if (!newArray.includes(element.cohort.cohortCode)) {
      newArray.push(element.cohort.cohortCode);
      array.push(element);
    }
  }
 

  array.sort(
    (a, b) =>
      new Date(b.cohort.cohortStartDate) - new Date(a.cohort.cohortStartDate)
  );

  function handleList(event) {
    if (event.target.id === `all-students-button`) {
      setCohort(`All students`);
      setNewList(data)
    } else {
      let filteredArray = [
        ...data.filter((el) => event.target.id === el.cohort.cohortCode),
      ];
      let cohort =
        event.target.id.match(/[a-zA-Z]/gi).join(``) +
        ` ` +
        event.target.id.match(/[0-9]/gi).join(``);
      setNewList(filteredArray);

      setCohort(cohort);
      setNumberOfStudent(filteredArray.length);
    }

    // setShowMore(false);
  }

  function toggleMode() {
    if (backgroundColor === `white`) {
      setBackgroundColor(`black`);
      setColor(`white`);
    } else {
      setBackgroundColor(`white`);
      setColor(`black`);
    }
  }
  const hexCharacters = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  function getCharacter(index) {
    return hexCharacters[index];
  }

  function generateNewColor() {
    let hexColorRep = "#";

    for (let index = 0; index < 6; index++) {
      const randomPosition = Math.floor(Math.random() * hexCharacters.length);
      hexColorRep += getCharacter(randomPosition);
    }

    return hexColorRep;
  }

  return (
    <div>
      <Header />
      <main style={{ backgroundColor: backgroundColor, color: color }}>
        <>
          <div className="cohort-list-container">
            <ul className="cohort-list">
              <h1>Choose a Class by Start Date</h1>
              <button
                id="all-students-button"
                className="all-students-button"
                onClick={handleList}
              >
                {" "}
                All Students
              </button>

              {...array.map((student) => {
                return (
                  <CohortList
                    handleList={handleList}
                    student={student}
                    generateNewColor={generateNewColor}
                  />
                );
              })}
            </ul>
          </div>
          <div className="student-list-container">
            <ul className="student-list">
              <h2 className="cohort-title">{cohort}</h2>
              <p className="total-students">
                Total Students: <span>{NumberOfStudent}</span>
              </p>
              <button type="mode" onClick={toggleMode}>
                {" "}
                {color === `black` ? `Dark Mode` : `Light Mode`}
              </button>

              {...newList.map((student, i) => {
                return (
                  <StudentCard
                  // toggleShow={toggleShow}
                    student={student}
                    addComment={addComment}
                    // showMore={showMore}
                    key={student.id + i}
                  />
                );
              })}
            </ul>
          </div>
        </>
      </main>
    </div>
  );
}

export default App;
