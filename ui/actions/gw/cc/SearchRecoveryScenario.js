import { SearchTabBar } from "../../../../ui/pages/gw/generated/claimsolutions/pages/navigation/tabBar/SearchTabBar.js";
import { RecoverySearch } from "../../../../ui/pages/gw/generated/claimsolutions/pages/search/RecoverySearch.js";
import world from "../../../util/gw/world.js"


const searchTabBar = new SearchTabBar();
const recoverySearch = new RecoverySearch();

export class SearchRecoveryScenario {
    async searchRecovery(claimNumber) {
        await searchTabBar.tabBarSearchChevron.click()
        await searchTabBar.searchTabSearch_RecoverySearch.click()
        await recoverySearch.recoverySearchRequiredInputSetClaimNumber.setValue(claimNumber);
        await recoverySearch.recoverySearchRecoverySearchScreenRecoverySearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
    }
}