describe('Tests', () => {
  it('Checking Nav-Bar Elements', () => {
    cy.visit('/')
    cy.get('#one').click();
    cy.url().should('eq','http://localhost:4200/signup')
    cy.get('#two').click();
    cy.url().should('eq','http://localhost:4200/signupemp');
    cy.get('#au').click();
    cy.url().should('eq','http://localhost:4200/aboutus');
   // cy.get('[data-test=dock]')
  })
  it('Home Page',()=>{
    cy.visit('/');
    cy.contains('Find Your Dream Job')
    cy.contains('Top Recruiters')
  })
  it('Should visit login-jobseeker page',()=>{
    cy.visit('/signup')
   
    cy.get("#buttton").click();
    cy.contains('JobSeeker Login')
    cy.url().should('eq','http://localhost:4200/loginjs')
   //cy.get(".mat-toolbar mat-elevation-z6 mat-primary mat-toolbar-single-row ").click();
   //
  })
  it('Working of jobseekers dashboard',()=>{
  cy.visit('/jsdash')
  cy.request({
    method:'GET',
    url:'https://localhost:44312/api/JobServices/GetAllJob'
  }).then((res)=>{
    expect(res.status).to.eq(200)
  })
   cy.visit('/jsdash');
   cy.get('[href="/app-view-applied-jobs-and-their-status"] > .mat-button-wrapper').click();
   cy.url().should('eq','http://localhost:4200/app-view-applied-jobs-and-their-status')
   cy.visit('/jsdash')
   cy.get('#lo').click()
   cy.url().should('eq','http://localhost:4200/signup')
  })
  it('Should visit login-employer page',()=>{
    cy.visit('/signupemp')
   
    cy.get('p > a').click();
    cy.url().should('eq','http://localhost:4200/loginemp')
   //cy.get(".mat-toolbar mat-elevation-z6 mat-primary mat-toolbar-single-row ").click();
   //
  })
  it('Working of employer dashboard',()=>{
    cy.visit('/empdash')
  cy.request({
    method:'GET',
    url:'https://localhost:44312/api/JobServices/GetAllJob'
  }).then((res)=>{
    expect(res.status).to.eq(200)
  })
    cy.visit('/empdash');
    cy.contains('Jobs Posted By You')
   
    
  })
})
