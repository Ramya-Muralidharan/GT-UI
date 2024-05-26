const { Then, When } = require("@cucumber/cucumber")

import { SearchRecoveryScenario } from "../../../../ui/actions/gw/cc/SearchRecoveryScenario.js";
import { t } from "testcafe"

const searchRecoveryScenario = new SearchRecoveryScenario();

When(/^the user creates the recovery/, async function () {
    await searchRecoveryScenario.recoveryCreation();
});

Then(/^the recovery is added successfully/, async function (t) {
    await searchRecoveryScenario.searchRecovery(t.ctx.claimNo);
});