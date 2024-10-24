describe('Login', () => {

  beforeEach(() => {
    cy.goHome()
  })

  it('Deve logar com sucesso', () => {
    cy.login('papito@cyskills.com.br', 'showtime')

    cy.userLoggedIn()
  })

  it('Não deve logar com senha inválida', () => {
    cy.login('papito@cyskills.com.br', '121388554623456')
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Não deve logar com e-mail não cadastrado', () => {
    cy.login('404@cyskills.com.br', 'showtime')
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Não deve logar com e-mail incorreto', () => {
    cy.login('www.cyskills.com.br', 'showtime')
    cy.noticeHave('O formato do e-mail está incorreto. Por favor, verifique e tente novamente!')
  })
})