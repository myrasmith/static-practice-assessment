import React from "react";
import "./App.css";
import Form from "./Components/Form";
import Roster from "./Components/Roster";
import StudentList from "./Components/StudentList";
import studentData from "./data/studentData";

class App extends React.Component {
  state = { students: studentData, enrolled: [] };

  enrollStudent = (student) => {
    this.setState((prevState) => ({
      enrolled: [...prevState.enrolled, student],
    }));
  };

  render() {
    const {enrolled} = this.state;
        const averageGPA =
          enrolled.reduce((sum, enrollment) => sum + enrollment.GPA, 0) / enrolled.length;

    return (
      <div class="App">
        <div>
          <h1>Build a Class</h1>
          <StudentList
            students={studentData}
            enrollStudent={this.enrollStudent}
          />
        </div>
        <div className="RightSide">
          <Roster enrolled={this.state.enrolled} average={averageGPA || 0} />
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
