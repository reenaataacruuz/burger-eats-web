import elements from "../elements/elements"

class homePage{
    startRegister(){
        cy.get(elements.home.startRegister.button_register).click()
    }
}

export default new homePage()