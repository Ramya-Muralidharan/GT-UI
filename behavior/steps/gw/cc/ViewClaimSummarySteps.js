const{Then} = require("@cucumber/cucumber");
import {ViewClaimSummaryScenario} from '../../../../ui/actions/gw/cc/ViewClaimSummaryScenario.js'
import {ClaimMenuLinks} from '../../../../ui/pages/gw/generated/claimsolutions/pages/navigation/menuLinks/ClaimMenuLinks.js'

const claimMenuLinks = new ClaimMenuLinks();
const viewClaimSummaryScenario = new ViewClaimSummaryScenario()

Then(/^the claim summary details are loaded/, async function () {
await claimMenuLinks.claim_ClaimSummaryGroupClaimSummaryGroup_ClaimStatus.click()
await viewClaimSummaryScenario.viewClaimSummary()
});