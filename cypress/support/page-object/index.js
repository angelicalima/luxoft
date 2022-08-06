import SearchFlightElements from "./common/searchFlightElements"

class IndexPage{

    navigate() {
        return cy.visit('/')
    }

    openBookingInNewTabCheckbox(){
        return cy.get('[data-test-id="checkbox-booking"]').find('[type="checkbox"]')
    }


    searchFlightElements = new SearchFlightElements()

}
export default IndexPage

