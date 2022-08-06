import IndexPage from '../support/page-object/index';
import SearchPage from '../support/page-object/search'



describe('Search Flight', () => {
  const indexPage = new IndexPage();
  const searchPage = new SearchPage();

  it('it should persist the data after redirect index to search', () => {
    indexPage.navigate()
    indexPage.openBookingInNewTabCheckbox().uncheck({force: true})
    indexPage.searchFlightElements.nightThemeSwitch().check({force: true})
    indexPage.searchFlightElements.fromField().click().clear().type("John F. Kennedy International Airport", { force: true })
    indexPage.searchFlightElements.toField().click().clear().type("Berlin", { force: true })
    indexPage.searchFlightElements.selectPassangerAndClass(2,0,0,"Economy")
    indexPage.searchFlightElements.setDepartureDateInput("Tue, August 30")
    indexPage.searchFlightElements.searchFlightsBtn().click();

    cy.url().should('include', '/search')
    searchPage.searchFlightElements.nightThemeSwitch().should('be.checked')
    searchPage.searchFlightElements.fromField().should("have.value", "New York")
    searchPage.searchFlightElements.toField().should("have.value", "Berlin")
    searchPage.searchFlightElements.departureDateInput().should("have.value", "Tue, August 30")
    searchPage.searchFlightElements.passangerField().find('div').eq(1).should("have.text", "2 passengers")
    searchPage.searchFlightElements.passangerField().find('div').eq(2).should("have.text", "economy")
  });

  
})


