import { AutomationPracticeForm } from "../pageObjects/AutomationPracticeForm.page";

describe("Final Task in Web_Aut", () => {
    context("Input all the necessary information", () => {
        it('PracticeFormTest', () => {
            // a. Open https://demoqa.com/automation-practice-form
            AutomationPracticeForm.visit();
            // b. Input all the necessary information in the text fields, buttons, etc, where it is not stated otherwise.
            var name = "Mārtiņš";
            var surname = "Žaimis";
            var email = "aizmirsu@kautkad.lv"
            var mobile = "1234567891";
            AutomationPracticeForm.enterFirstName.type(name);
            AutomationPracticeForm.enterLastName.type(surname);
            AutomationPracticeForm.enterEmail.type(email)
            AutomationPracticeForm.checkedRadioButton("Male").check({force: true});
            AutomationPracticeForm.enterMobileNumber.type(mobile);
            // c. Set the - Date of Birth - with Calendar widget to - 28th of February, 1930.
            AutomationPracticeForm.enterDateOfBirth.type("{selectall}28 Feb 1930{enter}");
            // d. Set Subjects to Economics.
            AutomationPracticeForm.setSubjects.type("Economics{enter}");
            // e. Set Hobbies to Music.
            AutomationPracticeForm.setHobbies("hobbies-checkbox-3").check({force: true});
            // f. Create folder “files” and put the image there
            // i. Upload an image of your choice.
            AutomationPracticeForm.uploadImage;
            // g. Set State to NCR.
            var adress = "Kaut kada adrese 1";
            AutomationPracticeForm.enterAdress.type(adress);
            AutomationPracticeForm.setState.type("NCR{enter}");
            // h. Set City to Delhi.
            AutomationPracticeForm.setCity.type("Delhi{enter}");
            // i. Click Submit.
            AutomationPracticeForm.submit.click();
            //j. Validation
           AutomationPracticeForm.confirmationText.should("have.text","Thanks for submitting the form");
           AutomationPracticeForm.validateTable;
           
        })
    });
});