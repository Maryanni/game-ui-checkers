import PrincipalPage from "./PrincipalPage";

class CheckerPage extends PrincipalPage{
    constructor(){
    super();
    this.path = '/game/checkers/';
    
    //Selectors
    this.orangePieces = '[src*="you1.gif"]';
    this.bluePieces = '[src*="me1.gif"]';
    }

    validateGameTitle(title){
        cy.get('h1').should('contain.text', title);
    }

    validateInitialMessage(){
        this.validateText('#message', 'Select an orange piece to move.');
    }

    validateResetButtonEnabled(){
        cy.contains('a', 'Restart').should('not.be.enabled');
    }

    validateRulesButtonEnabled() {
        cy.contains('a', 'Rules').should('not.be.enabled');
    }
    
    movePiece(fromRow, fromCol, toRow, toCol, timeout = 4000){
        cy.get(`img[name="space${fromRow}${fromCol}"]`, {timeout}).click();
        cy.get(`img[name="space${toRow}${toCol}"]`, {timeout}).click();
    }

    clickResetButton() {
        // cy.get('a:contains("Restart")').click();
        this.clickElement('a:contains("Restart")');
    }

    clickRulesButton(){
        this.clickElement('a:contains("Rules")');
        //This validation is optional because it is an external website
        cy.origin('https://en.wikipedia.org', () => {
            cy.get('#firstHeading').should('contain.text', 'English draughts');
        });
    }

    validateBoardSize(){
        cy.get(`img[name^="space"]`).should('have.length', 64);
    }
    verifyMoveMessage(){
        this.validateText('#message', 'Make a move.');
    }
}

export default CheckerPage;