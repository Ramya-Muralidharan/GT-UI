import { AccountSearch } from "../../../pages/gw/generated/policysolutions/pages/search/AccountSearch";
import world from "../../../../ui/util/gw/world"

const accountSearch = new AccountSearch()

export class SearchAccountScenario {

    async searchWithAccountNumber() {
        await accountSearch.accountSearchDVAccountNumber.setValue(world.dataMap.get('AccountNumber'))
        await accountSearch.accountSearchAccountSearchScreenAccountSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
    }
}