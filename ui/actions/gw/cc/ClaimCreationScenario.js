import { ClaimTabBar_New } from "../../../../ui/actions/gw/cc/scenarioPages/navigations/tabBar/ClaimTabBar_New.js"
import { FNOLWizard } from "../../../../ui/pages/gw/generated/claimsolutions/pages/claim/FNOLWizard.js"
import { FNOLWizard_New } from "../../../../ui/actions/gw/cc/scenarioPages/claim/FNOLWizard_New.js"
import { dateFunction } from "../../../../ui/util/gw/helper.js"
import { NewContactPopup } from "../../../../ui/pages/gw/generated/claimsolutions/pages/popup/New/NewContactPopup.js";
import { generateRandomStringFunction } from "../../../../ui/util/gw/helper.js"
import { NewClaimSaved } from "../../../../ui/pages/gw/generated/claimsolutions/pages/other/NewClaimSaved.js"
import { splitFunction } from "../../../../ui/util/gw/helper.js"
import { ClaimTabBar } from "../../../../ui/pages/gw/generated/claimsolutions/pages/navigation/tabBar/ClaimTabBar.js";
import { ClaimSummary_New } from "./scenarioPages/claim/claimSummaryGroup/ClaimSummary_New.js";
import world from "../../../../ui/util/gw/world"
import { t } from "testcafe"

let claimsummary_New = new ClaimSummary_New();
let newClaimSaved = new NewClaimSaved()
let newContactPopup = new NewContactPopup()
let fNOLWizard = new FNOLWizard();
let claimTabBar = new ClaimTabBar();
let claimTabBar_New = new ClaimTabBar_New();
let fNOLWizard_New = new FNOLWizard_New();

export class ClaimCreationScenario {
    async claimSceneario() {
        await claimTabBar_New.tabBarClaimChevron.click()
        await claimTabBar_New.claimTabClaimTab_FNOLWizard.click()
        await fNOLWizard_New.fnolWizardPolicyRadio("Create Unverified Policy").click();
        await fNOLWizard.fNOLWizardFindPolicyPanelSetPolicyNumber.setValue(world.dataMap.get('PolicyNumber'));
        await fNOLWizard.fNOLWizardFindPolicyPanelSetType.click();
        await fNOLWizard.fNOLWizardFindPolicyPanelSetType.selectOptionByLabel(world.dataMap.get('Type'));
        var lossDate = dateFunction("-1");
        await fNOLWizard.fNOLWizardFindPolicyPanelSetClaim_LossDate.setValue(lossDate)
        var effectiveDate = dateFunction("-3");
        var expirationDate = dateFunction("+366");
        await fNOLWizard.newClaimPolicyGeneralDVEffectiveDate.setValue(effectiveDate)
        await fNOLWizard.newClaimPolicyGeneralDVExpirationDate.setValue(expirationDate)
        await fNOLWizard_New.fNOLWizardNameMenuIcon.click()
        await fNOLWizard_New.FnolWizardNameMenuSelection("New Person").click()
        t.ctx.insuredName = generateRandomStringFunction(4)
        await newContactPopup.newContactPopupContactDetailScreenContactBasicsDVPersonNameInputSetGlobalPersonNameInputSetLastName.setValue(t.ctx.insuredName)
        await newContactPopup.newContactPopupContactDetailScreenContactBasicsDV_tbContactDetailToolbarButtonSetCustomUpdateButton.click()
        await fNOLWizard.fNOLWizardNext.click();
        await fNOLWizard_New.fnolWizardNameDropdown.selectNthOption(1)
        await fNOLWizard.fNOLWizardNext.click();
        await fNOLWizard.lossDetailsAddressDVClaim_LossCause.selectOptionByLabel(world.dataMap.get('LossCause'));
        await fNOLWizard.fNOLWizardFullWizardStepSetFNOLWizard_NewLossDetailsScreenLossDetailsAddressDVAddressDetailInputSetRefCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetCity.setValue(world.dataMap.get('City'));
        await fNOLWizard.fNOLWizardFullWizardStepSetFNOLWizard_NewLossDetailsScreenLossDetailsAddressDVAddressDetailInputSetRefCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetState.click();
        await fNOLWizard.fNOLWizardFullWizardStepSetFNOLWizard_NewLossDetailsScreenLossDetailsAddressDVAddressDetailInputSetRefCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetState.selectOptionByLabel(world.dataMap.get('State'));
        await fNOLWizard.fNOLWizardNext.click(); await fNOLWizard.fNOLWizardNext.click();
        await fNOLWizard.fNOLWizardFinish.click();
        var header = await newClaimSaved.newClaimDVAssignedHeader.component.innerText;
        t.ctx.claimNo = splitFunction(header, " ", 1)
        console.log("The claim number is: " + t.ctx.claimNo)
        await claimTabBar.tabBarClaimTab.click();
        await claimsummary_New.summarySelector.click()
    }
}