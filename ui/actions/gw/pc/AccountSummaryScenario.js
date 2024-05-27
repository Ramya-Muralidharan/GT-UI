import { Summary_New } from "./scenarioPages/account/Summary_New"
import { t } from "testcafe";

const summary_New  = new Summary_New()

export class AccountSummaryScenario {

    async validateAccounSummaryHeader(){
        await t.expect((summary_New.accountSummaryHeader).component.exists).ok();
    }
}