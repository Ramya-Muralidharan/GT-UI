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

    //Commercial Umbrella and access liability
    submissionWizardUmbrellaLiability = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-CELWizardStepGroup-CELCommUmbExcLiabScreen-CELCommUmbExcLiabPanelSet-UmborExcLiab')
    submissionWizardUmbrellaCoverages = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-CELWizardStepGroup-CELCommUmbExcLiabScreen-CELCommUmbExcLiabPanelSet-UmbrellaCoveragesTab')
    submissionWizardOccurrenceLimit = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-CELWizardStepGroup-CELCommUmbExcLiabScreen-CELCommUmbExcLiabPanelSet-UmbrellaCoveragesCovPatterns-CoverageCategoryInputSet-0-CoverageInputSet-CovPatternInputGroup-0-CovTermInputSet-OptionTermInput')
    submissionWizardAggregateLimit = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-CELWizardStepGroup-CELCommUmbExcLiabScreen-CELCommUmbExcLiabPanelSet-UmbrellaCoveragesCovPatterns-CoverageCategoryInputSet-0-CoverageInputSet-CovPatternInputGroup-1-CovTermInputSet-OptionTermInput')
    submissionWizardProductandCompletedOperationsAggregateLImit = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-CELWizardStepGroup-CELCommUmbExcLiabScreen-CELCommUmbExcLiabPanelSet-UmbrellaCoveragesCovPatterns-CoverageCategoryInputSet-0-CoverageInputSet-CovPatternInputGroup-2-CovTermInputSet-OptionTermInput')
    submissionWizardUmbrellaCoverageForm = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-CELWizardStepGroup-CELCommUmbExcLiabScreen-CELCommUmbExcLiabPanelSet-UmbrellaCoveragesCovPatterns-CoverageCategoryInputSet-0-CoverageInputSet-CovPatternInputGroup-3-CovTermInputSet-TypekeyTermInput')
    submissionWizardSelfInsuredRetention = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-CELWizardStepGroup-CELCommUmbExcLiabScreen-CELCommUmbExcLiabPanelSet-UmbrellaCoveragesCovPatterns-CoverageCategoryInputSet-0-CoverageInputSet-CovPatternInputGroup-4-CovTermInputSet-OptionTermInput')
}