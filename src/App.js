import React from "react";
import StudentList from "./components/StudentList";
import StudentEnrollment from "./components/StudentEnrollment";
import TeacherEnrollment from "./components/TeacherEnrollment";

import "./App.css";

/* 
Data we need for our app to render correctly:
  - full list of students
  - list of enrolled students
  - total enrolled student count
  - average enrolled student gpa
  - form input values
  
Which of these data should be state? Keep in mind:
  1. Is it passed in from a parent via props? If so, it probably isn’t state.
  2. Does it remain unchanged over time? If so, it probably isn’t state.
  3. Can you compute it based on any other state or props in your component? If so, it isn’t state.
*/

/*
Where should state live?

Things to keep in mind:
- Identify every component that renders something based on that state.
- Find a common owner component (a single component above all the components that need the state in the hierarchy).
- Either the common owner or another component higher up in the hierarchy should own the state.
- If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.
*/

class App extends React.Component {
  render() {
    const { students } = this.props;
    const enrolledStudents = students;
    const averageEnrolledGPA = meanGPA(enrolledStudents).toFixed(2);
    const classSize = enrolledStudents.length;
    return (
      <div class="App">
        <div className="leftSide">
          <h1>Build a Class</h1>
          <StudentList students={students} />
        </div>
        <div className="rightSide">
          <StudentEnrollment
            enrolled={enrolledStudents}
            averageEnrolledGPA={averageEnrolledGPA}
            classSize={classSize}
          />
          <TeacherEnrollment
            averageEnrolledGPA={averageEnrolledGPA}
            classSize={classSize}
          />
        </div>
      </div>
    );
  }
}

/**
 * Accepts an array of students and returns their average gpa.
 *
 * @param {student[]} enrolled - Array of enrolled students
 * @returns number - average gpa of students in the array
 */
const meanGPA = (enrolled) => {
  // TODO: fix this so it actually returns the average gpa!
  return 3.0;
};

export default App;
