describe("Project Detail page", () => {
    it("Visit a Project Detail Page", () => {
        cy.visit("/projects/kids-play-project")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should("contain", "Kids Play Project")

        // "Target" attribute for links
        cy.contains("a.button-link", "Brahma Kumaris").should("have.attr", "target", "_blank")
        cy.contains("a.smart-link", "Metadata Planning Worksheet").should("have.attr", "target", "_blank")
        cy.contains("a.smart-link", "Kids Play").should("not.have.attr", "target", "_blank")

        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
    it("Call to action Upload assests works on Project Page", () => {
        cy.visit("/projects/vintage-whoopie-cushions")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should("contain", "Famous Fountains of Italy")

        // "Target" attribute for links
        cy.contains("a.button-link", "Explore Inventory").should("have.attr", "target", "_blank")

        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
