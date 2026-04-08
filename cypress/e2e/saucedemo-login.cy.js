describe('SauceDemo - Login', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('CT-001 - Login com credenciais válidas', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
  })

  it('CT-002 - Login com senha incorreta', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('senhaerrada')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
  })

  it('CT-003 - Login com campos em branco', () => {
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Username is required')
  })

  it('CT-004 - Login com usuário bloqueado', () => {
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'locked out')
  })

})