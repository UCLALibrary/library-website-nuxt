describe('Endowments Listing page', () => {
  it('Visits the Endowments Listing Page', () => {
    // the following data will not work in production
    cy.visit('/give/endowments')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')
    cy.get('.page-endowment-listing').should('be.visible')
    cy.get('h1.title').should('contain', 'Endowments')
    cy.percySnapshot({ widths: [768, 992, 1200] })
  })
})
