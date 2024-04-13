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
|---|---|---|---|---|
| App | Index | Header, CohortList, StudentList | N/A | N/A |
| Header | App | N/A | N/A | N/A |
| CohortList | App | N/A | CohortList | N/A |
| StudentList | App | Student | StudentList | N/A |
| Student | App | N/A | StudentList | N/A |
