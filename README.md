# Student Dashboard Project
## Description
Build a webapp using react to display list of students and student details in a school with the option to filter by cohort. Project criteria outlined [HERE](./project-criteria.md)

## Live site
The live site is hosted on netlify [HERE](https://antcannon-react-student-dashboard.netlify.app/).

## Design
Two pane site design with the following elements
- Header
- Cohort selection panel
- Student display area

Technology & Libraries
- Vite + React
- Javascript
- HTML 
- CSS

## User Functionality
- Filter students by cohort
- Toggle show / hide student details
- Use 1-On-1 Form to add a Note with their name and comment

## Learning Goals
- Data shape
- React components
- Passing props
- React hooks
  - useState
  - lifting state

## Extra Features
- Ascending and Descending Sorting
  - ID
  - First Name
  - Last Name
  - Total Codewars Points
- Cohort symbols on student cards

## Planning
Build static site of specific component one level at a time.
For example: when starting, I wrote the html for the header, cohort panel and student panel with static h elements that had the name of the component i.e. "Header", "Cohort Panel", "Student Panel".
Create the relative components. I then did the same in the cohort panel, then for the student panel.  

**Component Map**
| Component | Parent | Children |
|---|---|---|
| 1. App | Index | Header, CohortList, StudentList |
| 2. Header | App | N/A |
| 2. CohortPanel | App | Cohorts |
| 3. Cohorts | CohortPanel | Cohort |
| 4. Cohort | Cohorts | N/A |
| 2. StudentPanel | App | Students |
| 3. Students | StudentPanel | Student |
| 4. Student | Students | StudentDetails |
| 5. StudentDetails | Student | Codewars, Scores, Certification, NotesSection |
| 6. Codewars| StudentDetails | N/A |
| 6. Scores| StudentDetails | N/A |
| 6. Certifications| StudentDetails | N/A |
| 6. NotesSection | StudentDetails | NoteForm, Notes |
| 7. NoteForm | NotesSection | N/A |
| 7. Notes | NotesSection | Note |
| 7. Note | Notes | N/A |

##
**Data Shape**  
The imported data is an array of objects representing a studnet with the following shape.
| Element / Key        | Value Path                           | Type            | Value / Description                                                              |
| -------------------- | ------------------------------------ | --------------- | -------------------------------------------------------------------------------- |
| students             | data                                 | {objects[]}     | Array of objects                                                                 |
| student              | data[i]                              | {object}        | Object representing a student                                                    |
| \- id                | data[i].id                           | {string}        | "D8-hEWB"                                                                        |
| \- names             | data[i].names                        | {object}        | Object with students full name                                                   |
| \- - preferredName   | data[i].names.preferredName          | {string}        | "Israel"                                                                         |
| \- - middleName      | data[i].names.middleName             | {string}        | "Benjamin"                                                                       |
| \- - surname         | data[i].names.surname                | {string}        | "Rodriguez"                                                                      |
| \- username          | data[i].username                     | {string}        | "israel.rodriguez@pursuit.org"                                                   |
| \- dob               | data[i].dob                          | {string}        | "2/3/1979"                                                                       |
| \- profilePhoto      | data[i].profilePhoto                 | {string}        | "https://xsgames.co/randomusers/avatar.php?g=male&minimum_age=38&maximum_age=48" |
| \- codewars          | data[i].codewars                     | {object}        | Object with students codewars data current, goal                                 |
| \- - current         | data[i].codewars.current             | {object}        | Object with total, lastWeek                                                      |
| \- - - total         | data[i].codewars.current.total       | {number}        | 1804                                                                             |
| \- - - lastWeek      | data[i].codewars.current.lastWeek    | {number}        | 144                                                                              |
| \- - goal            | data[i].codewars.goal                | {object}        | Object with total, lastWeek                                                      |
| \- - - total         | data[i].codewars.goal.total          | {number}        | 850                                                                              |
| \- - - lastWeek      | data[i].codewars.goal.lastWeek       | {number}        | 75                                                                               |
| \- certifications    | data[i].certifications               | {object}        | Obeject with students certification data                                         |
| \- - resume          | data[i].certifications.resume        | {boolean}       | TRUE                                                                             |
| \- - linkedin        | data[i].certifications.linkedin      | {boolean}       | TRUE                                                                             |
| \- - github          | data[i].certifications.github        | {boolean}       | TRUE                                                                             |
| \- - mockInterview   | data[i].certifications.mockInterview | {boolean}       | TRUE                                                                             |
| \- notes             | data[i].notes                        | {object[]}      | Array of objects                                                                 |
| \- - note            | data[i].notes[j]                     | {object}        | Object representing a note                                                       |
| \- - - commenter     | data[i].notes[j].commenter           | {string}        | "Alan R."                                                                        |
| \- - - comment       | data[i].notes[j].comment             | {string}        | "Israel is a pleasure to work with!"                                             |
| \- cohort            | data[i].cohort                       | {object}        | object with students chorot data                                                 |
| \- - cohortCode      | data[i].cohort.cohortCode            | {string}        | "Winter2025"                                                                     |
| \- - cohortStartDate | data[i].cohort.cohortStartDate       | {string}        | "12/1/25"                                                                        |
| \- - scores          | data[i].cohort.scores                | {object}        | Object with assignments, projects, assessments                                   |
| \- - - assignments   | data[i].cohort.scores.assignments    | {number(float)} | 0.71                                                                             |
| \- - - projects      | data[i].cohort.scores.projects       | {number(float)} | 0.7                                                                              |
| \- - - assessments   | data[i].cohort.scores.assessments    | {number(float)} | 0.66                                                                             |

