describe('Agenda de Contatos - Testes E2E', () => {
  const nome = 'João Teste'
  const email = 'joao@email.com'
  const telefone = '(11) 99999-9999'
  const nomeEditado = 'João Editado'

  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve adicionar um novo contato', () => {
    cy.get('input[placeholder="Nome completo"]').type(nome)
    cy.get('input[placeholder="E-mail"]').type(email)
    cy.get('input[placeholder="Telefone"]').type(telefone)
    cy.contains('Adicionar').click()

    cy.contains(nome).should('exist')
    cy.contains(email).should('exist')
    cy.contains(telefone).should('exist')
  })

  it('Deve editar um contato existente', () => {
    cy.contains('Editar').click()
    cy.get('input[placeholder="Nome completo"]').clear().type(nomeEditado)
    cy.contains('Salvar').click()

    cy.contains(nomeEditado).should('exist')
  })

  it('Deve remover um contato', () => {
    cy.contains('Remover').click()
    cy.contains(nomeEditado).should('not.exist')
  })
})
