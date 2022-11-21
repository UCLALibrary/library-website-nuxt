describe("Endowments Detail page", () => {
    it("Visits an Endowments Detail Page", () => {
        // the following data will not work in production
        cy.visit("support/endowments/lifu-wang-chinese-cultural-endowment")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get(".page-endowments-detail").should("be.visible")
        cy.get("h1.title").should("contain", "Lifu Wang")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
