import StudentCard from "./StudentCard";
import "./StudentList.css";

const StudentList = ({ students }) => {
  return (
    <section className="Students">
      {students.map((student, i) => (
        <StudentCard {...student} key={student.id} />
      ))}
    </section>
  );
};

export default StudentList;
