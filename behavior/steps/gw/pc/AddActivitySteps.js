import { AddActivityPage_New } from "../../../../ui/actions/gw/pc/scenarioPages/account/AddActivityPage_New";
import { AddActivityScenario } from "../../../../ui/actions/gw/pc/AddActivityScenario";
import world from "../../../../ui/util/gw/world"
import { t, stepArguements } from "testcafe";
 
const { When, Then } = require("@cucumber/cucumber")
 
const addActivitypage_New = new AddActivityPage_New()
const addActivityScenario = new AddActivityScenario()
 
When(/^the user performs add activity transaction/, async function () {
    await addActivitypage_New.actionsMenu.click();
    await addActivitypage_New.newActivity.click();
    await addActivitypage_New.newActivity.click();
    await addActivitypage_New.interviewOption.click();
    await addActivitypage_New.interviewOption.click();
    await addActivitypage_New.meetwithInsuredOption.click();
    await addActivitypage_New.securityLevel.selectOptionByLabel(world.dataMap.get('SecurityLevel'));
    await addActivityScenario.radioOptionMandatory(world.dataMap.get('Mandatory'));
    await addActivityScenario.radioOptionRecurring(world.dataMap.get('Recurring'));
    await addActivitypage_New.okButton.click();
});
  
Then(/^the add activity should be successful/, async function (t) {
  await addActivityScenario.activityValidation();
});