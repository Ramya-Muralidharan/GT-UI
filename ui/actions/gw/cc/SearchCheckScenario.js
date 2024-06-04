import { SearchTabBar } from "../../../../ui/pages/gw/generated/claimsolutions/pages/navigation/tabBar/SearchTabBar.js";
import { PaymentSearch } from "../../../pages/gw/generated/claimsolutions/pages/search/PaymentSearch"
import { ClaimFinancialsChecksDetail_New } from "./scenarioPages/claim/claimFinancialsGroup/ClaimFinancialsChecksDetail_New.js"
import world from '../../../util/gw/world'
import { searchTableRecord } from "../../../../ui/util/gw/helper";
import { t } from 'testcafe'

const paymentSearch = new PaymentSearch();
const claimFinancialsChecksDetail_New = new ClaimFinancialsChecksDetail_New();
const searchTabBar = new SearchTabBar();

export class SearchCheckScenario {
    async searchCheck() {
        await searchTabBar.tabBarSearchChevron.click()
        await searchTabBar.searchTabSearch_PaymentSearch.click()
        await paymentSearch.paymentSearchRequiredInputSetClaimNumber.setValue(world.dataMap.get('ClaimNumber'))
        await paymentSearch.paymentSearchPaymentSearchScreenPaymentSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
    }
    
    async validateCheckDetailsHeader() {
        await searchTableRecord(1, world.dataMap.get('Name'))
        await t.expect((claimFinancialsChecksDetail_New.checkDetailsHeader).component.exists).ok();
    }
}
