const{ Given, When,Then} = require("@cucumber/cucumber");
import {ViewClaimSummaryScenario} from '../../../../ui/actions/gw/cc/ViewClaimSummaryScenario.js'
import {ClaimMenuLinks} from '../../../../ui/pages/gw/generated/claimsolutions/pages/navigation/menuLinks/ClaimMenuLinks.js'

const claimMenuLinks = new ClaimMenuLinks();
const viewClaimSummaryScenario = new ViewClaimSummaryScenario()

Then(/^the user verifies claim summary page$/, async function (t) {
await claimMenuLinks.claim_ClaimSummaryGroupClaimSummaryGroup_ClaimStatus.click()
await viewClaimSummaryScenario.viewClaimSummary()
});