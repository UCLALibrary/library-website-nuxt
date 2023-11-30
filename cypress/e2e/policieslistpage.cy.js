describe("Policy List page", () => {
    it("Visits a Policy List Page", () => {
        cy.visit("about/policies")
        cy.get(".logo-ucla").should("be.visible")
        cy.get(".page-policies").should("be.visible")
        cy.get("h1.title").should(
            "contain",
            "Policies"
        )
        cy.get(".page-anchor").scrollIntoView().click({ force:true })
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
