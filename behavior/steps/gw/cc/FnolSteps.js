const{When,Then} = require("@cucumber/cucumber")
import { t } from "testcafe";
import { FnolScenario } from "../../../../ui/actions/gw/cc/FNOLScenario";
import { SearchScenario } from "../../../../ui/actions/gw/cc/SearchScenario";
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";
 
const fnolScenario = new FnolScenario()
const searchScenario = new SearchScenario()
const navigationScenario = new NavigationScenario()
 
When(/^the user creates new FNOL/, async function () {
    await navigationScenario.navigateToNewClaimWizard()
    await fnolScenario.newFnolCreation()
    await fnolScenario.readClaimNumber()  
});

When(/^the user search with claim number/, async function () {
    await navigationScenario.openClaim(t.ctx.claimNo);
});
 
Then(/^the FNOL is added successfully/, async function () {
    await searchScenario.claimSimpleSearch()
    await searchScenario.validateClaimSearchResult()
});