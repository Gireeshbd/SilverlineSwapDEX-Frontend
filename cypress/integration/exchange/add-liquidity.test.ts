describe('Add Liquidity', () => {
  it('loads the two correct tokens', () => {
    cy.visit('/add/0xC8B7fE1d6B2A7b21D44D2239831Ac6079A471E16/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'SLCT')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'BUSD')
  })

  it('loads the BNB and tokens', () => {
    cy.visit('/add/BNB/0xC8B7fE1d6B2A7b21D44D2239831Ac6079A471E16')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'BNB')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'SLCT')
  })

  it('loads the WBNB and tokens', () => {
    cy.visit('/add/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/0xC8B7fE1d6B2A7b21D44D2239831Ac6079A471E16')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'WBNB')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'SLCT')
  })

  it('does not crash if BNB is duplicated', () => {
    cy.visit('/add/BNB/BNB')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'BNB')
    cy.get('#add-liquidity-input-tokenb #pair').should('not.contain.text', 'BNB')
  })

  it('does not crash if address is duplicated', () => {
    cy.visit('/add/0xC8B7fE1d6B2A7b21D44D2239831Ac6079A471E16/0xC8B7fE1d6B2A7b21D44D2239831Ac6079A471E16')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'SLCT')
    cy.get('#add-liquidity-input-tokenb #pair').should('not.contain.text', 'SLCT')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/add/0xD74b782E05AA25c50e7330Af541d46E18f36661C/0xC8B7fE1d6B2A7b21D44D2239831Ac6079A471E16')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'QUACK')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'SLCT')
  })

  it('single token can be selected', () => {
    cy.visit('/add/0xD74b782E05AA25c50e7330Af541d46E18f36661C')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'QUACK')
    cy.visit('/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'BUSD')
    cy.visit('/add/BNB')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'BNB')
  })

  it('redirects /add/token-token to add/token/token', () => {
    cy.visit('/add/0xC8B7fE1d6B2A7b21D44D2239831Ac6079A471E16-0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    cy.url().should(
      'contain',
      '/add/0xC8B7fE1d6B2A7b21D44D2239831Ac6079A471E16/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    )
  })

  it('redirects /add/BNB-token to /add/BNB/token', () => {
    cy.visit('/add/BNB-0xC8B7fE1d6B2A7b21D44D2239831Ac6079A471E16')
    cy.url().should('contain', '/add/BNB/0xC8B7fE1d6B2A7b21D44D2239831Ac6079A471E16')
  })

  it('redirects /add/token-BNB to /add/token/BNB', () => {
    cy.visit('/add/0xC8B7fE1d6B2A7b21D44D2239831Ac6079A471E16-BNB')
    cy.url().should('contain', '/add/0xC8B7fE1d6B2A7b21D44D2239831Ac6079A471E16/BNB')
  })

  it('redirects /add/WBNB to /add/WBNB/token', () => {
    cy.visit('/add/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c-0xC8B7fE1d6B2A7b21D44D2239831Ac6079A471E16')
    cy.url().should(
      'contain',
      '/add/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/0xC8B7fE1d6B2A7b21D44D2239831Ac6079A471E16',
    )
  })

  it('redirects /add/token-WBNB to /add/token/WBNB', () => {
    cy.visit('/add/0xC8B7fE1d6B2A7b21D44D2239831Ac6079A471E16-0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c')
    cy.url().should(
      'contain',
      '/add/0xC8B7fE1d6B2A7b21D44D2239831Ac6079A471E16/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    )
  })
})
