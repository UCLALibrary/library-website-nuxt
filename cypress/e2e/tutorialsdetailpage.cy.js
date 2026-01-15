describe('Tutorials Detail page', () => {
  it('Visit a Tutorials Detail Page', () => {
    cy.visit('/help/tutorials/electron-configurations')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')
    cy.get('h1.title').should(
      'contain',
      'Electron Configurations'
    )
    cy.visualSnapshot('tutorialsdetailpage')
  })

  context("When there isn't an entry in craft", () => {
    it('Raises a 404 error', () => {
      cy.request({ url: '/help/tutorials/no_entry', failOnStatusCode: false }).its('status').should('equal', 404)
    })
  })
})
