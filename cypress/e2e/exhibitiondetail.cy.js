import { a11yIt } from '../support/a11y'

describe('Exhibition Detail page', () => {
  it('Visits an Exhibition Detail Page', () => {
    // the following data will not work in production
    cy.visit('/visit/events-exhibitions/fante-asafo-flags')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')
    cy.get('h1.title').should('contain', 'Fante Asafo Flags')
    cy.visualSnapshot('exhibitiondetail')
  })

  a11yIt('/visit/events-exhibitions/fante-asafo-flags')
})
