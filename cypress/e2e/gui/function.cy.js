describe("Deve testar as funcionalidades", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Deve criar um projeto", () => {
    cy.get('[href="/projects/new"] > .blank-state-body > .blank-state-title')
      .should("be.visible")
      .click();

    cy.get("#blank-project-name > .project-name > #project_name")
      .type("Projeto de teste")
      .should("have.value", "Projeto de teste");

    cy.get(":nth-child(5) > #project_description")
      .type("Isso é apenas um teste para garantir a criação de um projeto")
      .should(
        "have.value",
        "Isso é apenas um teste para garantir a criação de um projeto"
      );

    cy.get(
      "#blank-project-pane > #new_project > .visibility-level-setting > :nth-child(3) > #project_visibility_level_20"
    )
      .check()
      .should("be.checked")
      .should("have.value", "20");

    cy.get("#blank-project-pane > #new_project > .btn-success").click();

    cy.get(".flash-notice").should("be.visible");
  });
});
