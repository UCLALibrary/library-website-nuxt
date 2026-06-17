Cypress.Commands.add('visualSnapshot', (name) => {
  const provider = Cypress.env('VISUAL_PROVIDER') // "chromatic" | "percy" | undefined

  if (provider === 'chromatic') {
    // Chromatic snapshot at the CURRENT test viewport (set by describe/it config)
    const w = Cypress.config('viewportWidth')
    const h = Cypress.config('viewportHeight')
    cy.takeSnapshot(`${name} - ${w}x${h}`)
  }

  // else: do nothing locally
})

// TODO: add moderate to the default impacts when all serious and critical violations are fixed
const DEFAULT_A11Y_IMPACTS = ['critical', 'serious']

Cypress.Commands.add(
  'checkCriticalA11y',
  (selector = '#main', impacts = [...DEFAULT_A11Y_IMPACTS]) => {
    cy.injectAxe()
    cy.checkA11y(selector, { includedImpacts: impacts }, (violations) => {
      violations.forEach((violation) => {
        cy.log(`Accessibility Violation: ${violation.id} ${violation.impact}
Description: ${violation.description}
Help: ${violation.help} ${violation.helpUrl}
HTML hint: ${violation.nodes.length} ${violation.nodes[0].html}`)
      })
    })
  }
)

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
