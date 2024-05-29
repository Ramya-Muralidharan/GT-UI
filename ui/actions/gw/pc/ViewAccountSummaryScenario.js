import { Summary_New } from "./scenarioPages/account/Summary_New";
import {t} from "testcafe";

const summary_New = new Summary_New()

export class ViewAccountSummaryScenario
{
    async viewAccountSummary(){
		console.log('On Account Summary Screen')
		await t.expect(summary_New.accountHolder.component.textContent).contains(t.ctx.FirstName)
		await t.expect(summary_New.accountStatus.component.textContent).eql('Pending')
	}

}