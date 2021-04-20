import "./TeacherEnrollment.css";

const TeacherEnrollment = (props) => {
  return (
    <form className="TeacherEnrollment">
      <h2>Teacher Enrollment</h2>

      <label htmlFor="teacherName">Name</label>
      <input type="text" name="name" id="teacherName" />

      <label htmlFor="teacherSubject">Subject</label>
      <input type="text" name="subject" id="teacherSubject" />

      <label htmlFor="teacherEmail">Email</label>
      <input type="text" name="email" id="teacherEmail" />

      <label htmlFor="teacherZip">Zip Code</label>
      <input type="text" name="zip" id="teacherZip" />

      <label htmlFor="teacherPhone">Phone Number</label>
      <input type="text" name="phone" id="teacherPhone" />

      <button>Teach Class</button>
    </form>
  );
};

export default TeacherEnrollment;
