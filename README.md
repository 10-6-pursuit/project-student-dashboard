# Student Dashboard Project
## Description
Build a webapp using react to display list of students and student details in a school with the option to filter by cohort. Project criteria outlined [HERE](./project-criteria.md)

## Design
Simple site design with the following elements
- Header
- Cohort selection panel
- Display area

## User Functionality
- Filter students by cohort
- Toggle show / hide student details
- Use form to add their name and comment to 1-On-1 Notes section

## Learning Goals
- Data shape
- React components
- Passing props
- React hooks
  - useState
  - lifting state

## Planning
**Component Map**
| Component | Parent | Children | Props Used | Props Passed |
|----|---|---|---|---|
| 1. App | Index | Header, CohortList, StudentList | N/A | N/A |
| 2. Header | App | N/A | N/A | N/A |
| 2. CohortPanel | App | Cohorts | N/A | N/A |
| 3. Cohorts | CohortPanel | Cohort | N/A | N/A |
| 4. Cohort | Cohorts | N/A | N/A | N/A |
| 2. StudentPanel | App | Students | N/A | N/A |
| 3. Students | StudentPanel | Student | N/A | N/A |
| 4. Student | Students | StudentDetails | N/A | N/A |
| 5. StudentDetails | Student | Codewars, Scores, Certification, NotesSection | N/A | N/A |
| 6. Codewars| StudentDetails | N/A | N/A | N/A |
| 6. Scores| StudentDetails | N/A | N/A | N/A |
| 6. Certifications| StudentDetails | N/A | N/A | N/A |
| 6. NotesSection | StudentDetails | NoteForm | N/A | N/A |
| 7. NoteForm | NotesSection | N/A | N/A | N/A |
| 7. Notes | NotesSection | Note | N/A | N/A |
| 7. Note | Notes | N/A | N/A | N/A |

##
**Data*

