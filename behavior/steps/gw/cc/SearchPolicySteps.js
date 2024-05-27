const { When, Then } = require("@cucumber/cucumber")
import world from "../../../../ui/util/gw/world"
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";
import { ViewClaimSummaryScenario } from "../../../../ui/actions/gw/cc/ViewClaimSummaryScenario";
import { SearchScenario } from "../../../../ui/actions/gw/cc/SearchScenario";
import { searchTableRecord } from "../../../../ui/util/gw/helper";

const navigationScenario = new NavigationScenario()
const searchScenario = new SearchScenario()
const viewClaimSummaryScenario = new ViewClaimSummaryScenario()

When(/^the user searches for the policy in Search Claims/, async function () {
    await navigationScenario.navigateSearchPolicyScreen()
    await searchScenario.searchWithPolicy(world.dataMap.get('PolicyNumber'))
});

Then(/^the claim details are loaded successfully/, async function () {
    await searchTableRecord(3,world.dataMap.get('ClaimNo')) 
    await viewClaimSummaryScenario.verifySummaryHeader()
});