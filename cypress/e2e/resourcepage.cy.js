import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runResourceDetailTests({ withSnapshot = false } = {}) {
    it("Visit a Resource Detail Page", () => {
        cy.visit("/applicants/resources/meap-bunnies")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should("contain", "Meap Bunnies")
        if (withSnapshot) cy.visualSnapshot("Resource Detail Page")
    })
}

if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Resource Detail page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runResourceDetailTests({ withSnapshot: true })
    })
  })
} else if(isPercy){
  describe('Resource Detail page', () => {
    runResourceDetailTests({ withSnapshot: true })
  })
}
 else {
  describe('Resource Detail page', () => {
    runResourceDetailTests({ withSnapshot: false })
  })
}
