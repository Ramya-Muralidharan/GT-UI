import { PcfTextInput, PcfComponent, PcfButton, PcfSelectInput } from '@gtui/gt-ui-framework';

export class HomeOwners_New  {
    //SubmissionWizard-LOBWizardStepGroup
    submissionWizardRefusalType = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HLLWizardStepGroup-HLLGwHomeownersLineScreen-HLLGwHomeownersLinePanelSet-RefusalType');
    submissionWizardAdditionalCoverage = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HLLWizardStepGroup-HLLGwHomeownersLineScreen-HLLGwHomeownersLinePanelSet-AdditionalCoveragesTab')

    //coverages
    submissionWizardIdentityTheftProtection = PcfComponent('[aria-label="Identity Theft Protection"] div[role="checkbox"]')
    submissionWizardIdentityTheftProtectionLimit = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HLLWizardStepGroup-HLLGwHomeownersLineScreen-HLLGwHomeownersLinePanelSet-AdditionalCoveragesCovPatterns-CoverageCategoryInputSet-0-CoverageInputSet-CovPatternInputGroup-0-CovTermInputSet-OptionTermInput')
    submissionWizardIdentityTheftProtectionDeductible = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HLLWizardStepGroup-HLLGwHomeownersLineScreen-HLLGwHomeownersLinePanelSet-AdditionalCoveragesCovPatterns-CoverageCategoryInputSet-0-CoverageInputSet-CovPatternInputGroup-1-CovTermInputSet-OptionTermInput')
    submissionWizardLossAssessment = PcfComponent('[aria-label="Loss Assessment"] div[role="checkbox"]')
    submissionWizardLossAssessmentLimit =PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HLLWizardStepGroup-HLLGwHomeownersLineScreen-HLLGwHomeownersLinePanelSet-AdditionalCoveragesCovPatterns-CoverageCategoryInputSet-1-CoverageInputSet-CovPatternInputGroup-0-CovTermInputSet-OptionTermInput')
}