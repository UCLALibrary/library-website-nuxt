import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'

function runImpactMainStoryTests({ withSnapshot = false } = {}) {
  it('Visit the Impact Mainstory Page', () => {
    cy.visit('/impact/2021/ucla-library-reimagined')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')

    cy.get('h1.title').should(
      'contain',
      'After Covid Triggered a Campus Closure'
    )

    cy.get('.media-video').should(
      'have.attr',
      'src',
      'https://static.library.ucla.edu/craftassetstest/images/ucla-impact-report-animation.mp4'
    )

    if (withSnapshot) {
      cy.visualSnapshot('impactmainstory')
    }
  })
}

if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Impact Main Story Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runImpactMainStoryTests({ withSnapshot: true })
    })
  })
} else {
  describe('Impact Main Story Page', () => {
    runImpactMainStoryTests({ withSnapshot: false })
  })
}
