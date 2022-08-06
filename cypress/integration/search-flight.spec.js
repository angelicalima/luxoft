import IndexPage from '../support/page-object/index';
import SearchPage from '../support/page-object/search'


describe('Search Flight', () => {
  const indexPage = new IndexPage();
  const searchPage = new SearchPage();

// variable that will hold cy.stub created in the test
// let stub

// Cypress.on('window:before:load', (win) => {
//   // if the test has prepared a stub
//   if (stub) {
//     // the stub function is ready
//     // always returns it when the application
//     // is trying to use "window.open"
//     Object.defineProperty(win, 'open', {
//       get() {
//         return stub
//       }
//     })
//   }
// })

// beforeEach(() => {
//   // let the test create the stub if it needs it
//   stub = null
// })

  //https://docs.cypress.io/guides/references/trade-offs#Multiple-tabs
  

  it('it should open a new window with all previous data', () => {
    //stub = cy.stub().as('open')

    indexPage.navigate()
    //cy.get('@open').should('have.been.calledOnce')

    indexPage.openBookingInNewTabCheckbox().uncheck({force: true})
    indexPage.searchFlightElements.nightThemeSwitch().check({force: true})
    indexPage.searchFlightElements.fromField().clear().type("John F. Kennedy International Airport", { force: true })
    indexPage.searchFlightElements.toField().clear().type("Berlin", { force: true })
    indexPage.searchFlightElements.selectPassangerAndClass(2,0,0,"Economy")
    indexPage.searchFlightElements.setDepartureDateInput("Tue, August 30")
    indexPage.searchFlightElements.searchFlightsBtn().click();
    // cy.get('@open').should('have.been.calledOnce')

    cy.url().should('include', '/search')

    searchPage.searchFlightElements.nightThemeSwitch().should('be.checked')
    searchPage.searchFlightElements.fromField().should("have.value", "New York")
    searchPage.searchFlightElements.toField().should("have.value", "Berlin")
    searchPage.searchFlightElements.departureDateInput().should("have.value", "Tue, August 30")
    searchPage.searchFlightElements.passangerField().find('div').eq(1).should("have.text", "2 passengers")
    searchPage.searchFlightElements.passangerField().find('div').eq(2).should("have.text", "economy")
  });

  
})


