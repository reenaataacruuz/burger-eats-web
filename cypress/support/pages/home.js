class homePage{
    startRegister(){
        cy.get('strong:contains("Cadastre-se para fazer entregas")').click()
    }
}

export default new homePage()