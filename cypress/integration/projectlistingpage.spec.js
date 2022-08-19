describe("Project Listing page", () => {
    it("Visit Project Listing Page", () => {
        cy.visit("/projects")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should("contain", "Funded Projects")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
