describe('Apply for the Quality Assurance Engineer role', () => {

  it('Validate the URL and check its launched successfully', () => {
    cy.url().should('contain', 'quality-assurance-engineer')
    cy.contains('h1', 'Quality Assurance Engineer')
  })

  it('Fill in the appliction form and submit', () => {
    cy.getIframe().find('#application_form').within(() => {

      cy.get('#first_name').type('Nurseda')
      cy.get('#last_name').type('Balcioglu')
      cy.get('#email').type('nbalci09@gmail.com')
      cy.get('#phone').type('+447401670344')
    
      const filePath = 'cypress/fixtures/BalciogluNursedaCVcopy.pdf'
      cy.get('.drop-zone').eq(0).invoke('show').selectFile(filePath, { action: 'drag-drop' })
      cy.get('#resume_filename').invoke('text').should('eq', 'BalciogluNursedaCVcopy.pdf')

      cy.get('#job_application_answers_attributes_0_text_value').type('I will require a skilled worker visa')

      cy.get('#job_application_answers_attributes_1_answer_selected_options_attributes_1_question_option_id').invoke('show').select(1)
      cy.get("select option:selected").invoke("text").should("eq", "Yes")

      cy.get('#job_application_answers_attributes_2_text_value').type('https://github.com/nurito-burrito/Staffbase')

      cy.get('#submit_app').click()
    })
  })
})  