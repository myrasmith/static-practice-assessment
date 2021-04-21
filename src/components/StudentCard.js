import "./StudentCard.css";

const StudentCard = (props) => {
  return (
    <div className="StudentCard">
      <h3>{props.name}</h3>
      <p>Age: {props.age}</p>
      <img src={props.image} alt={props.name} />
      <p>Bio: {props.bio}</p>
      <p>GPA: {props.GPA.toFixed(2)}</p>
      <button>Add To Class</button>
    </div>
  );
};

export default StudentCard;
