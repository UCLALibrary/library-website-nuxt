describe("Resource Listing page", () => {
    it("Visit Resource Listing Page", () => {
        cy.visit("/applicants/resources")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should("contain", "All Resources")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
