import studentData from "../../src/data/studentData";

describe("layout", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("has a section with students laid out in a grid", () => {
    cy.get(".Students").should("have.css", "display", "grid");
    cy.get(".Students").should("have.css", "grid-template-columns");

    studentData.forEach((student) => {
      const { name } = student;
      cy.findByText(name).should("exist");
    });
  });

  it("has an enrolled section with student count, and average GPA", () => {
    cy.findByText("Enrolled").should("exist");
    cy.findByText(/Total Student Count/).should("exist");
    cy.findByText(/Average GPA/).should("exist");
  });

  it("has a Teacher enrollment section with expected form inputs", () => {
    cy.findByText("Teacher Enrollment").should("exist");
    cy.get("form").findByLabelText("Name").should("exist");
    cy.get("form").findByLabelText("Subject").should("exist");
    cy.get("form").findByLabelText("Email").should("exist");
    cy.get("form").findByLabelText("Phone Number").should("exist");
    cy.get("form").findByLabelText("Zip Code").should("exist");
    cy.get("button").contains("Teach Class").should("exist");
  });
});
