import { Selector } from "testcafe";
import { AccountMenuActions } from "../../../../ui/pages/gw/generated/policysolutions/pages/navigation/menuActions/AccountMenuActions.js";
import { NextSubmissionWizard } from "../../../../ui/pages/gw/generated/policysolutions/pages/navigation/submissionWizard/NextSubmissionWizard.js";
import { NextSubmissionWizard_New } from "./scenarioPages/navigation/submissionWizard/NextSubmissionWizard_New.js";
import { t } from "testcafe";
import { PolicyInfoScreen } from "../../../../ui/pages/gw/generated/policysolutions/pages/lOBWizardStepGroup/policyInfo/PolicyInfoScreen.js";
import { USAPersonalAuto_New } from "./scenarioPages/other/USAPersonalAuto_New.js";
import { NewAPDPolicyInvolvedPartyPopup } from "../../../../ui/pages/gw/generated/policysolutions/pages/popup/New/NewAPDPolicyInvolvedPartyPopup.js";
import { NewAPDPolicyInvolvedPartyPopup_New } from "./scenarioPages/popup/New/NewAPDPolicyInvolvedPartyPopup_New.js";
import { PolicyTabBar } from "../../../../ui/pages/gw/generated/policysolutions/pages/navigation/tabBar/PolicyTabBar.js";
import { NewSubmission } from "../../../pages/gw/generated/policysolutions/pages/policy/NewSubmission.js"
import { PolicyTabBar_New } from "./scenarioPages/navigation/tabBar/PolicyTabBar_New.js";
import { NewSubmission_New } from "./scenarioPages/policy/NewSubmission_New.js";
import { generateRandomStringFunction } from '../../../util/gw/helper'
import world from "../../../../ui/util/gw/world"

const accountMenuActions = new AccountMenuActions()
const nextSubmissionWizard = new NextSubmissionWizard()
const nextSubmissionWizard_New = new NextSubmissionWizard_New()
const policyInfoScreen = new PolicyInfoScreen()
const usaPersonalAuto_New = new USAPersonalAuto_New()
const newAPDPolicyInvolvedPartyPopup = new NewAPDPolicyInvolvedPartyPopup()
const newAPDPolicyInvolvedPartyPopup_New = new NewAPDPolicyInvolvedPartyPopup_New()
const policyTabBar = new PolicyTabBar()
const newSubmission = new NewSubmission()
const policyTabBar_New = new PolicyTabBar_New()
const newSubmission_New = new NewSubmission_New()

export class PolicySubmissionScenario {
  async selectProduct() {
    await accountMenuActions.accountFileAccountFileMenuActions.click()
    await accountMenuActions.accountFileMenuActions_CreateAccountFileMenuActions_NewSubmission.click()
    const usaPersonalAuto_New = Selector('td').withExactText('USA Personal Auto').parent().child('td:nth-child(1)')
    await t.click(usaPersonalAuto_New)
  }
  async clickNext() {
    await nextSubmissionWizard.submissionWizardNext.click()
  }
  async navigateToScreen(Screenname) {
    await t.click(Selector(`[aria-label="${Screenname}"]`))
  }
  async policyInfo() {
    await policyInfoScreen.accountInfoInputSetOrganizationType.selectOptionByLabel(world.dataMap.get('OrganizationType'))

  }
  async usaPersonalAuto_PersonalAutoStandardCoverages() {
    await usaPersonalAuto_New.SubmissionWizard_LineStandardCoveragesTab.click()
    await t.click(Selector('div').withExactText('Liability - Bodily Injury and Property Damage').parent().find('[role="checkbox"]'))
    await usaPersonalAuto_New.SubmissionWizard_AutoLiabilityPackage.selectOptionByLabel(world.dataMap.get('AutoLiabilityPackage'))
    console.log('Liability - Bodily Injury and Property Damage Standard coverage is added')
  }
  async personalVehicle() {
    await usaPersonalAuto_New.SubmissionWizard_AddPersonalVehicle.click()
    console.log('Adding Personal Vehicle')
    await usaPersonalAuto_New.UALPersonalVehiclePopup_BodyType.selectOptionByLabel(world.dataMap.get('BodyType'))
    await usaPersonalAuto_New.UALPersonalVehiclePopup_VIN.setValue(world.dataMap.get('VIN'))
    await usaPersonalAuto_New.UALPersonalVehiclePopup_Year.setValue(world.dataMap.get('Year'))
    await usaPersonalAuto_New.UALPersonalVehiclePopup_Make.setValue(world.dataMap.get('Make'))
    await usaPersonalAuto_New.UALPersonalVehiclePopup_Model.setValue(world.dataMap.get('Model'))
    await usaPersonalAuto_New.UALPersonalVehiclePopup_LicenseState.selectOptionByLabel(world.dataMap.get('LicenseState'))
  }
  async vehicleDriver() {
    await usaPersonalAuto_New.UALPersonalVehiclePopup_VehicleDriverExposureCardTab.click()
    await usaPersonalAuto_New.UALPersonalVehiclePopup_AddDriver.click()
    await usaPersonalAuto_New.UALPersonalVehiclePopup_PolicyDriverMenuIcon.click()
    await usaPersonalAuto_New.UALPersonalVehiclePopup_NewPerson.click()
    await newAPDPolicyInvolvedPartyPopup.newAPDPolicyInvolvedPartyPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetGlobalPersonNameInputSetFirstName.setValue(generateRandomStringFunction(5))
    await newAPDPolicyInvolvedPartyPopup.newAPDPolicyInvolvedPartyPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetGlobalPersonNameInputSetLastName.setValue(generateRandomStringFunction(5))
    await newAPDPolicyInvolvedPartyPopup_New.NewAPDPolicyInvolvedPartyPopup_LinkAddressMenuMenuIcon.click()
    await t.hover(newAPDPolicyInvolvedPartyPopup_New.NewAPDPolicyInvolvedPartyPopup_Address)
      .click(newAPDPolicyInvolvedPartyPopup_New.NewAPDPolicyInvolvedPartyPopup_PrimaryAddress)
    await nextSubmissionWizard_New.ok_Button.click()
    console.log('Added Driver in Personal Vehicle screen')
    await nextSubmissionWizard_New.ok_Button.click()

  }

  async verifyQuote() {
    await t.wait(3000)
    let status = await nextSubmissionWizard_New.Quotedstatus.component.textContent
    console.log(status)
    await t.expect(status).eql('Submission (Quoted)')
  }
  async saveQuote() {
    let quotenum = await nextSubmissionWizard_New.Quotenumber.component.textContent
    console.log(quotenum, 'Submission is quoted successfully')
  }

  async bindPolicy() {
    await t.wait(2000)
    await nextSubmissionWizard_New.BindOptions.click()
    await nextSubmissionWizard_New.bindpolicy.click()
    console.log('clicked on bind policy')
  }
  async verifyIssue() {
    let status = await nextSubmissionWizard_New.issuestatus.component.textContent
    console.log(status)
    await t.expect(status).eql('Submission Bound')
  }
  async verifyBind() {
    let status = await nextSubmissionWizard_New.issuestatus.component.textContent
    console.log(status)
    await t.expect(status).eql('Submission Bound')
  }
  async viewSubmission() {
    await nextSubmissionWizard_New.viewsubmission.click()
    await t.wait(1000)
    await t.takeScreenshot()
  }
  async saveIssuedPolicy() {
    let policynum = await nextSubmissionWizard_New.policynumber.component.textContent
    console.log(policynum + 'New submission policy is created successfully')
  }
  async saveBindPolicy() {
    let policynum = await nextSubmissionWizard_New.policynumber.component.textContent
    console.log(policynum + 'New submission policy is created successfully')
  }

  async quoteSubmission() {
    await newSubmission.Quote_Btn.click()
    await t.wait(2000)
    let submissionNo = await newSubmission.SubmissionNo.textContent
    console.log("Submission number is: " + submissionNo)
    await newSubmission.BindOptions.click()
    await t.wait(2000)
    await newSubmission.Issue_Btn.click()
  }

  async initiateNewSubmissionPolicy() {
    console.log("On New Submissions screen")
    await policyTabBar_New.tabBarPolicyTab.click()
    await policyTabBar.policyTabPolicyTab_NewSubmission.click()
    await newSubmission_New.newSubmissionAccountNumber.setValue(t.ctx.AccountNumber)
    await newSubmission.accountSelectAccount.click()
    await newSubmission_New.productSelection_ComProperty_Btn.click()
    console.log("On Policy Info screen")
    await policyInfoScreen.accountInfoInputSetOrganizationType.selectOptionByLabel(world.dataMap.get('OrganizationType'))
    await t.wait(2000)
    await nextSubmissionWizard.submissionWizardNext.click()
  }

  async addCommercialPropertyLineCoverage(coverageName) {
    console.log("On GoCommercialPropertyLine screen")
    switch (coverageName) {
      case ('Outside Objects and Structures'):
        await newSubmission_New.propertyLineCov_OutsideObjectsandStructures.click()
        await newSubmission_New.propertyLineCov_OutsideObjectsandStructures_Limit.setValue(world.dataMap.get('OutsideObjectsAndStructuresLimit'))
        await newSubmission_New.propertyLineCov_OutsideObjectsandStructures_Deductible.setValue(world.dataMap.get('OutsideObjectsAndStructuresDeductible'))
        break;
      case ('Each loss caused by wind'):
        await newSubmission_New.propertyLineCov_Eachlosscausedbywind.click()
        await newSubmission_New.propertyLineCov_Eachlosscausedbywind_Limit.setValue(world.dataMap.get('EachLossCausedBywindLimit'))
        await newSubmission_New.propertyLineCov_Eachlosscausedbywind_Deductible.setValue(world.dataMap.get('EachLossCausedBywindDeductible'))
        break;
      case ('Contents of Other Structures'):
        await newSubmission_New.propertyLineCov_ContentsofotherStructures.click()
        await newSubmission_New.propertyLineCov_ContentsofotherStructures_Limit.selectOptionByLabel(world.dataMap.get('ContentsOfOtherStructuresLimit'))
        await newSubmission_New.propertyLineCov_ContentsofotherStructures_Deductible.setValue(world.dataMap.get('ContentsOfOtherStructuresDeductible'))
        break;
      default:
        await newSubmission_New.propertyLineCov_OutsideObjectsandStructures.click()
        await newSubmission_New.propertyLineCov_OutsideObjectsandStructures_Limit.setValue('100')
        await newSubmission_New.propertyLineCov_OutsideObjectsandStructures_Deductible.setValue('100')
        await newSubmission_New.propertyLineCov_Eachlosscausedbywind.click()
        await newSubmission_New.propertyLineCov_Eachlosscausedbywind_Limit.setValue('200')
        await newSubmission_New.propertyLineCov_Eachlosscausedbywind_Deductible.setValue('200')
        break;
    }
    await t.wait(1000)
  }

  async addCpBlanket(nthOption = 1) {
    await newSubmission_New.cpBlanket_AddButton.click()
    await newSubmission_New.cpBlanket_Location.selectNthOption(nthOption)
    await newSubmission_New.cpBlanket_OK_Btn.click()
    await nextSubmissionWizard.submissionWizardNext.click()
    await t.wait(2000)
  }
  
  async quote() {
    await t.wait(2000)
    await nextSubmissionWizard_New.quote_button.click()
  }

  async verifyQuote() {
    await t.wait(3000)
    let status = await nextSubmissionWizard_New.Quotedstatus.component.textContent
    console.log(status)
    await t.expect(status).eql('Submission (Quoted)')
  }

  async issuePolicy() {
    if (await nextSubmissionWizard_New.BindOptions_Sel.exists)
      await nextSubmissionWizard_New.BindOptions.click()
    await nextSubmissionWizard_New.issuepolicy.click()
    t.ctx.PolicyNumber = await newSubmission_New.policyNumber.component.textContent
    console.log("The newly created policy number is: " + t.ctx.PolicyNumber)
  }

  async policyRenewal() {
    await newSubmission.policyMenuAction_Renewal.click()
    await t.eval(() => location.reload(true))
    await newSubmission.editPolicyTransaction_Btn.click()
  }

  async renewalCovCp() {
    await newSubmission.propertyLineCov_FluctuationinRawMaterialValues.click()
    await newSubmission.propertyLineCov_FluctuationinRawMaterialValues_Limit.selectNthOption(1)
    await newSubmission.propertyLineCov_FursJewelleryWatchesandPreciousStones.click()
    await newSubmission.propertyLineCov_FursJewelleryWatchesandPreciousStones_Limit.selectNthOption(1)
  }

  async polChangeQuoteIssue() {
    await newSubmission.Quote_Btn.click()
    await newSubmission.polChange_Issue_btn.click()
  }

  async logout() {
    await newSubmission_New.settings.click();
    await newSubmission_New.logout.click();
  }
}