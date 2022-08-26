describe("General Content page", () => {
    it("Visit a General Content Page", () => {
        cy.visit("/about")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should("contain", "Who We Are")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
