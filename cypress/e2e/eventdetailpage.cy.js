describe("Event Detail page", () => {
    it("Visit a Event Detail Page", () => {
        cy.visit("/visit/events-exhibitions/marion-davies-captain-of-her-soul")

        // Branding
        cy.get(".logo-ucla").should("be.visible")
        
        // Breadcrumbs
        cy.get(".nav-breadcrumb .parent-page-url").should("contain", "Events & Exhibitions")
            .and("have.attr", "href", "/visit/events-exhibitions")
        cy.get(".nav-breadcrumb .current-page-title").should("contain", "Marion Davies: Captain of Her Soul")

        cy.get(".banner-header h1.title").should("contain", "Marion Davies: Captain of Her Soul")

        cy.percySnapshot({ widths: [768, 992, 1200] })
    })

    context("When the page doesn't exist", () => {
        it("Raises a 404 error", () => {
            cy.visit("/visit/events-exhibitions/no_entry", {failOnStatusCode: false})
            cy.get("p.error").should("contain","404")
            cy.get("h1.error-title").should("contain","Page not found")
        })
    })
})
