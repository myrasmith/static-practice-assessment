
const StudentListItem = ({student, enrollStudent}) => {
    const {name, age, bio, image, GPA,} = student; 
    

    return(
        <li>
            <h3>{name}</h3>
            Age: {age}
            <img src={image} alt="student" />
            <p>Bio: {bio}</p>
            GPA: {GPA.toFixed(2)}
            <button onClick={() => enrollStudent(student)}>Add To Class</button> 
        </li>
    )
}

export default StudentListItem;