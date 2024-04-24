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

    static get validateStudentName(){
        return cy.get("");
    }

    static get confirmationText(){
        return cy.get("#example-modal-sizes-title-lg");
    }

    static get validateTable(){
        cy.get('tbody').within(() => {
            // avots  =>https://www.youtube.com/watch?v=M0RxEeJaq_E
            cy.contains('tr', 'Student Name').should('contain', "Mārtiņš Žaimis");
            cy.contains('tr', 'Student Email').should('contain', 'aizmirsu@kautkad.lv');
            cy.contains('tr', 'Gender').should('contain', 'Male');
            cy.contains('tr', 'Mobile').should('contain', '1234567891');
            cy.contains('tr', 'Date of Birth').should('contain', '28 February,1930');
            cy.contains('tr', 'Subjects').should('contain', 'Economics');
            cy.contains('tr', 'Hobbies').should('contain', 'Music');
            //cy.wait(500);
            cy.contains('tr', 'Picture').should('contain', 'test_image.png');
            cy.contains('tr', 'Address').should('contain', 'Kaut kada adrese 1'); 
            cy.contains('tr', 'State and City').should('contain', 'NCR Delhi');
        
        });
     }
}