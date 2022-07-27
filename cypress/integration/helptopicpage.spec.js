describe("Help Topic page", () => {
    it("Visit a Help Topic Page", () => {
        cy.visit("/applicants/how-to-apply")
        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should("contain", "How to Apply")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
