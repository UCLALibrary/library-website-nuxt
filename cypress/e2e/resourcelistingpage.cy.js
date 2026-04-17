import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runResourceListingTests({ withSnapshot = false } = {}) {
    it("Visit Resource Listing Page", () => {
        cy.visit("/applicants/resources")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should("contain", "All Resources")
        if (withSnapshot) cy.visualSnapshot("Resource Listing Page")
    })
}
if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Resource Listing page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runResourceListingTests({ withSnapshot: true })
    })
  })
} else if(isPercy){
  describe('Resource Listing page', () => {
    runResourceListingTests({ withSnapshot: true })
  })
}
else {
  describe('Resource Listing page', () => {
    runResourceListingTests({ withSnapshot: false })
  })
}
