import { ClaimStatus } from "../../../../ui/pages/gw/generated/claimsolutions/pages/claim/claimSummaryGroup/ClaimStatus";
import { t } from 'testcafe'

const claimStatus = new ClaimStatus()

export class ViewClaimSummaryScenario {
    async viewClaimSummary() {
        t.ctx.LossType = await claimStatus.claimStatusLossType.component.textContent
        t.ctx.Claimstatus = await claimStatus.claimStatusClaimStatus.component.textContent
        console.log("Loss Type is:" + t.ctx.LossType)
        console.log("Claim Status is:" + t.ctx.Claimstatus)
        await t.expect(t.ctx.Claimstatus).eql('Open')

    }
}