const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const { pa11y } = require("@cypress-audit/pa11y");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
   //viewportWidth: 1536,//1536,414
   //viewportHeight: 960,//960,736
  
  e2e: {
    baseUrl: "http://localhost:3000", // this is your app
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
        pa11y: pa11y(console.log.bind(console)),
      });
      
    },
  },

  
});

