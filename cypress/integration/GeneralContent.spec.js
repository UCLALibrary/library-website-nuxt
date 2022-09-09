describe("General Content page", () => {
    it("Visits a General Content Page", () => {
        cy.visit("/privacy-terms-of-use")
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should("contain", "Privacy & Terms of Use")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })

    it("Visits a Nested General Content Page", () => {
        /*cy.visit("/accessibility/emergency")
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should("contain", "Emergency")
        cy.percySnapshot({ widths: [768, 992, 1200] })*/
    })
})
