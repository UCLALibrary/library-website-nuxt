import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runHelpTopicTests({ withSnapshot = false } = {}) {
    it("Visit a Help Topic Page", () => {
        cy.visit("/applicants/how-to-apply")
        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should("contain", "How to Apply")
        if (withSnapshot) cy.visualSnapshot("Help Topic page")
    })
}

if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Help Topic page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runHelpTopicTests({ withSnapshot: true })
    })
  })
 } else if(isPercy){
  describe('Help Topic page', () => {
    runHelpTopicTests({ withSnapshot: true })
  })
}
 else {
  describe('Help Topic page', () => {
    runHelpTopicTests({ withSnapshot: false })
  })
}

