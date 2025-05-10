import elements from "../support/elements/elements";

const faker = require('faker-br')

Cypress.Commands.add('fakerCPF', () => {
    let meuCpf = faker.br.cpf()
    cy.get(elements.inputs.fakerCPF.input_cpf).type(meuCpf)
})

Cypress.Commands.add('fakerZipCode', () => {
    let zipCode = faker.address.zipCode()
    cy.get(elements.inputs.fakerZipCode.postal_code).type(zipCode)
    cy.get(elements.inputs.fakerZipCode.search_cep).click()
})

Cypress.Commands.add('fakerName', () => {
    let firstName = faker.name.firstName()
    cy.get(elements.inputs.fakerName.full_name).type(firstName)
})

Cypress.Commands.add('fakerAddressNumber', () => {
    let AddressNumber = faker.random.number()
    cy.get(elements.inputs.fakerAddressNumber.number_address).type(AddressNumber)
})