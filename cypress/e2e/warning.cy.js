import homePage from "../support/pages/home"
import textsValidates from "../support/components/modal"
import registerPage from "../support/pages/register"

describe('Teste de funcionalidade: Verificando os warning da pagina de registro', ()=>{

    beforeEach(() => {
        cy.visit('/')
        homePage.startRegister()
        registerPage.finishRegister()
    })

    it('Teste de funcionalidade: Verificando warning sem cadastro', () => {
        textsValidates.verifyWarningError('warningName')
        textsValidates.verifyWarningError('warningCPF')
        textsValidates.verifyWarningError('warningEmail')
        textsValidates.verifyWarningError('warningCEP')
        textsValidates.verifyWarningError('warningAddressNumber')
        textsValidates.verifyWarningError('warningTypeDelivery')
        textsValidates.verifyWarningError('warningDocument')
    })
})