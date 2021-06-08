describe('Cypress', () => {
  it('test is working', () => {
    expect(true).to.equal(true)
  })

  it('opens the app', () => {
    cy.visit('http://localhost:3000')
  })

  it('Unit test navbar link is present', () => {
    cy.get(".navbar").children().should('have.length', 5)
  })

  it('Functional test blog link works', () => {
    cy.get('.blog').click().then(() => {
      cy.url().should('include', 'blog')
      cy.get('h1').should('contain', 'Blog')
    })
  })

  it('Functional test Images link works', () => {
    cy.viewport('iphone-3')
    cy.get('.images').click().then(() => {
      cy.url().should('include', 'images')
      cy.get('h1').should('contain', 'Images')
    })
  })
})
