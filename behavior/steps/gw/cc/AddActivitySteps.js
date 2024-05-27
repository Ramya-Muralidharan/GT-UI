import { NewActivity_New } from "../../../../ui/actions/gw/cc/scenarioPages/other/NewActivity_New";
import { NewActivity } from "../../../../ui/pages/gw/generated/claimsolutions/pages/other/NewActivity";
import {AddActivityScenario} from "../../../../ui/actions/gw/cc/AddActivityScenario"
import { ClaimMenuActions_New } from "../../../../ui/actions/gw/cc/scenarioPages/navigation/menuActions/ClaimMenuActions_New";

const { When, Then } = require("@cucumber/cucumber")

const newActivity_New = new NewActivity_New()
const newActivity = new NewActivity()
const addActivityScenario = new AddActivityScenario()
const claimMenuActions_New = new ClaimMenuActions_New()


When(/^the user adds an activity/, async function () {
   await claimMenuActions_New.claimMenuActions.click();
   await newActivity_New.activityAutoPilot.click();
   await newActivity_New.activityAutoPilot.click();
   await newActivity_New.autopilotActionRequired.click();
   await newActivity.newActivityScreenNewActivity_UpdateButton.click()
});

Then(/^the add activity is added successfully/, async function () {
   await addActivityScenario.activityValidation();
});
