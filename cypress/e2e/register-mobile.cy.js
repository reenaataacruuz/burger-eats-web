import homePage from "../support/pages/home"
import registerPage from "../support/pages/register"
import textsValidates from "../support/components/modal"

describe('Teste de funcionalidade: Realizando cadastro em diferentes cenários', () => {

  beforeEach(() => {
    cy.visit('/')
    homePage.startRegister()
    cy.viewport(430, 932)
  })

  it('Teste de funcionalidade: Cadastro de usuário com método de entrega *Moto*', () => {
    cy.fakerName()
    cy.fakerCPF()
    registerPage.addEmail('user@gmail.com')
    cy.fakerZipCode()
    cy.fakerAddressNumber()
    registerPage.addDelivery('moto')
    registerPage.addDocument('cypress/fixtures/hamster.jpg')
    textsValidates.verifyMessagesWarning('warningCNH')
    registerPage.finishRegister()
    registerPage.registerConfirmed()
  })

  it('Teste de funcionalidade: Cadastro de usuário com método de entrega *Bike Elétrica*', () => {
    cy.fakerName()
    cy.fakerCPF()
    registerPage.addEmail('user@gmail.com')
    cy.fakerZipCode()
    cy.fakerAddressNumber()
    registerPage.addDelivery('bike')
    registerPage.addDocument('cypress/fixtures/hamster.jpg')
    textsValidates.verifyMessagesWarning('warningCNH')
    registerPage.finishRegister()
    registerPage.registerConfirmed()
  })

  it('Teste de funcionalidade: Cadastro de usuário com método de entrega *Van/Carro*', () => {
    cy.fakerName()
    cy.fakerCPF()
    registerPage.addEmail('user@gmail.com')
    cy.fakerZipCode()
    cy.fakerAddressNumber()
    registerPage.addDelivery('carro')
    registerPage.addDocument('cypress/fixtures/hamster.jpg')
    textsValidates.verifyMessagesWarning('warningCNH')
    registerPage.finishRegister()
    registerPage.registerConfirmed()
  })
})