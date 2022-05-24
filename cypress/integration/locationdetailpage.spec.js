describe("Location Detail page", () => {
    it("Visit a Location Detail Page", () => {
        cy.visit("/visit/locations/arts-library")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should("contain", "Arts Library")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
