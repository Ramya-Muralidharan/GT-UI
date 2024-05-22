import { Summary_New } from "./scenarioPages/account/Summary_New";
import {t} from "testcafe";

const summary_New = new Summary_New()

export class ViewAccountSummaryScenario
{
    async viewAccountSummary(){
		console.log('On Account Summary Screen')
		t.ctx.accountHolderName = await summary_New.accountHolder.component.textContent
		t.ctx.status = await summary_New.accountStatus.component.textContent
		console.log("Account Holder is:" + t.ctx.accountHolderName)
		console.log("Account Status is:" + t.ctx.status)
		await t.expect(t.ctx.status).eql('Pending')
	}

}