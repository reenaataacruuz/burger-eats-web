import elements from "../elements/elements";
class textsValidates{
    verifyMessagesWarning(element){
        cy.contains(elements.modal.verifyMessagesWarning.component_warning,
            elements.modal.verifyMessagesWarning.messages[element])
            .should('be.visible')
    }
    verifyWarningError(element){
        cy.contains(
            elements.modal.verifyMessagesWarning.messages.component_warning, 
            elements.modal.verifyWarningError.warning_messages[element])
            .should('be.visible')
    }
}
export default new textsValidates()