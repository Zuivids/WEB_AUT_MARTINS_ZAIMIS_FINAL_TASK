export class AutomationPracticeForm{

    static visit(){
        return cy.visit("https://demoqa.com/automation-practice-form");
    }

    static get enterFirstName(){
        return cy.get("#firstName");
    }

    static get enterLastName(){
        return cy.get("#lastName");
    }

    static get enterEmail(){
        return cy.get("#userEmail");
    }

    static checkedRadioButton(value){
        return cy.get(`input[type="radio"][value="${value}"]`);
    }

    static get enterMobileNumber(){
        return cy.get("#userNumber");
    }

    static get enterDateOfBirth(){
        return cy.get("#dateOfBirthInput");
    }

    static get setSubjects(){
        return cy.get("#subjectsInput");
    }

    static setHobbies(value){
        return cy.get(`input[type="checkbox"][id="${value}"]`);
    }

    static get uploadImage(){
        return cy.get('input[type=file][id="uploadPicture"]').selectFile('cypress/files/test_image.png')
    }

    static get enterAdress(){
        return cy.get("#currentAddress");
    }

    static get setState(){
        return cy.get('#state');
    }
 
    static get setCity(){
        return cy.get('#city');
    }

    static get submit(){
        return cy.get("#submit");
    }
}