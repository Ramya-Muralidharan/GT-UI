import { PolicySearch } from '../../../pages/gw/generated/policysolutions/pages/search/PolicySearch';
import { t } from 'testcafe'
import { Summary_Ext } from './scenarioPages/account/Summary_Ext';

const policySearch = new PolicySearch()
const summary_Ext = new Summary_Ext()

export class SearchPolicyScenario {

    async searchWithPolicyNumber(policyNumber) {
        await policySearch.policySearchDVPolicyNumberCriterion.setValue(policyNumber)
        await policySearch.policySearchPolicySearchScreenDatabasePolicySearchPanelSetPolicySearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
    }

    async verifyPolicySummaryHeader() {
        await t.expect((summary_Ext.policySummaryHeader).component.exists).ok();
    }
}