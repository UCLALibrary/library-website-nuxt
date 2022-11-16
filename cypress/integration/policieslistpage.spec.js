describe("Policy Detail page", () => {
    it("Visits a Policy Detail Page", () => {
        cy.visit("about/policies")
        cy.get(".logo-ucla").should("be.visible")
        cy.get(".lpage-policies").should("be.visible")
        cy.get("h1.title").should(
            "contain",
            "I Like Turtles"
        )
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
