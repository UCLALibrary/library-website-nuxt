describe("Collection Detail page", () => {
    it("Visits a Collection Detail Page", () => {
        cy.visit("/collections/halloween-costumes")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get(".page-collection-detail").should("be.visible")
        cy.get("h1.title").should(
            "contain",
            "TEST - Title of Collection - Halloween Costumes"
        )
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
