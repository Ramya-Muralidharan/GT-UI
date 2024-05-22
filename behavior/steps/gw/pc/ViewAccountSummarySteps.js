const { Given, When, Then } = require("@cucumber/cucumber")
import { ViewAccountSummaryScenario } from "../../../../ui/actions/gw/pc/ViewAccountSummaryScenario";
import { NavigationScenario } from "../../../../ui/actions/gw/pc/NavigationScenario";
import { t } from "testcafe"

const viewAccountSummaryScenario = new ViewAccountSummaryScenario()
const navigationScenario = new NavigationScenario()

When(/^the view account summary details should load/, async function () {
    await viewAccountSummaryScenario.viewAccountSummary();
})

When(/^the user search with an account number/, async function (t) {
   await navigationScenario.openAccount(t.ctx.AccountNumber)
})