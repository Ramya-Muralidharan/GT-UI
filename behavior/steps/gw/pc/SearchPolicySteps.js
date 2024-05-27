const { When, Then } = require("@cucumber/cucumber")
import { t } from "testcafe";
import { NavigationScenario } from "../../../../ui/actions/gw/pc/NavigationScenario";
import { searchTableRecord } from "../../../../ui/util/gw/helper";
import { SearchPolicyScenario } from "../../../../ui/actions/gw/pc/SearchPolicyScenario";

const navigationScenario = new NavigationScenario()
const searchPolicyScenario = new SearchPolicyScenario()

When(/^the user searches for the policy with policy number/, async function () {
    await navigationScenario.navigateSearchPolicyScreen()
    await searchPolicyScenario.searchWithPolicyNumber(t.ctx.PolicyNumber)
});

Then(/^the policy details are loaded successfully/, async function () {
    await searchTableRecord(4, t.ctx.policyNumber)
    await searchPolicyScenario.verifyPolicySummaryHeader()
});