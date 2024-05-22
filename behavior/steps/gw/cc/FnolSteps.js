const{When,Then} = require("@cucumber/cucumber")
import { FnolScenario } from "../../../../ui/actions/gw/cc/FNOLScenario";
import { SearchScenario } from "../../../../ui/actions/gw/cc/searchScenario";
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";
 
const fnolScenario = new FnolScenario()
const searchScenario = new SearchScenario()
const navigationScenario = new NavigationScenario()
 
When(/^the user creates new FNOL/, async function (t) {
    await navigationScenario.navigateToNewClaimWizard()
    await fnolScenario.newFnolCreation()
    await fnolScenario.readClaimNumber()  
});

When(/^the user search with claim number/, async function (t) {
    await navigationScenario.openClaim(t.ctx.claimNo);
});

 
Then(/^the FNOL is added successfully/, async function () {
    await searchScenario.claimSimpleSearch()
    await searchScenario.validateClaimSearchResult()
});