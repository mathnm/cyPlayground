describe('Tags', () => {

    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()
        cy.goTo('/tags', 'Tags')
    })

    it('Deve adicionar algumas tags', () => {

        const tags = ['Cypress', 'Javascript', 'NodeJs']

        tags.forEach(t => {
            cy.get('.new-tag')
                .type(`${t}{Enter}`)
                .should('have.value', '')
            cy.wait(500) //thinking time
        })

        tags.forEach(t => {
            cy.get('.tag-input')
                .should('contain', t)
        })

    });

})