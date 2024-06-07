import { PcfTextInput, PcfComponent, PcfButton, PcfSelectInput } from '@gtui/gt-ui-framework';
import { NewSubmission } from '../../../../../pages/gw/generated/policysolutions/pages/policy/NewSubmission'

export class NewSubmission_Ext extends NewSubmission {
    newSubmissionAccountNumber = PcfTextInput('#NewSubmission-NewSubmissionScreen-SelectAccountAndProducerDV-Account');
    policyNumber = PcfComponent("#JobComplete-JobWizardInfoBar-PolicyNumber >div:nth-child(2)")
    newSubmission_GoCommercialPropertySelect = PcfButton('#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV-1-addSubmission')
    // propertyLineCov_FluctuationinRawMaterialValues = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-CLLWizardStepGroup-CLLCPLTypeName1Screen-CLLCPLTypeName1PanelSet-SupplementalCovCovPatterns-CoverageCategoryInputSet-2-CoverageInputSet-CovPatternInputGroup-_checkbox")
    // propertyLineCov_FluctuationinRawMaterialValues_Limit = PcfSelectInput("[aria-label='Fluctuation in Raw Material Values'] [name*='CovPatternInputGroup-0-CovTermInputSet-OptionTermInput']")
    // propertyLineCov_FursJewelleryWatchesandPreciousStones = PcfButton("[aria-label='Furs, Jewellery, Watches and Precious Stones'] [id$='checkbox']")
    // propertyLineCov_FursJewelleryWatchesandPreciousStones_Limit = PcfSelectInput("[aria-label='Furs, Jewellery, Watches and Precious Stones'] [name*='CovPatternInputGroup-0-CovTermInputSet-OptionTermInput']")
}