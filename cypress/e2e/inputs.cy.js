describe('Inpute Fields', () => {

    beforeEach(() => {
        cy.goHome()
    })

    it('deve preencher o campo texto', () => {
        cy.doLogin()

        cy.goTo('/input-fields', 'Input Fields')

        cy.get('input[placeholder="John Doe"')
            .type('Matheus Machado')

        cy.get('input[name="email"')
            .type('email@teste.com')

        cy.get('input[name="number"')
            .type('102030')

        cy.get('input[name="date"')
            .type('2024-12-01')

    })
})