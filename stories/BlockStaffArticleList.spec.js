describe("BLOCK / Staff / Article / List", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=block-staff-article-list--default&args=&viewMode=story"
        )
        cy.get(".block-staff-article-item").should("exist")

        cy.percySnapshot("BLOCK / Staff / Article / List: Default")
    })
})
