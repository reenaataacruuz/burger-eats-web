class registerPage{

    addName(fullName){
        cy.get('[name="fullName"]').type(`${fullName}`)
    }

    addCpf(cpf){
        cy.get('[name="cpf"]').type(`${cpf}`)  
    }

    addEmail(email){
        cy.get('[name="email"]').type(`${email}`)
    }

    addPostalCode(postalcode){
        cy.get('[name="postalcode"]').type(`${postalcode}`)
    }

    addCep(cep){
        cy.get('[value="Buscar CEP"]').click()
        cy.get('[name="address-number"]').type(`${cep}`)
    }

    addDelivery(delivery){
        switch (delivery) {
            case "moto":
                cy.get('span:contains("Moto")').click()
                break;
            
            case "bike":
                cy.get('span:contains("Bike Elétrica")').click()
                break;
                
            case "carro":
                cy.get('span:contains("Van/Carro")').click()
                break;
        }
    }

    addDocument(document){
        cy.get('input[type="file"]').selectFile(`${document}`, {force:true})
    }

    finishRegister(){
        cy.contains('button.button-success','Cadastre-se para fazer entregas').click()
    }

    registerConfirmed(){
        cy.get('#swal2-html-container').should('be.visible')
        cy.get('button.swal2-confirm').click()
    }
}

export default new registerPage()