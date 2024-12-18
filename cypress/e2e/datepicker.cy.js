describe('Date Picker', () => {

    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()
        cy.goTo('/date-picker', 'Date Picker')
    })

    it('Deve adicionar minha data de aniversário', () => {
        cy.get('input[placeholder="Escolha uma data"][readonly]')
            .click()

        cy.get('select[aria-label="Month"]')
            .select('Setembro')

        cy.get('input[aria-label="Year"]')
            .type('1997')

        cy.get('span[aria-label="Setembro 25, 1997"]')
            .click()
    });




})