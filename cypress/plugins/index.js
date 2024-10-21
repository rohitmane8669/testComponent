const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const { pa11y, prepareAudit } = require("@cypress-audit/pa11y");

module.exports = (on, config) => {
  on("before:browser:launch", (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
    
   // return launchOptions;
  });

  // on("task", {
  //   lighthouse: lighthouse(), // calling the function is important
  // });

  // on("task", {
  //   pa11y: pa11y(), // calling the function is important
  // });

  on('task', {
    lighthouse: lighthouse((lighthouseReport) => {
      console.log(lighthouseReport);
      // You can process the Lighthouse report here
    }),
    pa11y: pa11y((pa11yReport) => {
      // You can process the Pa11y report here
    })
})
};