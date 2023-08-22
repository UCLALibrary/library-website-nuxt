describe("Website Homepage", () => {
    it("Visit the Homepage", () => {
        cy.visit("/")
        cy.viewport(1200, 1200)
    })
})
