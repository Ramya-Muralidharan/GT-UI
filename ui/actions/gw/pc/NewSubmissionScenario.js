import { Selector } from "testcafe";
import { NextSubmissionWizard_Ext } from "./scenarioPages/navigation/submissionWizard/NextSubmissionWizard_Ext.js";
import { t } from "testcafe";
import { PolicyInfoScreen } from "../../../pages/gw/generated/policysolutions/pages/lOBWizardStepGroup/policyInfo/PolicyInfoScreen.js";
import { USAPersonalAuto_New } from "./scenarioPages/other/USAPersonalAuto_New.js";
import { NewAPDPolicyInvolvedPartyPopup } from "../../../pages/gw/generated/policysolutions/pages/popup/New/NewAPDPolicyInvolvedPartyPopup.js";
import { NewSubmission_Ext } from "./scenarioPages/policy/NewSubmission_Ext.js";
import { generateRandomStringFunction } from '../../../util/gw/helper'
import { LOBWizardStepGroupSubmissionWizard_Ext } from "./scenarioPages/navigation/submissionWizard/LOBWizardStepGroupSubmissionWizard_Ext"
import { CLLCpBlanketPopup_New } from "./scenarioPages/navigation/submissionWizard/CLLCpBlanketPopup_New"
import { SubmissionWizard_New } from "./scenarioPages/navigation/submissionWizard/SubmissionWizard_New"
import { JobWizardInfoBarSubmissionWizard_Ext } from "./scenarioPages/navigation/submissionWizard/JobWizardInfoBarSubmissionWizard_Ext";
import world from "../../../util/gw/world"


const nextSubmissionWizard_Ext = new NextSubmissionWizard_Ext()
const policyInfoScreen = new PolicyInfoScreen()
const usaPersonalAuto_New = new USAPersonalAuto_New()
const newAPDPolicyInvolvedPartyPopup = new NewAPDPolicyInvolvedPartyPopup()
const newSubmission_Ext = new NewSubmission_Ext()
const lOBWizardStepGroupSubmissionWizard_Ext = new LOBWizardStepGroupSubmissionWizard_Ext()
const cLLCpBlanketPopup_New = new CLLCpBlanketPopup_New()
const submissionWizard_New = new SubmissionWizard_New()
const jobWizardInfoBarSubmissionWizard_Ext = new JobWizardInfoBarSubmissionWizard_Ext()

export class NewSubmissionScenario {
  async selectProduct() {
    await t.click(Selector('td').withExactText(world.dataMap.get('ProductName')).parent().child('td:nth-child(1)'))
  }
  async clickNext() {
    await nextSubmissionWizard_Ext.submissionWizardNext.click()
  }

  async policyInfo() {
    console.log("On Policy Info screen")
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
    t.ctx.QuoteNumber = await submissionWizard_New.submissionWizard_QuoteNumber.component.textContent
    console.log(t.ctx.QuoteNumber, 'Submission is quoted successfully')
  }

  async bindPolicy() {
    await t.wait(2000)
    await submissionWizard_New.submissionWizard_Bind.click()
    await t.setNativeDialogHandler(() => true);
    await submissionWizard_New.submissionWizard_BindOptions.click()
  }
  async verifyIssue() {
    const status = await jobWizardInfoBarSubmissionWizard_Ext.jobWizardInfoBar_IssueStatus.component.textContent
    console.log(status)
    await t.expect(status).eql('Submission Bound')
  }

  async viewSubmission() {
    await jobWizardInfoBarSubmissionWizard_Ext.jobWizardInfoBar_Viewsubmission.click()
    await t.wait(1000)
    await t.takeScreenshot()
  }

  async initiateNewSubmissionPolicy() {
    console.log("On New Submissions screen")
    await newSubmission_Ext.newSubmissionAccountNumber.setValue(t.ctx.AccountNumber)
    await newSubmission_Ext.accountSelectAccount.click()
  }

  async addCpBlanket(nthOption = 1) {
    await submissionWizard_New.submissionWizard_AddCPBlanket.click()
    await cLLCpBlanketPopup_New.CLLCpBlanketPopup_Location.selectNthOption(nthOption)
    await cLLCpBlanketPopup_New.CLLCpBlanketPopup_ok.click()
    await nextSubmissionWizard_Ext.submissionWizardNext.click()
    await t.wait(2000)
  }

  async quote() {
    await t.wait(2000)
    await submissionWizard_New.submissionWizard_Quote.click()
  }

  async verifyQuote() {
    await t.wait(2000)
    const status = await submissionWizard_New.submissionWizard_QuoteStatus.component.textContent
    console.log(status)
    await t.expect(status).eql('Submission (Quoted)')
  }

  async issuePolicy() {
    if (await submissionWizard_New.submissionWizard_Bind.component.exists)
      await submissionWizard_New.submissionWizard_Bind.click()
    await t.setNativeDialogHandler(() => true);
    await submissionWizard_New.submissionWizard_IssuePolicy.click()
    t.ctx.PolicyNumber = await jobWizardInfoBarSubmissionWizard_Ext.jobWizardInfoBar_PolicyNumber.component.textContent
    console.log("The newly created policy number is: " + t.ctx.PolicyNumber)
  }

  async policyRenewal() {
    await newSubmission_Ext.policyMenuAction_Renewal.click()
    await t.eval(() => location.reload(true))
    await newSubmission_Ext.editPolicyTransaction_Btn.click()
  }

  async gWHomeownersLine(section) {
    switch (section) {
      case ('AdditionalCoverges'):
        await submissionWizard_New.submissionWizardAdditionalCoverage.click()
        break;
      case ('SectionIICoverages'):
        await submissionWizard_New.submissionWizardSectionIICoverages.click()
        break;
      case ('Optional Coverages'):
        await submissionWizard_New.submissionWizardOptionalCoverages.click()
        break;
      case ('Exclusions&Conditions'):
        await submissionWizard_New.submissionWizardExclusionsConditions.click()
        break;
      default:
        await submissionWizard_New.submissionWizardGWHomeownersLine.click()
    }
  }

  async gWHomeownersLineScreen() {
    await submissionWizard_New.submissionWizardRefusalType.selectOptionByLabel(world.dataMap.get('RefusalType'))
  }
  
  async commercialUmbrellaAccessliability() {
    console.log("On Commercial Umbrella And Excess Liability screen")
    await lOBWizardStepGroupSubmissionWizard_Ext.submissionWizardUmbrellaLiability.selectOptionByLabel(world.dataMap.get('UmbrellaLiability'))
    await lOBWizardStepGroupSubmissionWizard_Ext.submissionWizardUmbrellaCoverages.click()
  }

  async smallBusinessLineCoverages() {
    console.log("On Small Business screen")
    await lOBWizardStepGroupSubmissionWizard_Ext.submissionWizardBusinessType.selectOptionByLabel(world.dataMap.get('BusinessType'))
    await lOBWizardStepGroupSubmissionWizard_Ext.submissionWizardSmallBusinessLineCoverages.click()
    await lOBWizardStepGroupSubmissionWizard_Ext.submissionWizardGeneralLiability.click()
    await lOBWizardStepGroupSubmissionWizard_Ext.submissionWizardGeneralLiabilityOccurrenecLimit.selectOptionByLabel(world.dataMap.get('GeneralLiabilityOccurrenecLimit'))
  }
}