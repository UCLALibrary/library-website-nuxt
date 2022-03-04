describe("IMPACT REPORT / Rich Text", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=impact-report-rich-text--default&args=&viewMode=story"
        )
        cy.get(".rich-text").should("exist")

        cy.percySnapshot("IMPACT REPORT / Rich Text: Default")
    })
})
