import CheckerPage from "../support/pages/CheckerPage";

describe("Checkers Game Tests", () => {
  const checkersPage = new CheckerPage();

  beforeEach(() => {
    checkersPage.navigate();
  });

  //Test case 1: verifify game title
  it("should show the game title correctly", () => {
    checkersPage.validateGameTitle("Checkers");
  });

  //Test case 2: verify initial message 
  it("should show the initial message before game starts", () => {
    checkersPage.validateInitialMessage();
  });

  //Test case 3: validate buttons existence
  it("should have Reset and Rules buttons enabled", () => {
    checkersPage.validateResetButtonEnabled();
    checkersPage.validateRulesButtonEnabled();
  });

  //Test case 4: validate reset button
  it("should reset game when the Reset button is clicked", () => {
    checkersPage.movePiece(6, 2, 7, 3);
    checkersPage.clickResetButton();
    checkersPage.validateInitialMessage();
  });

  //Test case 5: validate the page navigate rules
  it("should navigate to rules page when Rules button is clicked", () => {
    checkersPage.clickRulesButton();
  });

  //Test case 6: validate grid size
  it("should have the correct 8x8 grid size", () => {
    checkersPage.validateBoardSize();
  });

  //Test case 7: validate move
  it("should allow a valid diagonal move for a piece", () => {
    cy.get(checkersPage.orangePieces).its("length").then((initialCount) => {
        checkersPage.movePiece(6, 2, 7, 3);
        checkersPage.verifyMoveMessage();
        cy.get(checkersPage.orangePieces).its("length").should("eq", initialCount);
      });
  });

  //Test case 8: validate a invalid move
  it("should not allow non-diagonal moves", () => {
    checkersPage.movePiece(6, 2, 7, 2);
    cy.get(`img[name="space62"]`).should('have.attr', 'src').and('include', 'you2.gif');
  });

  //Test case 9: validate capture opponent
  it("should validate capturing the opponent's piece", () => {
    cy.get(checkersPage.bluePieces).its('length').then((initialBlueCount) => {
          checkersPage.movePiece(2, 2, 3, 3, 4000);
          checkersPage.movePiece(0, 2, 1, 3, 4000);
          checkersPage.movePiece(3, 1, 1, 3, 4000);
          cy.get(checkersPage.bluePieces).its('length').should('be.lessThan', initialBlueCount);
    });
  });

});
