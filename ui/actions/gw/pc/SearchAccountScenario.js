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
}