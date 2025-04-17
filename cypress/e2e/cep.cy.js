describe('CEP', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/cep', 'CEP (API dos Correios')
    })

    it('Deve cadastrar um endereço consumindo API dos correios', () => {
        cy.get('input[name="cep"]').type('88704010')
        cy.contains('button', 'Cadastrar').click()

        cy.get('input[name="logradouro"', { timeout: 10000 })
            .should('have.value', 'Rua Pedro Lemos')

        cy.get('input[name="cidade"', { timeout: 10000 })
            .should('have.value', 'Tubarão')

        cy.get('input[name="estado"', { timeout: 10000 })
            .should('have.value', 'SC')
    });

})