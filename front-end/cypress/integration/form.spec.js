describe('Check submission', () => {
    it('can navigate to the site;', () => {
        cy.visit('http://localhost:3000/login')
    })
    it('input email', () => {
        cy.get('input[name="email"]')
        .type('Bob@Ross.com')
        .should('have.value', 'Bob@Ross.com')
    })
    it('input password', () => {
        cy.get('input[name="password"]')
        .type('password23')
        .should('have.value', 'password23')
    })
})

describe('Check submission', () => {
    it('can navigate to the site;', () => {
        cy.visit('http://localhost:3000/signup')
    })
    it('input name', () => {
        cy.get('input[name="fullname"]')
        .type('Bob Ross')
        .should('have.value', 'Bob Ross')
    })
    it('input email', () => {
        cy.get('input[name="email"]')
        .type('Bob@Ross.com')
        .should('have.value', 'Bob@Ross.com')
    })
    it('input password', () => {
        cy.get('input[name="password"]')
        .type('password23')
        .should('have.value', 'password23')
    })
})