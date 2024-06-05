import { PcfTextInput, PcfComponent, PcfButton, PcfSelectInput } from '@gtui/gt-ui-framework';
import { NewSubmission } from '../../../../../pages/gw/generated/policysolutions/pages/policy/NewSubmission'

export class NewSubmission_Ext extends NewSubmission {
    newSubmissionAccountNumber = PcfTextInput('#NewSubmission-NewSubmissionScreen-SelectAccountAndProducerDV-Account');
    policyNumber = PcfComponent("#JobComplete-JobWizardInfoBar-PolicyNumber >div:nth-child(2)")
    propertyLineCov_FluctuationinRawMaterialValues = PcfButton("[aria-label='Fluctuation in Raw Material Values'] [id$='checkbox']")
    propertyLineCov_FluctuationinRawMaterialValues_Limit = PcfSelectInput("[aria-label='Fluctuation in Raw Material Values'] [name*='CovPatternInputGroup-0-CovTermInputSet-OptionTermInput']")
    propertyLineCov_FursJewelleryWatchesandPreciousStones = PcfButton("[aria-label='Furs, Jewellery, Watches and Precious Stones'] [id$='checkbox']")
    propertyLineCov_FursJewelleryWatchesandPreciousStones_Limit = PcfSelectInput("[aria-label='Furs, Jewellery, Watches and Precious Stones'] [name*='CovPatternInputGroup-0-CovTermInputSet-OptionTermInput']")
}