import React from "react";
import StudentList from "./components/StudentList";
import StudentEnrollment from "./components/StudentEnrollment";
import TeacherEnrollment from "./components/TeacherEnrollment";

import "./App.css";

class App extends React.Component {
  render() {
    const { students } = this.props;
    const enrolledStudents = students;
    return (
      <div class="App">
        <div className="leftSide">
          <h1>Build a Class</h1>
          <StudentList students={students} />
        </div>
        <div className="rightSide">
          <StudentEnrollment enrolled={enrolledStudents} />
          <TeacherEnrollment />
        </div>
      </div>
    );
  }
}

export default App;
