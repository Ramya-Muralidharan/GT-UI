import { AccountSearch } from "../../../pages/gw/generated/policysolutions/pages/search/AccountSearch";
import world from "../../../../ui/util/gw/world"

const accountSearch = new AccountSearch()

export class SearchAccountScenario {

    async searchWithAccountNumber(accountNumber) {
        await accountSearch.accountSearchDVAccountNumber.setValue(accountNumber)
        await accountSearch.accountSearchAccountSearchScreenAccountSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
    }
}