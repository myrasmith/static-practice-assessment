import StudentListItem from "./StudentListItem";
import "./StudentList.css";

const StudentList = ({ students, enrollStudent }) => {
  return (
    <ul className="Students">
      {students.map((student) => {
        return <StudentListItem key={student.id} student={student} enrollStudent={enrollStudent} />;
      })}
    </ul>
  );
};

export default StudentList;
