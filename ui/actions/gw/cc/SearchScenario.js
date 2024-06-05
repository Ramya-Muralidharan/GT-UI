import { SearchTabBar } from "../../../pages/gw/generated/claimsolutions/pages/navigation/tabBar/SearchTabBar"
import { SimpleClaimSearch } from "../../../pages/gw/generated/claimsolutions/pages/search/claimSearchesGroup/SimpleClaimSearch"
import { ClaimSummary_Ext } from "./scenarioPages/claim/claimSummaryGroup/ClaimSummary_Ext"
import { t } from "testcafe"
import { searchTableRecord } from "../../../util/gw/helper"

const searchTabBar = new SearchTabBar()
const simpleClaimSearch = new SimpleClaimSearch()
const claimSummary_Ext = new ClaimSummary_Ext()

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