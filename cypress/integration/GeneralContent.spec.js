describe("General Content page", () => {
    it("Visit a General Content Page", () => {
        cy.visit("/research-teaching-support/research-help")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
