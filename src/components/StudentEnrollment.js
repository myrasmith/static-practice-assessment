function StudentEnrollment(props) {
  const { enrolled } = props;
  return (
    <section className="Roster">
      <h2>Enrolled</h2>
      <ul>
        {enrolled.map((student) => {
          return (
            <li key={student.id}>
              {student.name}: {student.GPA}
            </li>
          );
        })}
      </ul>
      <h3>Total Student Count: {enrolled.length}</h3>
      <h3>Average GPA: {meanGPA(enrolled).toFixed(2)}</h3>
    </section>
  );
}

const meanGPA = (enrolled) => {
  return (
    enrolled.map((student) => student.GPA).reduce((sum, gpa) => sum + gpa, 0) /
    enrolled.length
  );
};

export default StudentEnrollment;
