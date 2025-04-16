describe('Tables', ()=>{

    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()
        cy.goTo('/tables', 'Tables')
    })

    it('Deve validar a linha do Github', () => {

         cy.contains('table tbody tr', '1004')
            .should('be.visible')
            .and('contain','Github')
            .and('contain','papitodev')
            .and('contain','Ativo')
            .and('contain','1004')

    });

    it('Deve remover uma rede social', () => {
        const name = 'Facebook'

        cy.contains('table tbody tr', '1002')
            .find('.remove-item')
            .click()

        cy.contains('button', 'Excluir')
            .click()

        cy.get('table tbody')
            .should('not.contain',name)        
    });

    it('Deve cancelar uma exclusão e permanecer registro na tabela', () => {
        const name = 'Youtube'

        cy.contains('table tbody tr', '1005')
            .find('.remove-item')
            .click()

        cy.contains('button', 'Cancelar')
            .click()

        cy.get('table tbody')
            .should('contain',name)        
    });





})