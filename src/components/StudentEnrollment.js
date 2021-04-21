function StudentEnrollment(props) {
  const { enrolled, classSize, averageEnrolledGPA } = props;
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
      <h3>Total Student Count: {classSize}</h3>
      <h3>Average GPA: {averageEnrolledGPA}</h3>
    </section>
  );
}

export default StudentEnrollment;
