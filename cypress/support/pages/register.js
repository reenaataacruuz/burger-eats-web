import elements from "../elements/elements";

class registerPage{
    
    addEmail(email){
        cy.get(elements.inputs.addEmail.input_email).type(`${email}`)
    }

    addDelivery(delivery){
        cy.get(elements.home.addDelivery.delivery[delivery]).click()
    }

    addDocument(document){
        cy.get(elements.inputs.addDocument.submit_file).selectFile(`${document}`, {force:true})
    }

    finishRegister(){
        cy.contains(elements.home.finishRegister.component,
            elements.home.finishRegister.text).click()
    }

    registerConfirmed(){
        cy.get(elements.home.registerConfirmed.modal_success.component).should('be.visible')
        cy.get(elements.home.registerConfirmed.close_modal.component).click()
    }
}

export default new registerPage()