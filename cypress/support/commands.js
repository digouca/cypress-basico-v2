Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Lucas')
    cy.get('#lastName').type('Rodrigo')
    cy.get('#email').type('lucas@teste.com')
    cy.get('#open-text-area').type('Text')
    cy.contains('button', 'Enviar').click()
})
