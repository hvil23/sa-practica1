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
  
    context('2. Accion click con boton saber mas de mi..', () => {
      
      it('2.1 Click al boton 1 vez', () => {
        cy.get('button').contains('Mas info').click();
      })
      
    })

    context('3. Otras acciones', () => {

      it('Filtrar contenido inexistente', () => {
        cy.contains('Este texto no esta').should('not.exist')
      })
  
    })

  })
  