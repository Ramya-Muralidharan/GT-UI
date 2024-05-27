const { When, Then } = require("@cucumber/cucumber")
import { NavigationScenario } from "../../../../ui/actions/gw/pc/NavigationScenario";
import { SearchAccountScenario } from "../../../../ui/actions/gw/pc/SearchAccountScenario";
import { AccountSummaryScenario } from "../../../../ui/actions/gw/pc/AccountSummaryScenario";
import { searchTableRecord } from "../../../../ui/util/gw/helper";
import world from "../../../../ui/util/gw/world";

const navigationScenario = new NavigationScenario()
const searchAccountScenario = new SearchAccountScenario()
const accountSummaryScenario = new AccountSummaryScenario()

When(/^the user searches for the account with account number/, async function () {
    await navigationScenario.navigateSearchAccountScreen()
    await searchAccountScenario.searchWithAccountNumber()
});

Then(/^the account details are loaded/, async function () {
    await searchTableRecord(1, world.dataMap.get('AccountNumber'))
    await accountSummaryScenario.validateAccounSummaryHeader()
});