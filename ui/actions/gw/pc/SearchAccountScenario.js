import { AccountSearch } from "../../../pages/gw/generated/policysolutions/pages/search/AccountSearch";
import { Summary } from "../../../pages/gw/generated/policysolutions/pages/account/Summary";
import world from "../../../../ui/util/gw/world"


const accountSearch = new AccountSearch()
const summary = new Summary()
export class SearchAccountScenario {

    async searchWithAccountNumber() {
        await accountSearch.accountSearchDVAccountNumber.setValue(world.dataMap.get('AccountNumber'))
        await accountSearch.accountSearchAccountSearchScreenAccountSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
    }
}