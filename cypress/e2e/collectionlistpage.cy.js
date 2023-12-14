describe("Collection Listing page", () => {
    it("Visit the Collection Listing Page", () => {
        cy.visit("/collections")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get(".page-anchor").scrollIntoView().should('be.visible')
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
