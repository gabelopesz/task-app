describe('Gerenciador de Tarefas', () => {
  beforeEach(() => {
    cy.visit('/'); // Visita a página inicial
  });

  it('Deve adicionar uma nova tarefa', () => {
    cy.get('input[name="taskName"]', { timeout: 10000 }) // Aumenta o timeout se necessário
      .should('be.visible') // Verifica se o campo de entrada está visível
      .type('Nova Tarefa'); // Digita no campo de entrada
    cy.get('button').contains('Salvar').click(); // Clica no botão "Salvar"
    cy.contains('Nova Tarefa').should('exist'); // Verifica se a tarefa aparece na lista
  });

  it('Deve editar uma tarefa', () => {
    cy.get('input[name="taskName"]').type('Tarefa para Editar');
    cy.get('button').contains('Salvar').click();
    cy.contains('Tarefa para Editar').click(); // Clica na tarefa para editar
    cy.get('input[name="taskName"]').clear().type('Tarefa Editada'); // Edita a tarefa
    cy.get('button').contains('Salvar').click(); // Salva a tarefa editada
    cy.contains('Tarefa Editada').should('exist'); // Verifica se a tarefa foi editada
  });

  it('Deve excluir uma tarefa', () => {
    cy.get('input[name="taskName"]').type('Tarefa para Excluir');
    cy.get('button').contains('Salvar').click();
    cy.contains('Tarefa para Excluir').should('exist');
  
    // Encontre a tarefa e, em seguida, o botão "Deletar"
    cy.contains('Tarefa para Excluir')
      .parents('li')
      .find('button')
      .contains('Deletar')
      .click(); // Clica no botão "Deletar"
  
    // Espera um pouco para garantir que a exclusão foi processada
    cy.wait(1000);
  
    // Verifica se a tarefa foi removida da lista
    cy.contains('Tarefa para Excluir').should('not.exist');
  });  
});
