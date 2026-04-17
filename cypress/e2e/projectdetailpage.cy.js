import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runProjectDetailTests({ withSnapshot = false } = {}) {
    it("Visit a Project Detail Page", () => {
        cy.visit("/projects/kids-play-project")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should("contain", "Kids Play Project")

        // "Target" attribute for links
        cy.contains("a.button-link", "Brahma Kumaris").should("have.attr", "target", "_blank")
        cy.contains("a.smart-link", "Metadata Planning Worksheet").should("have.attr", "target", "_blank")
        cy.contains("a.smart-link", "Kids Play").should("not.have.attr", "target", "_blank")

        if (withSnapshot) cy.visualSnapshot('Project Detail Page')
    })
    it("Call to action Upload assests works on Project Page", () => {
        cy.visit("/projects/vintage-whoopie-cushions")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should("contain", "Famous Fountains of Italy")

        // "Target" attribute for links
        cy.contains("a.button-link", "Explore Inventory").should("have.attr", "target", "_blank")

       if (withSnapshot) cy.visualSnapshot('Upload assests works on Project Page')
    })
}

if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Project Detail page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runProjectDetailTests({ withSnapshot: true })
    })
  })
} else if(isPercy){
  describe('Project Detail page', () => {
    runProjectDetailTests({ withSnapshot: true })
  })
}
 else {
  describe('Project Detail page', () => {
    runProjectDetailTests({ withSnapshot: false })
  })
}
