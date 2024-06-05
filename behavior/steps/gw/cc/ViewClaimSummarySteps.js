const{Then} = require("@cucumber/cucumber");
import {ViewClaimSummaryScenario} from '../../../../ui/actions/gw/cc/ViewClaimSummaryScenario.js'

const viewClaimSummaryScenario = new ViewClaimSummaryScenario()

Then(/^the claim summary details are loaded/, async function () {
await viewClaimSummaryScenario.verifyClaimStatus()
});