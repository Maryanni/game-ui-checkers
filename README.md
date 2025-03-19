# game-ui-checkers.
This project implements automated UI tests for a checkers game using Cypress with the Page Object Model (POM) pattern.
# Install dependencies
npm install

# Open Cypress
npx cypress open  or npm run cy:open

# Run all tests
npx cypress run  or npm run cy:run


# Open report
open cypress/reports/mochawesome.html


- **cypress/e2e/checkers.cy.js**: Contains all test cases for the checkers game that I created
- **cypress/support/pages/PrincipalPage.js**: Base class with common UI interaction methods
- **cypress/support/pages/CheckerPage.js**: Encapsulates all interactions with the checkers game
- **cypress/reports/**: Contains generated test reports



