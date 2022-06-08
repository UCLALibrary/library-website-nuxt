describe("Mobile Website Homepage", () => {
    it("Visit the Mobile Homepage", () => {
        cy.visit("/")
        cy.viewport(900, 900)
        cy.get(".site-brand-bar").should("be.visible")
        cy.get(".header-main-responsive").should("be.visible")

        cy.get(".svg__icon-menu").click({ force: true })
        cy.percySnapshot({ widths: [768, 992, 1002] })
    })
})
