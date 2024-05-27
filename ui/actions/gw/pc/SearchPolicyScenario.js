import { PolicySearch } from '../../../pages/gw/generated/policysolutions/pages/search/PolicySearch';
import { t } from 'testcafe'
import { Summary_New } from './scenarioPages/account/Summary_New';

const policySearch = new PolicySearch()
const summary_New = new Summary_New()

export class SearchPolicyScenario {

    async searchWithPolicyNumber(policyNumber) {
        await policySearch.policySearchDVPolicyNumberCriterion.setValue(policyNumber)
        await policySearch.policySearchPolicySearchScreenDatabasePolicySearchPanelSetPolicySearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
    }

    async verifyPolicySummaryHeader() {
        await t.expect((summary_New.policySummaryHeader).component.exists).ok();
    }


}