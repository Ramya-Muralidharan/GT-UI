import { Selector } from "testcafe";
import { AccountMenuActions } from "../../../../ui/pages/gw/generated/policysolutions/pages/navigation/menuActions/AccountMenuActions.js";
import { NextSubmissionWizard_Ext } from "./scenarioPages/navigation/submissionWizard/NextSubmissionWizard_Ext.js";
import { t } from "testcafe";
import { PolicyInfoScreen } from "../../../../ui/pages/gw/generated/policysolutions/pages/lOBWizardStepGroup/policyInfo/PolicyInfoScreen.js";
import { USAPersonalAuto_New } from "./scenarioPages/other/USAPersonalAuto_New.js";
import { NewAPDPolicyInvolvedPartyPopup } from "../../../pages/gw/generated/policysolutions/pages/popup/New/NewAPDPolicyInvolvedPartyPopup.js";
import { PolicyTabBar_Ext } from "./scenarioPages/navigation/tabBar/PolicyTabBar_Ext.js";
import { NewSubmission_Ext } from "./scenarioPages/policy/NewSubmission_Ext.js";
import { generateRandomStringFunction } from '../../../util/gw/helper'
import world from "../../../../ui/util/gw/world"

const accountMenuActions = new AccountMenuActions()
const nextSubmissionWizard_Ext = new NextSubmissionWizard_Ext()
const policyInfoScreen = new PolicyInfoScreen()
const usaPersonalAuto_New = new USAPersonalAuto_New()
const newAPDPolicyInvolvedPartyPopup = new NewAPDPolicyInvolvedPartyPopup()
const policyTabBar_Ext = new PolicyTabBar_Ext()
const newSubmission_Ext = new NewSubmission_Ext()

export class PolicySubmissionScenario {
  async selectProduct() {
    await accountMenuActions.accountFileAccountFileMenuActions.click()
    await accountMenuActions.accountFileMenuActions_CreateAccountFileMenuActions_NewSubmission.click()
    const usaPersonalAuto_New = Selector('td').withExactText('USA Personal Auto').parent().child('td:nth-child(1)')
    await t.click(usaPersonalAuto_New)
  }
  async clickNext() {
    await nextSubmissionWizard_Ext.submissionWizardNext.click()
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
    await newAPDPolicyInvolvedPartyPopup.NewAPDPolicyInvolvedPartyPopup_LinkAddressMenuMenuIcon.click()
    await t.hover(newAPDPolicyInvolvedPartyPopup.NewAPDPolicyInvolvedPartyPopup_Address)
      .click(newAPDPolicyInvolvedPartyPopup.NewAPDPolicyInvolvedPartyPopup_PrimaryAddress)
    await nextSubmissionWizard_Ext.ok_Button.click()
    console.log('Added Driver in Personal Vehicle screen')
    await nextSubmissionWizard_Ext.ok_Button.click()

  }

  async verifyQuote() {
    await t.wait(3000)
    let status = await nextSubmissionWizard_Ext.Quotedstatus.component.textContent
    console.log(status)
    await t.expect(status).eql('Submission (Quoted)')
  }
  async saveQuote() {
    let quotenum = await nextSubmissionWizard_Ext.Quotenumber.component.textContent
    console.log(quotenum, 'Submission is quoted successfully')
  }

  async bindPolicy() {
    await t.wait(2000)
    await nextSubmissionWizard_Ext.BindOptions.click()
    await nextSubmissionWizard_Ext.bindpolicy.click()
    console.log('clicked on bind policy')
  }
  async verifyIssue() {
    let status = await nextSubmissionWizard_Ext.issuestatus.component.textContent
    console.log(status)
    await t.expect(status).eql('Submission Bound')
  }
  async verifyBind() {
    let status = await nextSubmissionWizard_Ext.issuestatus.component.textContent
    console.log(status)
    await t.expect(status).eql('Submission Bound')
  }
  async viewSubmission() {
    await nextSubmissionWizard_Ext.viewsubmission.click()
    await t.wait(1000)
    await t.takeScreenshot()
  }
  async saveIssuedPolicy() {
    let policynum = await nextSubmissionWizard_Ext.policynumber.component.textContent
    console.log(policynum + 'New submission policy is created successfully')
  }
  async saveBindPolicy() {
    let policynum = await nextSubmissionWizard_Ext.policynumber.component.textContent
    console.log(policynum + 'New submission policy is created successfully')
  }

  async quoteSubmission() {
    await newSubmission_Ext.Quote_Btn.click()
    await t.wait(2000)
    let submissionNo = await newSubmission_Ext.SubmissionNo.textContent
    console.log("Submission number is: " + submissionNo)
    await newSubmission_Ext.BindOptions.click()
    await t.wait(2000)
    await newSubmission_Ext.Issue_Btn.click()
  }

  async initiateNewSubmissionPolicy() {
    console.log("On New Submissions screen")
    await policyTabBar_Ext.tabBarPolicyTab.click()
    await policyTabBar_Ext.policyTabPolicyTab_NewSubmission.click()
    await newSubmission_Ext.newSubmissionAccountNumber.setValue(t.ctx.AccountNumber)
    await newSubmission_Ext.accountSelectAccount.click()
    await newSubmission_Ext.productSelection_ComProperty_Btn.click()
    console.log("On Policy Info screen")
    await policyInfoScreen.accountInfoInputSetOrganizationType.selectOptionByLabel(world.dataMap.get('OrganizationType'))
    await t.wait(2000)
    await nextSubmissionWizard_Ext.submissionWizardNext.click()
  }

  async addCommercialPropertyLineCoverage(coverageName) {
    console.log("On GoCommercialPropertyLine screen")
    switch (coverageName) {
      case ('Outside Objects and Structures'):
        await newSubmission_Ext.propertyLineCov_OutsideObjectsandStructures.click()
        await newSubmission_Ext.propertyLineCov_OutsideObjectsandStructures_Limit.setValue(world.dataMap.get('OutsideObjectsAndStructuresLimit'))
        await newSubmission_Ext.propertyLineCov_OutsideObjectsandStructures_Deductible.setValue(world.dataMap.get('OutsideObjectsAndStructuresDeductible'))
        break;
      case ('Each loss caused by wind'):
        await newSubmission_Ext.propertyLineCov_Eachlosscausedbywind.click()
        await newSubmission_Ext.propertyLineCov_Eachlosscausedbywind_Limit.setValue(world.dataMap.get('EachLossCausedBywindLimit'))
        await newSubmission_Ext.propertyLineCov_Eachlosscausedbywind_Deductible.setValue(world.dataMap.get('EachLossCausedBywindDeductible'))
        break;
      case ('Contents of Other Structures'):
        await newSubmission_Ext.propertyLineCov_ContentsofotherStructures.click()
        await newSubmission_Ext.propertyLineCov_ContentsofotherStructures_Limit.selectOptionByLabel(world.dataMap.get('ContentsOfOtherStructuresLimit'))
        await newSubmission_Ext.propertyLineCov_ContentsofotherStructures_Deductible.setValue(world.dataMap.get('ContentsOfOtherStructuresDeductible'))
        break;
      default:
        await newSubmission_Ext.propertyLineCov_OutsideObjectsandStructures.click()
        await newSubmission_Ext.propertyLineCov_OutsideObjectsandStructures_Limit.setValue('100')
        await newSubmission_Ext.propertyLineCov_OutsideObjectsandStructures_Deductible.setValue('100')
        await newSubmission_Ext.propertyLineCov_Eachlosscausedbywind.click()
        await newSubmission_Ext.propertyLineCov_Eachlosscausedbywind_Limit.setValue('200')
        await newSubmission_Ext.propertyLineCov_Eachlosscausedbywind_Deductible.setValue('200')
        break;
    }
    await t.wait(1000)
  }

  async addCpBlanket(nthOption = 1) {
    await newSubmission_Ext.cpBlanket_AddButton.click()
    await newSubmission_Ext.cpBlanket_Location.selectNthOption(nthOption)
    await newSubmission_Ext.cpBlanket_OK_Btn.click()
    await nextSubmissionWizard_Ext.submissionWizardNext.click()
    await t.wait(2000)
  }

  async quote() {
    await t.wait(2000)
    await nextSubmissionWizard_Ext.quote_button.click()
  }

  async verifyQuote() {
    await t.wait(3000)
    let status = await nextSubmissionWizard_Ext.Quotedstatus.component.textContent
    console.log(status)
    await t.expect(status).eql('Submission (Quoted)')
  }

  async issuePolicy() {
    if (await nextSubmissionWizard_Ext.BindOptions_Sel.exists)
      await nextSubmissionWizard_Ext.BindOptions.click()
    await nextSubmissionWizard_Ext.issuepolicy.click()
    t.ctx.PolicyNumber = await newSubmission_Ext.policyNumber.component.textContent
    console.log("The newly created policy number is: " + t.ctx.PolicyNumber)
  }

  async policyRenewal() {
    await newSubmission_Ext.policyMenuAction_Renewal.click()
    await t.eval(() => location.reload(true))
    await newSubmission_Ext.editPolicyTransaction_Btn.click()
  }

  async polChangeQuoteIssue() {
    await newSubmission_Ext.Quote_Btn.click()
    await newSubmission_Ext.polChange_Issue_btn.click()
  }

  async logout() {
    await newSubmission_Ext.settings.click();
    await newSubmission_Ext.logout.click();
  }
}