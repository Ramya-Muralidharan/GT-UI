import { PcfTextInput, PcfComponent, PcfButton, PcfSelectInput} from '@gtui/gt-ui-framework';
import { NewSubmission} from '../../../../../pages/gw/generated/policysolutions/pages/policy/NewSubmission'

export class NewSubmission_Ext extends NewSubmission{
	newSubmissionAccountNumber = PcfTextInput('#NewSubmission-NewSubmissionScreen-SelectAccountAndProducerDV-Account');
	policyNumber = PcfComponent("#JobComplete-JobWizardInfoBar-PolicyNumber >div:nth-child(2)")
	propertyLineCov_PropertyOffPremises = PcfButton("[aria-label='Property Off Premises'] [id$='checkbox']")
    propertyLineCov_OutsideObjectsandStructures = PcfButton("[aria-label='Outside Objects and Structures'] [id$='checkbox']")
    propertyLineCov_OutsideObjectsandStructures_Limit = PcfTextInput("[aria-label='Outside Objects and Structures'] [id$='CovPatternInputGroup-0-CovTermInputSet-CovTermDirectInputSet-DirectTermInput']")
    propertyLineCov_OutsideObjectsandStructures_Deductible = PcfTextInput("[aria-label='Outside Objects and Structures'] [id$='CovPatternInputGroup-1-CovTermInputSet-CovTermDirectInputSet-DirectTermInput']")
    propertyLineCov_Eachlosscausedbywind = PcfButton("[aria-label='Each loss caused by wind'] [id$='checkbox']")
    propertyLineCov_Eachlosscausedbywind_Limit = PcfTextInput("[aria-label='Each loss caused by wind'] [id$='CovPatternInputGroup-0-CovTermInputSet-CovTermDirectInputSet-DirectTermInput']")
    propertyLineCov_Eachlosscausedbywind_Deductible = PcfTextInput("[aria-label='Each loss caused by wind'] [id$='CovPatternInputGroup-1-CovTermInputSet-CovTermDirectInputSet-DirectTermInput']")
    propertyLineCov_ContentsofotherStructures = PcfButton("[aria-label='Contents of Other Structures'] [id$='checkbox']")
    propertyLineCov_ContentsofotherStructures_Limit = PcfSelectInput("[aria-label='Contents of Other Structures'] [name*='CovPatternInputGroup-0-CovTermInputSet-OptionTermInput']")
    propertyLineCov_ContentsofotherStructures_Deductible = PcfTextInput("[aria-label='Contents of Other Structures'] [id$='CovPatternInputGroup-1-CovTermInputSet-CovTermDirectInputSet-DirectTermInput']")
    productSelection_ComProperty_Btn = PcfButton("[id$='ProductSelectionLV-1-addSubmission']")
    organisationType_dropdown = PcfSelectInput("[id$='OrganizationType']")
    cpBlanket_AddButton = PcfButton("[id$='AddCpBlanket']")
    cpBlanket_Location = PcfSelectInput("[id$='BlanketLocation']")
    cpBlanket_OK_Btn = PcfButton("[id$='Update']")
    policyMenuAction_Renewal = PcfButton("[id$='PolicyFileMenuActions_RenewPolicy']")
    editPolicyTransaction_Btn= PcfButton("[id$='EditPolicyWorkflow']")
}