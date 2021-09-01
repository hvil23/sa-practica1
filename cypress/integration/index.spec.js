/// <reference types="cypress" />

describe('Pruebas de integracion de sa-practica1', () => {
    beforeEach(() => {
      cy.visit('https://sa-practica1.s3.amazonaws.com/testing/index.html')
    })

    context('1. Verificando contenidos...', () => {
      it('1.1 Renderiza un elemento H1', () => {
        cy.get('.container h1').should('have.length', 1)
      })

      it('1.2 Verifica texto en parrafo 1 y parrafo 2', () => {
        cy.get('.container p').first().should('have.text', 'AMBIENTE: testing - Version: 1.0.2')
        cy.get('.container p').last().should('have.text', 'A continuación te mostraré algunos datos sobre mí')
      })
    })

    context("2. Accion click con boton Mas info..", () => {

      it("2.1 Click al boton 2 veces", () => {
       cy.contains('Mas info', {timeout: 15000})
        .click()
        .should('have.text', 'Mas info')
        cy.contains('Mas info')
        .click()
        .should('have.text', 'Mas info')
      });

     });

     context('3 Verificar contenido', () => {
      it('3.1 Despues del click al boton', () => {  
        cy.contains('Mi nombre es Hector Villegas').should('exist')
      })
    })


    context('4. Otras acciones', () => {
      it('Filtrar contenido inexistente', () => {
        cy.contains('Este texto no esta').should('not.exist')
      })
    })

  })
  