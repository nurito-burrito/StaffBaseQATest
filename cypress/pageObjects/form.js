class form
{
    getFieldAndTypeText(field, text)
    {
        cy.get(field).type(text)
    }
}
export default form