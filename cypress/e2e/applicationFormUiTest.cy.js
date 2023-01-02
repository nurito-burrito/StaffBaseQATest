import form from "../PageObjects/form.js"

describe('Apply for the Quality Assurance Engineer role', () => {

  it('Validate the URL and check its launched successfully', () => {
    cy.url().should('contain', 'quality-assurance-engineer')
    cy.contains('h1', 'Quality Assurance Engineer')
  })

  it('Fill in the appliction form and submit', () => {
    const ln = new form() 

    cy.getIframe().find('#application_form').within(() => {
      //example on how to use page object model
      ln.getFieldAndTypeText('#first_name', 'Nurseda')
      ln.getFieldAndTypeText('#last_name', 'Balcioglu')
      ln.getFieldAndTypeText('#email', 'nbalci09@gmail.com')
      ln.getFieldAndTypeText('#phone', '+447401670344')
    
      //example on how to upload a file by drag and drop
      const filePath = 'cypress/fixtures/BalciogluNursedaCVcopy.pdf'
      cy.get('.drop-zone')
        .eq(0).invoke('show')
        .selectFile(filePath, { action: 'drag-drop' })
      cy.get('#resume_filename')
        .invoke('text')
        .should('eq', 'BalciogluNursedaCVcopy.pdf')

      ln.getFieldAndTypeText('#job_application_answers_attributes_0_text_value', 
      'I will require a skilled worker visa')

      //example on how to select a hidden dropdown and then asserting the selected option
      cy.get('#job_application_answers_attributes_1_answer_selected_options_attributes_1_question_option_id')
        .invoke('show')
        .select(1)
      cy.get("select option:selected")
        .invoke("text")
        .should("eq", "Yes")

      let myVeryLongAnswer = 'https://github.com/nurito-burrito/StaffBaseQATest' +
      'Sorry for having made multiple applications,' +
      'I had a small difficulty asserting the Thanks for applying page' +
      'but decided not to in the end to stop spamming :)'
      ln.getFieldAndTypeText('#job_application_answers_attributes_2_text_value', myVeryLongAnswer)
      
      //Uncomment the following to submit
      // cy.clickButton('Submit Application')
      

      // Having a little issue asserting the confirmation page, stopping as I don't want to spam.
      // cy.getIframe().find('#application_confirmation').should('be.visible')
      // cy.get('#application_confirmation').should('be.visible')
      // cy.contains('h1', 'Thank you for applying.')
    })
  })
})  