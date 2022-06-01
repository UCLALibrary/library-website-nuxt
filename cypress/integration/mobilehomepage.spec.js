describe("Mobile Website Homepage", () => {
    it("Visit the Mobile Homepage", () => {
        cy.visit("/")

        cy.viewport(900, 900)
        cy.get(".header-main-responsive")
        cy.percySnapshot({ widths: [768, 992, 1002] })
    })
})
