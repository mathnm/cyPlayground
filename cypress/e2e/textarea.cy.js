describe('Textarea', () => {

    beforeEach(() => {
        cy.goHome()
    })

    it('deve preencher o campo de area de texto', () => {
        cy.doLogin()

        cy.goTo('/textarea', 'Textarea')

        cy.get('textarea[name="message"')
            .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis libero sit.')

    })
})