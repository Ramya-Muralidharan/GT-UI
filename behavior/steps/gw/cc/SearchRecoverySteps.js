const { Then } = require("@cucumber/cucumber")

import { SearchRecoveryScenario } from "../../../../ui/actions/gw/cc/SearchRecoveryScenario.js";
import { t } from "testcafe"

const searchRecoveryScenario = new SearchRecoveryScenario();

Then(/^the user search the recovery/, async function (t) {
    await searchRecoveryScenario.searchRecovery(t.ctx.claimNo);
});