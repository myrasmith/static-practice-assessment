import studentData from "../../src/data/studentData";

describe("student", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("displays the name, GPA, age, image, and bio", () => {
    studentData.forEach((student) => {
      const { name, GPA, age, image, bio } = student;
      cy.findByText(name).should("exist");
      cy.contains(GPA.toFixed(2))
      cy.contains(age)
      cy.contains(bio)
      cy.get(`img[src="${image}"]`).should("exist");
    });
  });

  it("displays a GPA formatted properly", () => {
    studentData.forEach((student) => {
      const { GPA } = student;
      cy.contains(`GPA: ${GPA.toFixed(2)}`).should("exist");
    });
  });

  it("has an Add To Class button", () => {
    cy.findAllByText("Add To Class").should("have.length", studentData.length);
  });
});
