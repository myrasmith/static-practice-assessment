
const StudentListItem = ({student, enrollStudent}) => {
    const {name, age, bio, image, GPA,} = student; 
    

    return(
        <li>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <img src={image} alt="student" />
            <p>Bio: {bio}</p>
            <p>GPA: {GPA}</p>
            <button onClick={() => enrollStudent(student)}>Add To My Class</button> 
        </li>
    )
}

export default StudentListItem;