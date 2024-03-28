class textsValidates{
    verifyMessagesWarning(element) {
        const messages = {
            warningCNH: "Atenção: CNH é obrigatória somente para veículos motorizados. Mesmo assim é importante enviar um documento com foto para aprovação do seu cadastro.",
            default: "Mensagem padrão",
        }
    
    const textWarning = messages[element]

    cy.contains(`span.alert-warning`, textWarning)
        .should('be.visible')
    }

    verifyWarningError(element) {
        const messages = {
            warningName: "É necessário informar o nome",
            warningCPF: "É necessário informar o CPF",
            warningEmail: "É necessário informar o email",
            warningCEP: "É necessário informar o CEP",
            warningAddressNumber: "É necessário informar o número do endereço",
            warningTypeDelivery: "Selecione o método de entrega",
            warningDocument: "Adicione uma foto da sua CNH",
            default: "Mensagem padrão",
        }
    
    const textWarning = messages[element]

    cy.contains(`span.alert-error`, textWarning)
        .should('be.visible')
    }
}

export default new textsValidates()