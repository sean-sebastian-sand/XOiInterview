/// <reference types = "Cypress" />

describe("Automation Example Test Suite", ()=> {
    beforeEach(function(){
        cy.visit("https://automationexercise.com");

    })

    it("Create fixture with 5 item from Product List", ()=> {                       //incomplete
        //cy.get('.shop-menu > .nav > :nth-child(2) > a').should("be.visible");
        cy.createList(".single-products");

    })

    it("Use the Create User API to create user", () => {
        cy.request( {

            method: 'POST',
            url: 'https://automationexercise.com/api/createAccount',
            form: true,
            body: {

                name: "Test Name",
                email: "email2226@email.com",
                password: "testpassword",
                title: "Title1",
                birth_date: "23",
                birth_month: "11",
                birth_year: "2001",
                firstname: "Test",
                lastname: "Name",
                company: "NewCompany",
                address1: "123 Cherry Street",
                address2: "Apt. 44",
                country: "United States",
                zipcode: "10010",
                state: "NY",
                city: "New York",
                mobile_number: "555-123-1234"
            },
            }).then((response) => {
        expect(response.body).to.include("201"); // Expect a 201 Created status
        expect(response.body).to.include("User created!");
  // Add more assertions based on your API's expected response
});

            })

        it("Login with created user", () => {
            cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
            cy.get('[data-qa="login-email"]').type("email2226@email.com");
            cy.get('[data-qa="login-password"]').type("testpassword");
            cy.get('[data-qa="login-button"]').click();
        })
        
    })