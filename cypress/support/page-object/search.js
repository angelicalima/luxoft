import SearchFlightElements from "./common/searchFlightElements"

class SearchPage{

    navigate() {
        cy.visit('/search')
    }

    searchFlightElements = new SearchFlightElements()

}
export default SearchPage
