
describe("External", () => {
    it("check scores", () => {
      cy.visit("https://google.com/");
      cy.screenshot('Capturing the screenshot after successful login');
      });
   
  });