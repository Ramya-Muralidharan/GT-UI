const { When, Then } = require("@cucumber/cucumber")
import { NavigationScenario } from "../../../../ui/actions/gw/pc/NavigationScenario";
import { SearchAccountScenario } from "../../../../ui/actions/gw/pc/SearchAccountScenario";

const navigationScenario = new NavigationScenario()
const searchAccountScenario = new SearchAccountScenario()

When(/^the user searches for the account with account number/, async function () {
    await navigationScenario.navigateSearchAccountScreen()
    await searchAccountScenario.searchWithAccountNumber()
});

Then(/^the account details are loaded/, async function () {
    await searchAccountScenario.verifyAccountDetails()
});