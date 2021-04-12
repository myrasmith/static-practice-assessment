[![Pursuit Logo](https://avatars1.githubusercontent.com/u/5825944?s=200&v=4)](https://pursuit.org)

# Module Three Mid Module Practice Assessment: Classroom Enrollment App

## Getting Started

- Fork this repo
- Clone the forked repository
- `cd` to the directory where you cloned it
- `npm install` to install dependencies
- `npm run cypress` to open the cypress testing window

> _Note_: Remember to `git add`, `git commit` and `git push` regularly

## Submission Guidelines

- When finished, commit and push your work.
- Make a pull request on github.
- Submit the link to your pull request on Canvas.

## Assessment Details

Create a classroom that meets the user stories below.

**The students at the school are stored in the array in `data/studentData.js`. Import this and pass it to your components. Use these students and do not change any information in the array, or else the tests will fail.**

![demo gif]()

## User Stories

1. I can see sections with students, class enrollment, and enroll as teacher form.
1. I can see each student's name, GPA, age, photo, bio, and an `Add To My Class` button.
1. I can add students to the class and see the total number of students, and average GPA.
1. I can submit the enroll form, complete my teacher enrollment, and see a confirmation alert with the average class GPA.
1. If I do not complete the teacher enrollment form with valid data, I will see an alert that tells me my data is not valid.

## Acceptance criteria and tests

The acceptance criteria below are covered by unit tests. Notice that there are some important details about the exact text, classes, or HTML tags you'll need to use in order to pass the tests.

### **`layout.test.js`**: `I can see sections with...`

- I can see a section with students laid out in a grid.
  - Use the class name `Students` with css grid and `grid-template-columns`
- I can see a `Roster` section that has `TotalStudentCount`, and `AverageGPA`
- I can see a `Teacher Enrollment` section that has inputs _and labels_ for `Name`, `Subject`, `Email`, `Phone Number`, `Zip Code`, and a button that says `Teach Class`
  - Don't forget to create `<label>` elements for your inputs

### **`students.test.js`**: `I can see each student's name...`

- Each student displays the name, GPA, age, photo, and bio.
- Each student has an `Add To Class` button.
  - The button text should be: `Add To Class`

### **`addToClass.test.js`**: `I can add students to my class...`

- When I click on a student, their name appears in the class.
- When I click on a student, their GPA appears in the class.
  - Use `<ul>` and `<li>` elements to list the students and GPA's in the class (name and GPA in one `<li>`)
- When I click on a student, the average GPA updates with the average of all students GPA's in the class.
  - Text should be: `Average GPA: 0.00` (with the correct average)
- When I click on a student, the total number of students updates.
  - Text should be: `Total Student Count: 0` (with the correct number of students)
- When I click on additional students, they are added to the class.
- When I click on additional students, the other students in the class do not change.
- When I click on additional students, the average GPA, and total student count is as expected.

### **`enrollAsTeacher.test.js`**: `I can submit the enrollAsTeacher form...`

- I can complete the inputs in the enrollment form.
- When I complete the form with valid input and click `Teach Class`, an alert tells me that I am the teacher and was successful.
  - Alert text should include: `You are the now the teacher`
- When I complete the form with valid input and click `Teach Class`, an alert tells me the total amount of students and their average GPA.
- When I complete the form but a piece of data is missing, an alert tells me that my input is not valid.
  - Alert text should include: `Input is not valid`
- When I complete the form but the phone number is not 10 digits long, an alert tells me `Phone number is not valid`
- When I complete the form but the zip code is not 5 digits long, an alert tells me `Zip code is not valid`

## Help and tips

- Before you write any code, think about your component structure.
  - What components will you need to represent the parts of the app?
  - Which components will need to have state?
  - Which components will need to know about the state of **other components**?
  - Which components will need to get props (data or callbacks) from another component?
  - Which components will be rendered by other components?
  - Draw out your component structure. Check your drawing against the user stories. Will you be able to implement all of the stories with this structure?
- The students for the store are in the array in `data/studentData.js`. You can import this and pass it to your components.
- You will need to check that a phone number is 10 digits long. You can use any 10 digit string for this. 
- If your tests are failing, read the acceptance criteria closely. Some tests expect you to use specific text, classes, or HTML elements.
