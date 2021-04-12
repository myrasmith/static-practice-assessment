import React from "react";
import "./Form.css";

const onlyNums = (str) => {
  const nums = "0123456789";
  for (const char of str) {
    if (!nums.includes(char)) return false;
  }
  return true;
};

class Form extends React.Component {
  state = { name: "", subject: "", email: "", zipCode: "", phoneNumber: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    const { enrolledCount, average } = this.props;
    const { name, subject, email, zipCode, phoneNumber } = this.state;
    if (!name || !subject || !email) {
      window.alert("Input is invalid");
    } else if (phoneNumber.length !== 10 || !onlyNums(phoneNumber)) {
      window.alert("Phone number is not valid");
    } else if (zipCode.length !== 5 || !onlyNums(zipCode)) {
      window.alert("Zip code is not valid");
    } else {
      window.alert(
        `You are now the teacher.
             You have ${enrolledCount} students. 
             The average GPA is ${average.toFixed(2)}`
      );
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { name, subject, email, zipCode, phoneNumber } = this.state;
    return (
      <form className="FormContainer" onSubmit={this.handleSubmit}>
        <h2>Teacher Enrollment</h2>
        <label htmlFor={"name"}>Name</label>
        <input
          id={"name"}
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor={"subject"}>Subject</label>
        <input
          id={"subject"}
          name="subject"
          value={subject}
          onChange={this.handleChange}
        />
        <label htmlFor={"email"}>Email</label>
        <input
          id={"email"}
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <label htmlFor={"zipCode"}>Zip Code</label>
        <input
          id={"zipCode"}
          name="zipCode"
          value={zipCode}
          onChange={this.handleChange}
        />
        <label htmlFor={"phoneNumber"}>Phone Number</label>
        <input
          id={"phoneNumber"}
          name="phoneNumber"
          value={phoneNumber}
          onChange={this.handleChange}
        />

        <button type="submit">Teach Class</button>
      </form>
    );
  }
}

export default Form;
