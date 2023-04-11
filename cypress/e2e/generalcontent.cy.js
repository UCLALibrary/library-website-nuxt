describe("General Content page", () => {
    it("Visits a General Content Page", () => {
        cy.visit("/privacy-terms-of-use")
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should("contain", "Privacy & Terms of Use")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })

    it("Visits a Nested General Content Page", () => {
        cy.visit("/accessibility/emergency")
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should("contain", "Emergency")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })

    context("When there isn't an entry in craft", () => {
        it("Raises a 404 error", () => {
            cy.visit("/no_entry", {failOnStatusCode: false})
            cy.get("p.error").should("contain","404")
            cy.get("h1.error-title").should("contain","Page not found")
        })
    })
})
