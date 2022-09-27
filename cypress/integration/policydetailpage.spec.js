describe("Policy Detail page", () => {
    it("Visits a Policy Detail Page", () => {
        cy.visit("/policy/shhh")
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should("contain", "Policy Detail")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })

    it("Visits a Nested Policy Detail Page", () => {
        cy.visit("/accessibility/emergency")
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should("contain", "Emergency")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
