import StudentCard from "./StudentCard";
import "./StudentList.css";

const StudentList = ({ students, addStudentToClass }) => {
  return (
    <section className="Students">
      {students.map((student, i) => (
        <StudentCard
          name={student.name}
          GPA={student.GPA}
          id={student.id}
          key={student.id}
          addStudentToClass={addStudentToClass}
        />
      ))}
    </section>
  );
};

export default StudentList;
