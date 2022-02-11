describe("FLEXIBLE / Rich Text", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=flexible-rich-text--default&args=&viewMode=story"
        )
        cy.get(".rich-text").should("exist")

        cy.percySnapshot("FLEXIBLE / Rich Text: Default")
    })
})
