describe("FLEXIBLE / Section Media With Text", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=flexible-section-media-with-text--default&args=&viewMode=story"
        )
        cy.get(".section-media-with-text").should("exist")

        cy.percySnapshot("FLEXIBLE / Section Media With Text: Default")
    })

    // it("Grey", () => {
    //     cy.visit(
    //         "/iframe.html?id=flexible-section-media-with-text--default&args=&viewMode=story"
    //     )
    //     cy.get(".section-media-with-text").should("exist")
    //
    //     cy.percySnapshot("FLEXIBLE / Section Media With Text: Default")
    // })
})
