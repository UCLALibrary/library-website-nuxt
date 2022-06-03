describe("Location Detail page", () => {
    it("Visit a Location Detail Page", () => {
        cy.visit("/visit/locations/biomed")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should(
            "contain",
            "Louise M. Darling Biomedical Library"
        )
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
