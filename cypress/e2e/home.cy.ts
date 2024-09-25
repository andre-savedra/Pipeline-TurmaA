/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
  })

  it('navigate', () => {
    cy.visit('/build')
  })
})