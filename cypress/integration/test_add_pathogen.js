/// <reference types="Cypress"/>

describe("TESTING ADD PATHOGEN", () => {
  it("test url works", () => {
    cy.server();
    cy.route({
      method: "GET",
      url: "/ubicacion",
      response: [],
    });
    cy.route({
      method: "GET",
      url: "/group",
      response: "",
    });
    cy.visit("http://localhost:3000/");
  });

  it("test agregar patogeno form", () => {
    cy.server();
    cy.route({
      method: "POST",
      url: "/patogeno",
      response: (1, 200),
    });
    cy.route({
      method: "GET",
      url: "/estadisticas/lideres",
      response: [],
    });
    cy.route({
      method: "GET",
      url: "/reportes",
      response: [],
    });
    cy.route({
      method: "GET",
      url: "/patogeno",
      response: [],
    });
    cy.route({
      method: "GET",
      url: "/estadisticas/reporteDeContagios",
      response: [],
    });
    cy.get("#Agregar\\ Patogeno").click();
    cy.get("[data-cy=add_pathogen_modal]").should("be.visible");
    cy.get("[data-cy=add_pathogen_tipo_form]").should("be.empty");
    cy.get("[data-cy=capacidadContagioPersona]").should("be.empty");
    cy.get("[data-cy=capacidadContagioInsectos]").should("be.empty");
    cy.get("[data-cy=capacidadContagioAnimal]").should("be.empty");
    cy.get("[data-cy=defensa]").should("be.empty");
    cy.get("[data-cy=letalidad]").should("be.empty");
    cy.get("[data-cy=add_pathogen_tipo_form]").type("BACTERIA");
    cy.get("[data-cy=capacidadContagioPersona]")
      .invoke("val", 100)
      .trigger("change");
    cy.get("[data-cy=capacidadContagioPersona]").should("have.value", 100);
    cy.get("[data-cy=capacidadContagioInsectos]")
      .invoke("val", 0)
      .trigger("change");
    cy.get("[data-cy=capacidadContagioInsectos]").should("have.value", 0);
    cy.get("[data-cy=capacidadContagioAnimal]")
      .invoke("val", 50)
      .trigger("change");
    cy.get("[data-cy=capacidadContagioAnimal]").should("have.value", 50);
    cy.get("[data-cy=defensa]").invoke("val", 25).trigger("change");
    cy.get("[data-cy=defensa]").should("have.value", 25);
    cy.get("[data-cy=letalidad]").invoke("val", 75).trigger("change");
    cy.get("[data-cy=letalidad]").should("have.value", 75);
    cy.get("[data-cy=Crear_Patogeno]").click();
    cy.get("[data-cy=close_button]").click();
    cy.get("[data-cy=add_pathogen_modal]").should("not.be.visible");
  });
});
