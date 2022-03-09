describe("SimpleCards", () => {
    it("Default", () => {
        cy.visit("/iframe.html?id=simple-cards--default&args=&viewMode=story")
        cy.get(".simple-cards").should("exist")

        cy.percySnapshot("SimpleCards: Default")
    })
})
