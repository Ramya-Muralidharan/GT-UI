import { ClaimStatus } from "../../../../ui/pages/gw/generated/claimsolutions/pages/claim/claimSummaryGroup/ClaimStatus";
import { ClaimSummary_Ext } from "./scenarioPages/claim/claimSummaryGroup/ClaimSummary_Ext";
import { t } from 'testcafe'

const claimStatus = new ClaimStatus()
const claimSummary_Ext = new ClaimSummary_Ext()

export class ViewClaimSummaryScenario {
    async viewClaimSummary() {
        await t.expect(claimStatus.claimStatusClaimStatus.component.textContent).eql('Open')
    }

    async verifySummaryHeader() {
        await t.expect((claimSummary_Ext.summaryHeader).component.exists).ok();
    }
}