describe("Location Listing page", () => {
    it("Visit a Location Listing Page", () => {
        cy.visit("/visit/locations")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should(
            "contain",
            "Listing - Locations & Hours"
        )
        cy.get('.search-generic-filter-buttons').find('button').should('have.length', 1)
        cy.get('.search-generic-filter-buttons > button').click()
        cy.get("fieldset.base-checkbox-group > ul.list > li.list-item").find("label").should("have.length.greaterThan",0)

        cy.percySnapshot({ widths: [768, 992, 1200] })
    })

    it("Visit Locations Listing page filter by type", () => {
        cy.visit('/visit/locations/?q&filters=%7B"amenities.keyword"%3A%5B"Lockers"%5D%7D')

        cy.get ('h2.about-results').should("be.visible")
    })
})
