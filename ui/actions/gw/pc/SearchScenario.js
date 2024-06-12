import { AccountSearch } from "../../../pages/gw/generated/policysolutions/pages/search/AccountSearch";
import { ContactTabBar } from "../../../pages/gw/generated/policysolutions/pages/navigation/tabBar/ContactTabBar"
import { ContactSearch_Ext } from "./scenarioPages/search/ContactSearch_Ext"
import { PolicySearch } from '../../../pages/gw/generated/policysolutions/pages/search/PolicySearch';
import { Summary_Ext } from './scenarioPages/account/Summary_Ext';
import world from "../../../util/gw/world"
import { t } from 'testcafe'

const contactTabBar = new ContactTabBar();
const contactSearch_Ext = new ContactSearch_Ext()
const accountSearch = new AccountSearch()
const policySearch = new PolicySearch()
const summary_Ext = new Summary_Ext()
export class SearchScenario {

    async contactSearch() {
        await contactSearch_Ext.contactMenu.click()
        await contactTabBar.contactTabSearch.click()
        await contactSearch_Ext.contactSearchScreenContactType.selectOptionByLabel(world.dataMap.get('Type'));
        await contactSearch_Ext.contactSearchContactSearchScreenBasicContactInfoInputSetGlobalPersonNameInputSetFirstName.setValue(t.ctx.FirstName)
        await contactSearch_Ext.contactSearchContactSearchScreenBasicContactInfoInputSetGlobalPersonNameInputSetLastName.setValue(t.ctx.LastName)
        await contactSearch_Ext.contactSearchContactSearchScreenSearchAndResetInputSetSearchLinksInputSetSearch.click()
    }

    async contactValidation() {
        t.ctx.ContactSearchName = await contactSearch_Ext.contactSearchName.component.textContent
        console.log("Contact search sucessfully" + t.ctx.ContactSearchName)
        const name = t.ctx.FirstName + " " + t.ctx.LastName
        await t.expect(t.ctx.ContactSearchName).eql(name)
    }

    async searchWithAccountNumber(accountNumber) {
        await accountSearch.accountSearchDVAccountNumber.setValue(accountNumber)
        await accountSearch.accountSearchAccountSearchScreenAccountSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
    }

    async searchWithPolicyNumber(policyNumber) {
        await policySearch.policySearchDVPolicyNumberCriterion.setValue(policyNumber)
        await policySearch.policySearchPolicySearchScreenDatabasePolicySearchPanelSetPolicySearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
    }

    async verifyPolicySummaryHeader() {
        await t.expect((summary_Ext.policySummaryHeader).component.exists).ok();
    }
}