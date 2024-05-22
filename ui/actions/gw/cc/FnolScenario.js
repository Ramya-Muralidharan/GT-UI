import { FNOLWizard } from "../../../../ui/pages/gw/generated/claimsolutions/pages/claim/FNOLWizard"
import { FNOLWizard_New } from "../../../../ui/actions/gw/cc/scenarioPages/claim/FNOLWizard_New"
import { dateFunction } from "../../../../ui/util/gw/helper"
import { NewContactPopup } from "../../../../ui/pages/gw/generated/claimsolutions/pages/popup/New/NewContactPopup"
import { generateRandomStringFunction } from "../../../../ui/util/gw/helper"
import { NewClaimSaved_New } from "./scenarioPages/other/NewClaimSaved_New"
import { splitFunction } from "../../../../ui/util/gw/helper"
import world from "../../../../ui/util/gw/world"
import { t } from "testcafe"
 
let fNOLWizard = new FNOLWizard();
let fNOLWizard_New = new FNOLWizard_New();
let newContactPopup = new NewContactPopup()
let newClaimSaved_New = new NewClaimSaved_New()
 
export class FnolScenario {
    async newFnolCreation() {
        console.log("On Step 1: Search or Create Policy screen")
        await fNOLWizard_New.fnolWizardCreateUnverifiedPolicy.click()
        await fNOLWizard.fNOLWizardFindPolicyPanelSetPolicyNumber.setValue(world.dataMap.get('PolicyNumber'))
        await fNOLWizard.fNOLWizardFindPolicyPanelSetType.click()
        await fNOLWizard.fNOLWizardFindPolicyPanelSetType.selectOptionByLabel(world.dataMap.get('Type'))
        await fNOLWizard.fNOLWizardFindPolicyPanelSetClaim_LossDate.setValue(dateFunction(world.dataMap.get('LossDate')))
        await fNOLWizard.newClaimPolicyGeneralDVEffectiveDate.setValue(dateFunction(world.dataMap.get('EffectiveDate')))
        await fNOLWizard.newClaimPolicyGeneralDVExpirationDate.setValue(dateFunction(world.dataMap.get('ExpirationDate')))
        await fNOLWizard_New.fNOLWizardNameMenuIcon.click()
        await fNOLWizard_New.FnolWizardNameMenuSelection.click()
        console.log("On New Person screen")
        t.ctx.insuredName = generateRandomStringFunction(4)
        await newContactPopup.newContactPopupContactDetailScreenContactBasicsDVPersonNameInputSetGlobalPersonNameInputSetLastName.setValue(t.ctx.insuredName)
        await newContactPopup.newContactPopupContactDetailScreenContactBasicsDV_tbContactDetailToolbarButtonSetCustomUpdateButton.click()
        console.log("On Step 1: Search or Create Policy screen")
        await fNOLWizard.fNOLWizardNext.click()
        console.log("On Step 2 of 5: Basic information screen")
        await fNOLWizard_New.fnolWizardNameDropdown.selectOptionByLabel(t.ctx.insuredName)
        await fNOLWizard.fNOLWizardNext.click()
        console.log("On Step 3 of 5: Add claim information screen")
        await fNOLWizard.fNOLWizard_NewLossDetailsPanelSetClaim_LossCause.selectOptionByLabel(world.dataMap.get('LossCause'))
        await fNOLWizard.fNOLWizardFullWizardStepSetFNOLWizard_NewLossDetailsScreenLossDetailsPanelFNOLWizard_NewLossDetailsPanelSetCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetCity.setValue(world.dataMap.get('City'))
        await fNOLWizard.fNOLWizardFullWizardStepSetFNOLWizard_NewLossDetailsScreenLossDetailsPanelFNOLWizard_NewLossDetailsPanelSetCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetState.click()
        await fNOLWizard.fNOLWizardFullWizardStepSetFNOLWizard_NewLossDetailsScreenLossDetailsPanelFNOLWizard_NewLossDetailsPanelSetCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetState.selectOptionByLabel(world.dataMap.get('State'))
        await fNOLWizard.fNOLWizardNext.click()
        console.log("On Step 4 of 5: Services screen")
        await fNOLWizard.fNOLWizardNext.click()
        console.log("On Step 5 of 5: Save and Assign Claim screen")
        await fNOLWizard.fNOLWizardFinish.click()
    }
 
    async readClaimNumber() {
        var header = await newClaimSaved_New.newClaimDVAssignedHeader.component.innerText;
        t.ctx.claimNo = splitFunction(header, " ", 1)
        console.log("The claim number is: " + t.ctx.claimNo)
    }
}