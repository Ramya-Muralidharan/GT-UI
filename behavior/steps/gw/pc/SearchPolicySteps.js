const { When, Then } = require("@cucumber/cucumber")
import { t } from "testcafe";
import { NavigationScenario } from "../../../../ui/actions/gw/pc/NavigationScenario";
import { SearchScenario } from "../../../../ui/actions/gw/cc/SearchScenario"; 

const navigationScenario = new NavigationScenario()
const searchScenario = new SearchScenario()

When(/^the user searches for the policy with policy number/, async function () {
    await navigationScenario.navigateSearchPolicyScreen()
    await searchScenario.searchWithPolicy(t.ctx.PolicyNumber)
});

Then(/^the policy details are loaded successfully/, async function () {
    await searchScenario.validatePolicySearchResult()
});