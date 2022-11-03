describe("All Services & Resources Listing page", () => {
    it("Visits the All Services & Resources Listing Page", () => {
        cy.visit("help/services-resources")
        cy.get(".logo-ucla").should("be.visible")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
