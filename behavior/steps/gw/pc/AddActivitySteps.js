import { AddActivityScenario } from "../../../../ui/actions/gw/pc/AddActivityScenario";
 
const { When, Then } = require("@cucumber/cucumber")
const addActivityScenario = new AddActivityScenario()
 
When(/^the user performs add activity transaction/, async function () {
    await addActivityScenario.addActivity();
});
  
Then(/^the add activity should be successful/, async function (t) {
  await addActivityScenario.activityValidation();
});