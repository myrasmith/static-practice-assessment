import React from "react";
import "./App.css";
import StudentList from "./Components/StudentList";
import studentData from "./data/studentData";

class App extends React.Component {
  state = { students: studentData, enrolled: [] };

  enrollStudent = (student) => {
    this.setState((prevState) => ({enrolled: [...prevState.enrolled, student]}))
  }

  render() {
    console.log(this.state.enrolled)
    return (
      <>
        <h1>Build a Class</h1>
        <StudentList students={studentData} enrollStudent={this.enrollStudent}/>
      </>
    );

  }
};

export default App;
