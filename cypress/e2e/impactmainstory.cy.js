describe('Impact Main Story page', () => {
  it('Visit the Impact Mainstory Page', () => {
    cy.visit('/impact/2022/test-main-story')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')
    cy.get('h1.title').should(
      'contain',
      'TEST_After Covid Triggered a Campus Closure, UCLA Library Reimagined Its Services'
    )
    cy.get('.media-video').should(
      'have.attr',
      'src',
      'https://static.library.ucla.edu/craftassetstest/images/ucla-impact-report-animation.mp4'
    )
    cy.percySnapshot({ widths: [768, 992, 1200] })
  })
})
