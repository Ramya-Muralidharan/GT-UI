import { t } from "testcafe";
import { PolicyMenuActions } from "../../../../ui/pages/gw/generated/policysolutions/pages/navigation/menuActions/PolicyMenuActions.js"
import { NavigationScenario } from "./NavigationScenario.js";
import { Renewal_New } from "./scenarioPages/renewalWizard/Renewal_New.js";
import { RenewalWizard_RenewalPopup } from "../../../pages/gw/generated/policysolutions/pages/popup/Renewal/RenewalWizard_RenewalPopup.js";
import { JobComplete_New } from "./scenarioPages/other/jobComplete_New.js";
import { NewSubmission_Ext } from "./scenarioPages/policy/NewSubmission_Ext.js";
import { LOBWizardStepGroupSubmissionWizard_Ext } from "./scenarioPages/navigation/submissionWizard/LOBWizardStepGroupSubmissionWizard_Ext.js";
import world from "../../../../ui/util/gw/world"

const policyMenuActions = new PolicyMenuActions()
const navigationScenario = new NavigationScenario()
const renewal_New = new Renewal_New()
const renewalWizard_RenewalPopup = new RenewalWizard_RenewalPopup()
const jobComplete_New = new JobComplete_New()
const newSubmission_Ext = new NewSubmission_Ext()
const lOBWizardStepGroupSubmissionWizard_Ext = new LOBWizardStepGroupSubmissionWizard_Ext()

export class RenewalScenario {

    async initiatePolicyRenewal() {
        await policyMenuActions.policyFilePolicyFileMenuActions.click()
        await policyMenuActions.policyFileMenuActions_NewWorkOrderPolicyFileMenuActions_RenewPolicy.click()
        await t.eval(() => location.reload(true))
    }

    async editPolicyTransaction() {
        await renewal_New.RenewalWizard_EditPolicyTransaction.click()
        await navigationScenario.renewalNext()
    }

    async clickRenew() {
        await renewal_New.RenewalWizard_BindOptions.click()
        await renewal_New.RenewalWizard_Renew.click()
    }

    async renewalQuote() {
        await renewal_New.RenewalWizard_Quote.click()
    }

    async selectRenewalCode() {
        await renewalWizard_RenewalPopup.renewalWizard_RenewalScreenRenewalCode.selectOptionByLabel(world.dataMap.get('RenewalCode'))
        await renewalWizard_RenewalPopup.renewalWizard_RenewalScreenUpdate.click()
    }

    async verifyRenewal() {
        await t.expect(jobComplete_New.jobComplete_Title.component.innerText).eql("Renewal Renewing")
        console.log("Renewal is Successful")
    }

    async renewalAddCommercialPropertyLineCoverage(coverageName) {
        console.log("On GoCommercialPropertyLine screen")
        switch (coverageName) {
          case ('Outside Objects and Structures'):
            await lOBWizardStepGroupSubmissionWizard_Ext.renewal_OutsideObjectsandStructures.click()
            await lOBWizardStepGroupSubmissionWizard_Ext.renewal_OutsideObjectsandStructures_Limit.setValue(world.dataMap.get('OutsideObjectsAndStructuresLimit'))
            await lOBWizardStepGroupSubmissionWizard_Ext.renewal_OutsideObjectsandStructures_Deductible.setValue(world.dataMap.get('OutsideObjectsAndStructuresDeductible'))
            break;
          case ('Each loss caused by wind'):
            await lOBWizardStepGroupSubmissionWizard_Ext.renewal_EachLossCausedByWind.click()
            await lOBWizardStepGroupSubmissionWizard_Ext.renewal_EachLossCausedByWind_Limit.setValue(world.dataMap.get('EachLossCausedBywindLimit'))
            await lOBWizardStepGroupSubmissionWizard_Ext.renewal_EachLossCausedByWind_Deductible.setValue(world.dataMap.get('EachLossCausedBywindDeductible'))
            break;
          case ('Terrorism'):
            await lOBWizardStepGroupSubmissionWizard_Ext.renewal_Terrorism.click()
            break;
          default:
            await lOBWizardStepGroupSubmissionWizard_Ext.renewal_OutsideObjectsandStructures.click()
            await lOBWizardStepGroupSubmissionWizard_Ext.renewal_OutsideObjectsandStructures_Limit.setValue('100')
            await lOBWizardStepGroupSubmissionWizard_Ext.renewal_OutsideObjectsandStructures_Deductible.setValue('100')
            await lOBWizardStepGroupSubmissionWizard_Ext.renewal_EachLossCausedByWind.click()
            await lOBWizardStepGroupSubmissionWizard_Ext.renewal_EachLossCausedByWind_Limit.setValue('200')
            await lOBWizardStepGroupSubmissionWizard_Ext.renewal_EachLossCausedByWind_Deductible.setValue('200')
            break;
        }
        await t.wait(1000)
      }

}