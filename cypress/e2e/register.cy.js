import homePage from "../support/pages/home"
import registerPage from "../support/pages/register"
import textsValidates from "../support/components/modal"

describe('Teste de funcionalidade: Realizando cadastro em diferentes cenários', () => {

  beforeEach(() => {
    cy.visit('/')
    homePage.startRegister()
  })

  it
  ('Teste de funcionalidade: Cadastro de usuário com método de entrega *Moto*', () => {
    registerPage.addName('User Name')
    registerPage.addCpf('01234567890')
    registerPage.addEmail('user@gmail.com')
    registerPage.addPostalCode('36032100')
    registerPage.addCep('10')
    registerPage.addDelivery('moto')
    registerPage.addDocument('cypress/fixtures/hamster.jpg')
    textsValidates.verifyMessagesWarning('warningCNH')
    registerPage.finishRegister()
    registerPage.registerConfirmed()
  })

  it('Teste de funcionalidade: Cadastro de usuário com método de entrega *Bike Elétrica*', () => {
    registerPage.addName('User Name')
    registerPage.addCpf('01234567890')
    registerPage.addEmail('user@gmail.com')
    registerPage.addPostalCode('36032100')
    registerPage.addCep('10')
    registerPage.addDelivery('bike')
    registerPage.addDocument('cypress/fixtures/hamster.jpg')
    textsValidates.verifyMessagesWarning('warningCNH')
    registerPage.finishRegister()
    registerPage.registerConfirmed()
  })

  it('Teste de funcionalidade: Cadastro de usuário com método de entrega *Van/Carro*', () => {
    registerPage.addName('User Name')
    registerPage.addCpf('01234567890')
    registerPage.addEmail('user@gmail.com')
    registerPage.addPostalCode('36032100')
    registerPage.addCep('10')
    registerPage.addDelivery('carro')
    registerPage.addDocument('cypress/fixtures/hamster.jpg')
    textsValidates.verifyMessagesWarning('warningCNH')
    registerPage.finishRegister()
    registerPage.registerConfirmed()
  })
})