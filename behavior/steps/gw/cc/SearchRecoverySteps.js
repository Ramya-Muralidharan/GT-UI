const { Then } = require("@cucumber/cucumber")

import { SearchRecoveryScenario } from "../../../../ui/actions/gw/cc/SearchRecoveryScenario.js";
import { t } from "testcafe"

const searchRecoveryScenario = new SearchRecoveryScenario();

Then(/^the recovery is added successfully/, async function (t) {
    await searchRecoveryScenario.searchRecovery(t.ctx.claimNo);
});