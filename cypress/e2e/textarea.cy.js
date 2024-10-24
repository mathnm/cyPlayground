describe('Textarea', () => {

    beforeEach(() => {
        cy.goHome()
    })

    it('deve preencher o campo de area de texto', () => {
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.goTo('/textarea', 'Textarea')

        cy.get('textarea[name="message"')
            .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis libero sit.')

    })
})