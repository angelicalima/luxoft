class searchFlightElements{

    nightThemeSwitch() {
        return cy.get('[data-test-id="switch"]').find('[type="checkbox"]')
    }

    fromField(){
        return cy.get('[data-test-id="origin-autocomplete-field"]')
    }

    toField(){
        return cy.get('[data-test-id="destination-autocomplete-field"]')
    }

    passangerField(){
        return cy.get('[data-test-id="passengers-field"]')
    }

    searchFlightsBtn(){
        return cy.get('[data-test-id="form-submit"]')
    }

    departureDateInput(){
        return cy.get('[class="trip-duration__input-wrapper --departure"]').find('input')

    }


    selectPassangerAndClass(adultsNumber, childrenNumber, infantsNumber, classType){
        this.passangerField().click();
        for(var i=1; i<adultsNumber; i++){
            cy.get("[data-test-id=passengers-adults-field]").find("[class='additional-fields__passenger-control --increment']").click()
        }
        for(var i=0; i<childrenNumber; i++){
            cy.get("[data-test-id=passengers-children-field]").find("[class='additional-fields__passenger-control --increment']").click()
        }
        for(var i=0; i<infantsNumber; i++){
            cy.get("[data-test-id=passengers-infants-field]").find("[class='additional-fields__passenger-control --increment']").click()
        }
        cy.get('input[name='+classType+']').type("{esc}", {force: true})
    }

    
    setDepartureDateInput(departureDate){
        const date = new Date(`${departureDate}, 1970`);
        const monthLong = date.toLocaleString('en-US', { month: 'long' });
        const monthShort = date.toLocaleString('en-US', { month: 'short' });
        const day = date.getDate()
        this.departureDateInput().click({force: true})
        cy.get('[class="calendar-caption__select"]').first().select(monthLong)
        cy.get(`[aria-label*='${monthShort} ${day}']`).click()
    }



}
export default searchFlightElements
