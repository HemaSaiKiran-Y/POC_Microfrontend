describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200')
  })
  it('flightsearchtest', () => {
    cy.visit('http://localhost:4200/flights/flights-search')
  })
})
