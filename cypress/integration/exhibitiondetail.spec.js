describe("Exhibition Detail page", () => {
    it("Visits an Exhibition Detail Page", () => {
        // the following data will not work in production
        cy.visit("/visit/events-exhibitions/fante-asafo-flags")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should("contain", "Fante Asafo Flags")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
