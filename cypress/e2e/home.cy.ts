/// <reference types="cypress" />

const el = {
  homeContainer: ()=> cy.get("#home-page"),
  mineButton: ()=> cy.get("#order"),
  buildContainer: ()=> cy.get("#build-page"),
  flag: ()=> cy.get("#flag"),
  homeTitle: ()=> cy.get("h1"),
  partImages: {
    head: ()=> cy.get("#top-part-image"),
    leftArm: ()=> cy.get("#left-part-image"),
    rigthArm: ()=> cy.get("#right-part-image"),
    center: ()=> cy.get("#center-part-image"),
    base: ()=> cy.get("#bottom-part-image"),
  },
  partImagesArray: ()=> cy.get(".part .part-images"),
  buttonHeadPart: {
    next: ()=> cy.get(".top .next-selector"),
    previous: ()=> cy.get(".top .prev-selector"),
  },
  buttonParts: {
    next: ()=> cy.get(".next-selector"),
    previous: ()=> cy.get(".prev-selector"),
  },
  login:{
    username: ()=> cy.get("#build-page #username"),
    password: ()=> cy.get("#build-page #password"),
  }
}

describe('Home test', () => {
  beforeEach(()=>{
    cy.visit('/')    
  })
  
  it('visiting home page', () => {
    el.homeContainer().should("exist")
  })

  it('testing mine button', () => {    
    el.mineButton().should("exist")
    el.mineButton().click() 
    el.buildContainer().should("exist")
  })

  it('testing translation', () => {    
    const flag = el.flag();    
    flag.should("exist")
    flag.click()
    el.homeTitle().should("contain.text","Construa agora seu Mange Bot!")
  })
})


describe('Build test', () => {
  beforeEach(()=>{
    cy.visit('/build')    
  })
  
  it('visiting build page', () => {
    el.buildContainer().should("exist")
  })

  it('checking backend parts', () => {        
    /* //checking each element individually:
    el.partImages.head().should('exist')
    el.partImages.leftArm().should('exist')
    el.partImages.rigthArm().should('exist')
    el.partImages.center().should('exist')
    el.partImages.base().should('exist')
    */  

    const images = el.partImagesArray();    
    //images.should('have.length',5); //checking only the quantity

    images.should('have.length',5).each(($img)=>{
      cy.wrap($img).should('exist')
    })
  })


  it('checking part changing', () => {        
    //checking head individually        
    
    //before clicking:
    const image1 = el.partImages.head();  
    image1.should("have.attr", "image-id", 1);    
    
    el.buttonHeadPart.next().click();
    //after clicking:
    const image2 = el.partImages.head();
    image2.should("have.attr", "image-id", 2);

    // const images = el.partImagesArray();    
    //images.should('have.length',5); //checking only the quantity

    // images.should('have.length',5).each(($img)=>{
    //   cy.wrap($img).should('exist')
    // })
  })

  it('login', () => {

    el.login.username().type("andre")

    el.login.password().type("teste")

  })
  
})