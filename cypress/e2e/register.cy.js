describe('Teste de funcionalidade: Realizando cadastro em diferentes cenários', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.get('strong:contains("Cadastre-se para fazer entregas")').click()
  })

  it.only('Teste de funcionalidade: Cadastro de usuário com método de entrega *Moto*', () => {
    cy.get('[name="fullName"]').type('User')
  })

  it('Teste de funcionalidade: Cadastro de usuário com método de entrega *Bike Elétrica*', () => {
    // cy.visit('/')
  })

  it('Teste de funcionalidade: Cadastro de usuário com método de entrega *Van/Carro*', () => {
    // cy.visit('/')
  })
})