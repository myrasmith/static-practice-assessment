const TEST_CC_NUM = "1234567890";
const TEST_ZIP_CODE = "11372";
const BUTTON_TEXT = "Add To Class";

const addStudentsToClass = () => {
  cy.findAllByText(BUTTON_TEXT).each((button, i) => {
    if (i % 2 === 1) {
      button.click();
    }
  });
};

const formData = {
  name: "Corsky",
  subject: "Computer Programming",
  email: "erica@example.com",
  phoneNumber: TEST_CC_NUM,
  zipCode: TEST_ZIP_CODE,
};

const completeForm = (params = {}) => {
  const data = { ...formData, ...params };
  const { name, subject, email, phoneNumber, zipCode } = data;
  if (name) {
    cy.get("form").findByLabelText("Name").type(name);
  }
  cy.get("form").findByLabelText("Subject").type(subject);
  cy.get("form").findByLabelText("Email").type(email);
  cy.get("form").findByLabelText("Phone Number").type(phoneNumber);
  cy.get("form").findByLabelText("Zip Code").type(zipCode);
};

const completeAndEnroll = (params = {}) => {
  completeForm(params);
  return cy.findByText("Teach Class").click();
};

const expectAlertText = (stub, text) => {
  const alert = stub.getCall(0);
  expect(alert).to.exist;

  const alertText = alert.args.join(" ");
  expect(alertText).to.include(text);
};

describe("Enroll as teacher", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("I can complete the inputs in the checkout form", () => {
    completeForm();

    Object.values(formData).forEach((val) => {
      cy.findByDisplayValue(val);
    });
  });

  describe("When I complete the form with valid input and click Teach Class", () => {
    let stub;
    beforeEach(() => {
      stub = cy.stub();
      cy.on("window:alert", stub);
    });

    it("an alert tells me the enrollment was successful", () => {
      completeAndEnroll().then(() => {
        expectAlertText(stub, "You are now the teacher");
      });
    });

    it("an alert tells me the total number of students I will teach and their average GPA", () => {
      addStudentsToClass();
      completeAndEnroll().then(() => {
        expectAlertText(stub, "You have 3 students");
        expectAlertText(stub, "3.02");
      });
    });
  });

  describe("When I complete the form with invalid inputs and click Enroll Now", () => {
    let stub;
    beforeEach(() => {
      stub = cy.stub();
      cy.on("window:alert", stub);
    });

    it("an alert tells me input is invalid if data is missing", () => {
      completeAndEnroll({ name: "" }).then(() => {
        expectAlertText(stub, "Input is invalid");
      });
    });

    it("an alert tells me if the phone number is invalid", () => {
      completeAndEnroll({ phoneNumber: "42" }).then(() => {
        expectAlertText(stub, "Phone number is not valid");
      });
    });

    it("an alert tells me if the zip code is invalid", () => {
      completeAndEnroll({ zipCode: "42" }).then(() => {
        expectAlertText(stub, "Zip code is not valid");
      });
    });
  });
});
