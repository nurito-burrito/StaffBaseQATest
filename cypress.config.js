const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "viewportWidth": 1440,
    "viewportHeight": 900,
    "baseUrl": "https://staffbase.com/jobs/quality-assurance-engineer-2021_1730/apply?gh_jid=4362591002&gh_src=c47353812",
    "defaultCommandTimeout": 15000,
    "chromeWebSecurity": false,
    "watchForFileChanges": false,
    "hideXHRInCommandLog": true
  },
});
