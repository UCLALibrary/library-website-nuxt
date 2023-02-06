describe("Location Detail page", () => {
    it("Visit a Location Detail Page", () => {
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

})
