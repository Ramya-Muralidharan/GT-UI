import { AccountSearch } from "../../../pages/gw/generated/policysolutions/pages/search/AccountSearch";
import { SearchTabBar } from '../../../../ui/pages/gw/generated/policysolutions/pages/navigation/tabBar/SearchTabBar'
import { t, Selector } from 'testcafe'
import { Summary } from "../../../pages/gw/generated/policysolutions/pages/account/Summary";
import world from "../../../../ui/util/gw/world"
import { tableValidation } from "../../../util/gw/helper";

const accountSearch = new AccountSearch()
const summary = new Summary()
export class SearchAccountScenario {

    async searchWithAccountNumber() {
        await accountSearch.accountSearchDVAccountNumber.setValue(world.dataMap.get('AccountNumber'))
        await accountSearch.accountSearchAccountSearchScreenAccountSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
    }

    async verifyAccountDetails() {       
        const tableRows = Selector('table').nth(0).find('tr');
        const rowCount = await tableRows.count;
        for (let i = 0; i < rowCount; i++) {
            const cellText = await tableRows.nth(i).find('td').nth(1).textContent;
            if (cellText.includes(world.dataMap.get('AccountNumber'))) {
                console.log('Account found')
                await t.click(tableRows.nth(i).find('td').nth(2));
                await t.wait(1000)
                console.log('On Account Summary Screen')      
            }      
            else {
                console.log('Account not found')
            }
        }   
    }
}