const faker = require('faker-br')

Cypress.Commands.add('fakerCPF', () => {
    let meuCpf = faker.br.cpf()
    cy.get('[name="cpf"]').type(meuCpf)
})

Cypress.Commands.add('fakerZipCode', () => {
    let zipCode = faker.address.zipCode()
    cy.get('[name="postalcode"]').type(zipCode)
    cy.get('[value="Buscar CEP"]').click()
})

Cypress.Commands.add('fakerName', () => {
    let firstName = faker.name.firstName()
    cy.get('[name="fullName"]').type(firstName)
})

Cypress.Commands.add('fakerAddressNumber', () => {
    let AddressNumber = faker.random.number()
    cy.get('[name="address-number"]').type(AddressNumber)
})