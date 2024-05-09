describe('Events & Exhibitions List page', () => {
  it('Visits a Events & Exhibitions List Page', () => {
    cy.intercept('/visit/events-exhibitions*').as('getEventsRoutes')
    cy.visit('/visit/events-exhibitions', { timeout: 30000 })
    cy.wait('@getEventsRoutes').then(() => {
    // UCLA Library brand
      cy.get('.logo-ucla').should('be.visible')

      cy.get('.page-events-exhibits').should('be.visible')
      cy.get('h1.title').should('contain', 'Events & Exhibitions')
      cy.percySnapshot({ widths: [768, 992, 1200] })
    })
  })
  it('Visit Events & Exhibitions Listing page filter by event type', () => {
    cy.intercept('/visit/events-exhibitions*').as('getEventsSearchRoutes')
    cy.visit('/visit/events-exhibitions/?q&filters=%7B"eventType.title.keyword"%3A%5B"Workshop"%5D%7D', { timeout: 30000 })
    cy.wait('@getEventsSearchRoutes').then(() => {
      cy.get('.logo-ucla').should('be.visible')
      cy.get('h2.about-results').invoke('text').should('not.be.empty')
    })
  })
})
