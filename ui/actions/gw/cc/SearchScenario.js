import { SearchTabBar } from "../../../pages/gw/generated/claimsolutions/pages/navigation/tabBar/SearchTabBar"
import { SimpleClaimSearch } from "../../../pages/gw/generated/claimsolutions/pages/search/claimSearchesGroup/SimpleClaimSearch"
import { t } from "testcafe"

const searchTabBar = new SearchTabBar()
const simpleClaimSearch = new SimpleClaimSearch()

export class SearchScenario {
    async claimSimpleSearch() {
        console.log("On Search Claims screen")
        await searchTabBar.tabBarSearchTab.click()
        await simpleClaimSearch.simpleClaimSearchDVClaimNumber.setValue(t.ctx.claimNo)
        await simpleClaimSearch.simpleClaimSearchSimpleClaimSearchScreenSimpleClaimSearchDVClaimSearchAndResetInputSetSearch.click()
    }

    async searchWithPolicy(policyNumber) {
        await simpleClaimSearch.simpleClaimSearchDVPolicyNumber.setValue(policyNumber)
        await simpleClaimSearch.simpleClaimSearchSimpleClaimSearchScreenSimpleClaimSearchDVClaimSearchAndResetInputSetSearch.click()
    }
}