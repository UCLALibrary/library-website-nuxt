describe("Flexible RichText", () => {
    it("Default", () => {
        cy.visit("/iframe.html?id=rich-text--default&args=&viewMode=story")
        cy.get(".rich-text").should("exist")

        cy.percySnapshot("Rich Text: Default")
    })
})
