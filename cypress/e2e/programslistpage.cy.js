describe("Program List page", () => {
    it("Visits a Policy List Page", () => {
        cy.visit("about/programs")
        cy.get(".logo-ucla").should("be.visible")
        cy.get(".page-programs").should("be.visible")
        cy.get("h1.title").should(
            "contain",
            "Programs & Initiatives"
        )
        cy.get('.search-generic-filter-buttons').find('button').should('have.length', 1)
        cy.get('.search-generic-filter-buttons > button').click()
        cy.get("fieldset.base-checkbox-group > ul.list > li.list-item").find("label").should("have.length.greaterThan",0)
    
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})