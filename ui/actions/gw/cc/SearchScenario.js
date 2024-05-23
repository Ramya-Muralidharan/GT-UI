import { SearchTabBar } from "../../../pages/gw/generated/claimsolutions/pages/navigation/tabBar/SearchTabBar"
import { SimpleClaimSearch } from "../../../pages/gw/generated/claimsolutions/pages/search/claimSearchesGroup/SimpleClaimSearch"
import {SimpleClaimSearch_New} from "./scenarioPages/search/claimSearchesGroup/SimpleCliamSearch_New"
import world from "../../../util/gw/world"
import { t, Selector} from "testcafe"
import { searchTableRecord } from "../../../util/gw/helper"
 
let searchTabBar = new SearchTabBar()
let simpleClaimSearch = new SimpleClaimSearch()
let simpleClaimSearch_New = new SimpleClaimSearch_New()
 
export class SearchScenario{
    async claimSimpleSearch()
    {
        console.log("On Search Claims screen")
        await searchTabBar.tabBarSearchTab.click()
        await simpleClaimSearch.simpleClaimSearchDVClaimNumber.setValue(t.ctx.claimNo)
        await simpleClaimSearch.simpleClaimSearchSimpleClaimSearchScreenSimpleClaimSearchDVClaimSearchAndResetInputSetSearch.click()
    }

    async searchWithPolicy(policyNumber)
    {
        await searchTabBar.tabBarSearchTab.click()
        await simpleClaimSearch.simpleClaimSearchDVPolicyNumber.setValue(policyNumber)
        await simpleClaimSearch.simpleClaimSearchSimpleClaimSearchScreenSimpleClaimSearchDVClaimSearchAndResetInputSetSearch.click()
    }

    async validateClaimSearchResult()
    {
    var insuredName = await simpleClaimSearch_New.simpleClaimSearchTableInsuredName.component.innerText;
    var policyNumber = await simpleClaimSearch_New.simpleClaimSearchTablePolicyNumber.component.innerText;
    await t.expect(insuredName).eql(t.ctx.insuredName)
    await t.expect(policyNumber).eql(world.dataMap.get('PolicyNumber'))
    }

    async validatePolicySearchResult()
    {
        searchTableRecord(3,world.dataMap.get('ClaimNo'))  
    }
}