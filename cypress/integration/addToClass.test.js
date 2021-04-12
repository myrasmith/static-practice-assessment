import studentData from "../../src/data/studentData";

const BUTTON_TEXT = "Add To Class";

const addStudentToClass = () => {
  cy.findAllByText(BUTTON_TEXT).first().click();
};

const addStudentsToClass = () => {
  cy.findAllByText(BUTTON_TEXT).each((button, i) => {
    if (i % 2 === 1) {
      button.click();
    }
  });
};

describe("add to class", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("When I click on a student", () => {
    it("their name appears in the class", () => {
      const { name } = studentData[0];
      addStudentToClass();

      cy.get(".EnrolledList > li").contains(name);
    });

    it("enrolled student has formatted GPA that appears in the class", () => {
      const { GPA } = studentData[0];
      addStudentToClass();

      cy.get(".EnrolledList > li").contains(GPA.toFixed(2));
    });

    it("updates the total number of students enrolled", () => {
      addStudentToClass();

      cy.findByText("Total Student Count: 1").should("exist");
    });

    it("calculates the average GPA", () => {
      addStudentToClass();
      cy.findByText("Average GPA: 4.60").should("exist");
    });
  });

  describe("When I click on additional students", () => {
    it("they are added to the class", () => {
      addStudentToClass();

      addStudentsToClass();
      for (let i = 1; i < studentData.length; i += 2) {
        const { name } = studentData[i];
        cy.get(".EnrolledList > li").contains(name);
      }
    });

    it("the other students in the class do not change", () => {
      const { name, GPA } = studentData[0];
      addStudentToClass();
      cy.get(".EnrolledList > li").contains(`${name}: ${GPA.toFixed(2)}`);

      addStudentsToClass();
      cy.get(".EnrolledList > li").contains(`${name}: ${GPA.toFixed(2)}`);
    });

    it("the average GPA and total student count update as expected", () => {
      addStudentToClass();
      cy.findByText("Total Student Count: 1").should("exist")
      cy.findByText("Average GPA: 4.60").should("exist");
      
      addStudentsToClass();
      cy.findByText("Total Student Count: 4").should("exist")
      cy.findByText("Average GPA: 3.41").should("exist");
    });
  });
});
