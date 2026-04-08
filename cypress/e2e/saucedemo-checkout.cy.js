describe('SauceDemo - Carrinho e Checkout', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })

  it('CT-007 - Adicionar produto ao carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')
  })

  it('CT-008 - Remover produto do carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('not.exist')
  })

  it('CT-009 - Checkout completo (happy path)', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Simone')
    cy.get('[data-test="lastName"]').type('Martins')
    cy.get('[data-test="postalCode"]').type('25000000')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header').should('contain', 'Thank you for your order')
  })

  it('CT-010 - Checkout sem preencher nome', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="error"]').should('contain', 'First Name is required')
  })

})