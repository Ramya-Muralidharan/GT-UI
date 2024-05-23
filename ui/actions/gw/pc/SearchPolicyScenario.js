import { PolicySearch } from '../../../pages/gw/generated/policysolutions/pages/search/PolicySearch'; 
import { t, Selector } from 'testcafe'
import { Summary } from "../../../pages/gw/generated/policysolutions/pages/account/Summary";

const policySearch = new PolicySearch()
const summary = new Summary()
export class SearchPolicyScenario {

    async searchWithPolicyNumber(policyNumber) {
        await policySearch.policySearchDVPolicyNumberCriterion.setValue(policyNumber)
        await policySearch.policySearchPolicySearchScreenDatabasePolicySearchPanelSetPolicySearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
    }

    async verifyPolicyDetails() { 
        await t.wait(1000)     
        const tableRows = Selector('table').nth(0).find('tr');
        const rowCount = await tableRows.count;
        for (let i = 1; i < rowCount; i++) {
            const cellText = await tableRows.nth(i).find('td').nth(2).textContent;
            if (cellText.includes(t.ctx.policyNumber)) {
                await t.click(tableRows.nth(i).find('td').nth(2));
                await t.wait(5000) 
            }      
        }   
    }
}