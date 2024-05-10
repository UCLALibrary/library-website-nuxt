describe('Events & Exhibitions List page', () => {
  it('Visits a Events & Exhibitions List Page', () => {
    cy.visit('/visit/events-exhibitions', { timeout: 13000, failOnStatusCode: false })
    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')

    cy.get('.page-events-exhibits').should('be.visible')
    cy.get('h1.title').should('contain', 'Events & Exhibitions')
    cy.percySnapshot({ widths: [768, 992, 1200] })
  })
  it('Visit Events & Exhibitions Listing page filter by event type', () => {
    cy.visit('/visit/events-exhibitions/?q&filters=%7B"eventType.title.keyword"%3A%5B"Workshop"%5D%7D', { timeout: 13000 })

    cy.get('h2.about-results').invoke('text').should('not.be.empty')
  })
})
