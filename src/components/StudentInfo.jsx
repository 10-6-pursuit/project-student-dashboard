import "/src/components/StudentInfo.css"
import StudentDetails from "/src/components/StudentDetails.jsx"


export default function StudentInfo({student}) {
   
    let studentFullName = `${student.names.preferredName} ${student.names.middleName[0]}. ${student.names.surname}`

    let studentBirthDay = new Date(student.dob).toLocaleString("default", {month:"long", day: "numeric", year: "numeric"})

    return (
        <div className="studentInfo__card">
            <div className="studentInfo__card-top">
                <div className="studentInfo__card-img">
                    <img src={student.profilePhoto} alt={student.names.preferredName} />
                </div>
                <div className="studentInfo__card-info">
                    <div className="studentInfo__card-fullName">{studentFullName}</div>
                    <div className="studentInfo__card-email">{student.username}</div>
                    <div className="studentInfo__card-birthday"><span className="birthday">Birthday:</span> {studentBirthDay}</div>
                </div>
                <div className="studentInfo__card-ontrack-status" style={{display: student.certifications.resume ? "block" : "none"}}>
                    <div>On Track to Graduate</div>
                </div>
            </div>
            <div className="studentInfo__card-bottom">
            <StudentDetails student={student}/>
            </div>
        </div>
    )
}

/*
{
    "id": "D8-hEWB",
    "names": {
      "preferredName": "Israel",
      "middleName": "Benjamin",
      "surname": "Rodriguez"
    },
    "username": "israel.rodriguez@pursuit.org",
    "dob": "2/3/1979",
    "profilePhoto": "https://xsgames.co/randomusers/avatar.php?g=male&minimum_age=38&maximum_age=48",
    "codewars": {
      "current": { "total": 1804, "lastWeek": 144 },
      "goal": { "total": 850, "lastWeek": 75 }
    },
    "certifications": {
      "resume": false,
      "linkedin": false,
      "github": false,
      "mockInterview": false
    },
    "notes": [
      {
        "commenter": "Alan R.",
        "comment": "Israel is a pleasure to work with!"
      }
    ],
    "cohort": {
      "cohortCode": "Winter2025",
      "cohortStartDate": "12/1/25",
      "scores": { "assignments": 0.71, "projects": 0.7, "assessments": 0.66 }
    }
  }
*/