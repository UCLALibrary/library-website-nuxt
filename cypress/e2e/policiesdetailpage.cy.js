describe("Policy Detail page", () => {
    it("Visits a Policy Detail Page", () => {
        cy.visit("about/policies/shhh")
        cy.get(".logo-ucla").should("be.visible")
        cy.get(".page-anchor").scrollIntoView().click({ force:true })
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })

    context("When there isn't an entry in craft", () => {
        it("Raises a 404 error", () => {
            // cy.visit("/about/blogs/no_entry", {failOnStatusCode: false})
            // cy.request({url: "/about/policies/no_entry", failOnStatusCode: false}).its("status").should("equal", 404)
            cy.visit("/about/policies/no_entry")
            cy.get("p.error").should("contain","404")
            cy.get("h1.error-title").should("contain","Page not found")
        })
    })
})
