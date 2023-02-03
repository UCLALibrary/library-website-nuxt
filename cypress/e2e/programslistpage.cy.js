describe("Program List page", () => {
    it("Visits a Policy List Page", () => {
        cy.visit("about/programs")
        cy.get(".logo-ucla").should("be.visible")
        cy.get(".page-programs").should("be.visible")
        cy.get("h1.title").should(
            "contain",
            "Programs & Initiatives"
        )
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
