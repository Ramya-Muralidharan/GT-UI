import { SearchTabBar } from "../../../../ui/pages/gw/generated/claimsolutions/pages/navigation/tabBar/SearchTabBar.js";
import { RecoverySearch } from "../../../../ui/pages/gw/generated/claimsolutions/pages/search/RecoverySearch.js";
import world from "../../../util/gw/world.js"
import { NewRecoverySet_Ext } from "../../../../ui/actions/gw/cc/scenarioPages/claim/recovery/NewRecoverySet_Ext"
import { ClaimMenuActions_Ext } from "../../../../ui/actions/gw/cc/scenarioPages/navigation/menuActions/ClaimMenuActions_Ext"
import { NewContactPopup } from "../../../../ui/pages/gw/generated/claimsolutions/pages/popup/New/NewContactPopup.js"
import { t } from 'testcafe'

const searchTabBar = new SearchTabBar();
const recoverySearch = new RecoverySearch();
const newContactPopup = new NewContactPopup()
const claimMenuActions_Ext = new ClaimMenuActions_Ext();
const newRecoverySet_Ext = new NewRecoverySet_Ext();

export class SearchRecoveryScenario {
    async searchRecovery(claimNumber) {
        await searchTabBar.tabBarSearchChevron.click()
        await searchTabBar.searchTabSearch_RecoverySearch.click()
        await recoverySearch.recoverySearchRequiredInputSetClaimNumber.setValue(claimNumber);
        await recoverySearch.recoverySearchRecoverySearchScreenRecoverySearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
    }

    async recoveryCreation() {
        await claimMenuActions_Ext.claimClaimMenuActions.click()
        await claimMenuActions_Ext.claimMenuActions_NewTransactionClaimMenuActions_NewOtherTrans.click()
        await claimMenuActions_Ext.claimMenuActions_NewTransactionClaimMenuActions_NewOtherTrans.click()
        await t.wait(1000)
        await claimMenuActions_Ext.claimMenuActions_NewOtherTransClaimMenuActions_NewTransaction_RecoverySet.click()
        await newRecoverySet_Ext.payerMenuIcon.click()
        await newRecoverySet_Ext.newRecoverySetNewRecoveryScreenRecoveryDetailDVPayerClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewPerson.click();
        await newContactPopup.newContactPopupContactDetailScreenContactBasicsDVPersonNameInputSetGlobalPersonNameInputSetLastName.setValue(world.dataMap.get('Payer'));
        await newContactPopup.newContactPopupContactDetailScreenContactBasicsDV_tbContactDetailToolbarButtonSetCustomUpdateButton.click()
        await t.wait(1000)
        await newRecoverySet_Ext.newRecoverySetNewRecoveryScreenRecoveryDetailDVReserveLineInputSetReserveLine.selectOptionByLabel(world.dataMap.get('ReserveLine'))
        await newRecoverySet_Ext.newRecoverySetNewRecoveryScreenRecoveryDetailDVReserveLineInputSetCostType.selectOptionByLabel(world.dataMap.get('CostType'))
        await newRecoverySet_Ext.newRecoverySetNewRecoveryScreenRecoveryDetailDVReserveLineInputSetCostCategory.selectOptionByLabel(world.dataMap.get('CostCategory'))
        await newRecoverySet_Ext.recoveryDetailDVRecoveryCategory.selectOptionByLabel(world.dataMap.get('RecoveryCategory'))
        await newRecoverySet_Ext.recoveryAmount.setValue(world.dataMap.get('Amount'))
        await newRecoverySet_Ext.newRecoveryScreenUpdate.click()
    }
}