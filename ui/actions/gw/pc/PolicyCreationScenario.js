import { Selector, t } from "testcafe";
import { NewSubmission } from "../../../pages/gw/generated/policysolutions/pages/policy/NewSubmission.js"
import { NewAccount } from "../../../pages/gw/generated/policysolutions/pages/account/NewAccount.js";
import { generateRandomStringFunction, dateFunction } from "../../../util/gw/helper"

const newSubmission = new NewSubmission()
const newAccount = new NewAccount()

export class PolicyCreationScenario {
  async policyCreationWC() {
    await newSubmission.PolicyDropDowmBtn.click()
    await newSubmission.newSubmission_Btn.click()
    await newSubmission.accountNumberSearch_TextInput.setValue('3569191993')
    await newSubmission.search_Btn.click()
    await newSubmission.organisationSearch_Btn.click()
    await newSubmission.organisationName_TextInput.setValue('a')
    await newSubmission.orgName_Search_Btn.click()
    await newSubmission.orgSelect_Btn.click()
    await newSubmission.producerCode_Dropdown.selectNthOption(1)
    await newSubmission.installedproductsTab.click()
    await newSubmission.productSelection_WC.click()

  }
  async clickNext() {
    await newSubmission.Next_Btn.click()
  }
  
  async addClassCodeWC() {
    await newSubmission.AddClassCode_Btn.click()
    await newSubmission.GoverningLaw_DropDown.selectNthOption(0)
    await newSubmission.location.selectNthOption(1)
    await newSubmission.ClassCode.setValue('0005')
    await newSubmission.Basis.setValue('1234')

  }
  async quoteSubmission() {
    await newSubmission.Quote_Btn.click()
    await t.wait(2000)
    let submissionNo = await newSubmission.SubmissionNo.textContent
    console.log("Submission number is: " +submissionNo)
    await newSubmission.BindOptions.click()
    await t.wait(2000)
    await newSubmission.Issue_Btn.click()
  }

  async accountCreation() {
    await newAccount.account_dropdown.click()
    await newAccount.acc_NewAccount.click()
    let randomCompanyName = generateRandomStringFunction(5)
    console.log("Company name is: " + randomCompanyName)
    await newAccount.company_Name.setValue('company' + randomCompanyName)
    await newAccount.acc_Search_btn.click()
    await newAccount.CreateNewAccount_Btn.click()
    await newAccount.newCompanyAccount_Btn.click()
    await newAccount.acc_State_Dropdown.selectOptionByLabel('Idaho')
    await newAccount.acc_zipcode_TxtBox.setValue('83814-5113')
    await newAccount.acc_AddressLine1_TxtBox.setValue('4700 S MOLSTEADS LN')
    await newAccount.acc_AddressType_Dropdown.selectOptionByLabel('Billing')
    await newSubmission.organisationSearch_Btn.click()
    await newSubmission.organisationName_TextInput.setValue('a')
    await newSubmission.orgName_Search_Btn.click()
    await newSubmission.orgSelect_Btn.click()
    await newSubmission.producerCode_Dropdown.selectNthOption(0)
    await t.wait(2000)
    await newAccount.accUpdate_Btn.click()
  }

  async newSubmissionComProperty() {
    await newSubmission.actions_Btn.click()
    await newSubmission.actionsNewSubmission_Btn.click()
    await newSubmission.productSelection_ComProperty_Btn.click()
    await newSubmission.organisationType_dropdown.selectNthOption(1)
    await t.wait(7000)
  }

  async comPropertyLine_cov() {
    await newSubmission.propertyLineCov_OutsideObjectsandStructures.click()
    await newSubmission.propertyLineCov_OutsideObjectsandStructures_Limit.setValue('1000')
    await newSubmission.propertyLineCov_OutsideObjectsandStructures_Deductible.setValue('250')
    await newSubmission.propertyLineCov_Eachlosscausedbywind.click()
    await newSubmission.propertyLineCov_Eachlosscausedbywind_Limit.setValue('2000')
    await newSubmission.propertyLineCov_Eachlosscausedbywind_Deductible.setValue('200')
    await newSubmission.propertyLineCov_ContentsofotherStructures.click()
    await newSubmission.propertyLineCov_ContentsofotherStructures_Limit.selectNthOption(1)
    await newSubmission.propertyLineCov_ContentsofotherStructures_Deductible.setValue('150')
    await newSubmission.propertyLineCov_Terrorism.click()
    await newSubmission.propertyLineCov_Fungus.click()
    await newSubmission.propertyLineCov_Fungus_Limit.setValue('800')
    await newSubmission.propertyLineCov_Exhibitions.click()
    await newSubmission.propertyLineCov_Exhibitions_Limit.selectNthOption(1)
    await t.wait(7000)
  }
  
  async cpBlanket() {
    await newSubmission.cpBlanket_AddButton.click()
    await newSubmission.cpBlanket_Location.selectNthOption(1)
    await newSubmission.cpBlanket_OK_Btn.click()
    await t.wait(7000)
  }
  async policyRenewal() {
    await newSubmission.policyMenuAction_Renewal.click()
    await t.eval(() => location.reload(true))
    await newSubmission.editPolicyTransaction_Btn.click()
  }
  async viewAndActions() {
    await t.click(newSubmission.policy_Hyperlink)
    await t.wait(2000)
    await newSubmission.policy_ActionsTab.click()
  }
  async renewalCovCp() {
    await newSubmission.propertyLineCov_FluctuationinRawMaterialValues.click()
    await newSubmission.propertyLineCov_FluctuationinRawMaterialValues_Limit.selectNthOption(1)
    await newSubmission.propertyLineCov_FursJewelleryWatchesandPreciousStones.click()
    await newSubmission.propertyLineCov_FursJewelleryWatchesandPreciousStones_Limit.selectNthOption(1)
  }
  async policyCancel() {
    await newSubmission.actionsCancel_Btn.click()
    await newSubmission.cancel_Source_Drpdwn.selectNthOption(1)
    await newSubmission.cancel_Reason_Drpdwn.selectNthOption(1)
    await newSubmission.cancel_StartCancellation_Btn.click()
    await newSubmission.BindOptions.click()
    await t.wait(2000)
    await newSubmission.Issue_Btn.click()
  }

  async policyRewrite() {
    await newSubmission.ActionsRewriteFullTerm_Btn.click()
    await this.clickNext()
    await newSubmission.propertyLineCov_ElectronicCommerceLossOfDataCoverage.click()
    await newSubmission.propertyLineCov_ElectronicCommerceLossOfDataCoverage_Limit.setValue('300')
    await newSubmission.propertyLineCov_DebrisRemoval.click()
    await newSubmission.propertyLineCov_DebrisRemoval_OtherPropertyLimit.selectNthOption(1)
    await newSubmission.propertyLineCov_DebrisRemoval_Property.selectNthOption(1)
    await newSubmission.propertyLineCov_DebrisRemoval_InsuredPropertyLimit.selectNthOption(1)
    await newSubmission.propertyLineCov_DefferedPayments.click()
    await newSubmission.propertyLineCov_DefferedPayments_Limit.selectNthOption(1)
    await newSubmission.propertyLineCov_ElecEquipBrDwnElecRestCost.click()
  }

  async rewriteQuoteIssue() {
    await newSubmission.Quote_Btn.click()
    await newSubmission.bindRewrite_Btn.click()
  }

  async newSubmissionComUmbrella() {
    await newSubmission.actions_Btn.click()
    await newSubmission.actionsNewSubmission_Btn.click()
    await newSubmission.productSelection_ComUmbrella_Btn.click()
    await newSubmission.organisationType_dropdown.selectNthOption(1)
  }

  async comUmbAndExcessLiability() {
    await newSubmission.umbrellaLiability_ExcessLiability.selectNthOption(1)
    await newSubmission.umbrellaCoverages_Tab.click()
    await newSubmission.umbrellaLiability_OccurenceLimt.selectNthOption(1)
    await newSubmission.umbrellaLiability_AggregateLimt.selectNthOption(1)
    await newSubmission.umbrellaLiability_PrdCompletedAggLimt.selectNthOption(1)
    await newSubmission.umbrellaLiability_CovForm.selectNthOption(1)
    await newSubmission.umbrellaLiability_SelfInsuredRetension.selectNthOption(1)
  }

  async comUmbAndExcessLiability_AddCov() {
    await newSubmission.umbrellaAddCov_Tab.click()
    await newSubmission.umbrellaAddCov_CollegesOrScls.click()
    await newSubmission.umbrellaAddCov_ContractualLiability.click()
    await newSubmission.umbrellaAddCov_ContractualLiability_Railroads.click()
    await newSubmission.umbrellaAddCov_ContractualLiability_ScheduledRailroads.setValue('abc')
    await newSubmission.umbrellaAddCov_ContractualLiability_DesignatedJobSite.setValue('xyz')
  }

  async comUmbAndExcessLiability_UnderlyPol() {
    await newSubmission.Umbrlla_UnderlyingPolicy_Tab.click()
    await newSubmission.Umbrlla_UnderlyingPolicy_Add.click()
    await newSubmission.Umbrlla_UnderlyingPolicy_PolNO.setValue('23451')
    await newSubmission.Umbrlla_UnderlyingPolicy_PolType.selectNthOption(2)
    await newSubmission.Umbrlla_UnderlyingPolicy_PolLim.setValue('22000')
    await newSubmission.Umbrlla_UnderlyingPolicy_PolDed.setValue('500')
    await newSubmission.Umbrlla_UnderlyingPolicy_PolDedType.selectNthOption(1)
    await newSubmission.Umbrlla_UnderlyingPolicy_PolEffDate.setValue(dateFunction('+0'))
    await newSubmission.Umbrlla_UnderlyingPolicy_PolExpDate.setValue(dateFunction('+366'))
    await newSubmission.Umbrlla_UnderlyingPolicy_PolPremium.setValue('2500')
  }

  async comUmbAndExcessLiability_PolicyChange() {
    await newSubmission.actionsPolChange_Btn.click()
    await newSubmission.polChange_NxtBtn.click()
    await this.clickNext()
    await newSubmission.umbrellaAddCov_Tab.click()
    await newSubmission.umbrellaAddCov_AgrCul_Producer_Trailer.click()
    await newSubmission.umbrellaAddCov_ExtReportAcc.click()
    await newSubmission.umbrellaAddCov_ExtReportAcc_Date.setValue(dateFunction('+0'))
    await newSubmission.umbrellaAddCov_ExtReportAcc_Loc.setValue('Idaho')
    await newSubmission.umbrellaAddCov_ExtReportAcc_Desc.setValue('Test')
    await newSubmission.umbrellaAddCov_ExtReportAcc_WorkDesc.setValue('Testing')
    await newSubmission.umbrellaAddCov_AmendTerritory.click()
    await newSubmission.umbrellaAddCov_AmendTerritory_SpciExcCountry.setValue('pqr')
    await newSubmission.umbrellaaddCov_BroadBI.click()
  }

  async polChangeQuoteIssue() {
    await newSubmission.Quote_Btn.click()
    await newSubmission.polChange_Issue_btn.click()
  }
}
