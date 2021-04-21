import "./StudentCard.css";

const StudentCard = (props) => {
  console.log("PROPS.KEY IS:", props.key);
  return (
    <div className="StudentCard">
      <h3>{props.name}</h3>
      <p>Age: {props.age}</p>
      <img src={props.image} alt={props.name} />
      <p>Bio: {props.bio}</p>
      <p>GPA: {props.GPA.toFixed(2)}</p>
      <button
        onClick={() => {
          props.addStudentToClass(props.id);
        }}
      >
        Add To Class
      </button>
    </div>
  );
};

export default StudentCard;
