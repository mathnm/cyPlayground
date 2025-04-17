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

  it('Não deve logar sem informar o e-mail', () => {
    cy.login('','senhaerrada123')
    cy.noticeHave('Parece que você esqueceu de informar seu e-mail.')  
  });

  it('Não deve logar sem informar a senha', () => {
    cy.login('papito@cyskills.com.br','')
    cy.noticeHave('Por favor, digite sua senha para continuar.')  
  });

  it('Não deve logar sem informar o e-mail e sem a senha', () => {
    cy.login('','')
    cy.noticeHave('Parece que você esqueceu de informar seu e-mail.')  
  });

})