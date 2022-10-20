describe("Program Detail page", () => {
    it("Visit a Program Detail Page", () => {
        cy.visit("/about/programs/digital-library-program")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should(
            "contain",
            "Digital Library Program"
        )
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
