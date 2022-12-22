// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import 'cypress-iframe'
import './commands'

beforeEach(() => {
    cy.setCookie('CONSENT', 'YES+srp.gws-20220525-0-RC3.en+FX+608')
    cy.setCookie('OptanonAlertBoxClosed', '2022-12-09T13:38:54.328Z')
    cy.visit('/')
})

// Hide fetch/XHR requests from command log
if (Cypress.config('hideXHRInCommandLog')) {
    const app = window.top;

    if (
        app &&
        !app.document.head.querySelector('[data-hide-command-log-request]')
    ) {
        const style = app.document.createElement('style');
        style.innerHTML =
            '.command-name-request, .command-name-xhr { display: none }';
        style.setAttribute('data-hide-command-log-request', '');

        app.document.head.appendChild(style);
    }
}