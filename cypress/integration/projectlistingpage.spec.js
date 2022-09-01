describe("Project Listing page", () => {
    it("Visit Project Listing Page", () => {
        cy.visit("/projects")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should("contain", "Funded Projects")

        // projects open in same tab
        cy.get("li.block-highlight a.smart-link:first-child").should("not.have.attr", "target", "_blank")

        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
