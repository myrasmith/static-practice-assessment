import React from "react";
import "./Form.css";

class Form extends React.Component {
  state = { name: "", subject: "", email: "", zipCode: "", phoneNumber: "" };

  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    const { name, subject, email, zipCode, phoneNumber } = this.state;
    return (
      <form className="FormContainer" onSubmit={this.handleSubmit}>
        <h2>Teacher Enrollment</h2>
        <label htmlFor={"name"}>
          Name
        </label>
          <input
            id={"name"}
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        <label htmlFor={"subject"}>
          Subject
        </label>
          <input
            id={"subject"}
            name="subject"
            value={subject}
            onChange={this.handleChange}
          />
        <label htmlFor={"email"}>
          Email
        </label>
          <input
            id={"email"}
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        <label htmlFor={"zipCode"}>
          Zip Code
        </label>
          <input
            id={"zipCode"}
            name="zipCode"
            value={zipCode}
            onChange={this.handleChange}
          />
        <label htmlFor={"phoneNumber"}>
          Phone Number
        </label>
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
