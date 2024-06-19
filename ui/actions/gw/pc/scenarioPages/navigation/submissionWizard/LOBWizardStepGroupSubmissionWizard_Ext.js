import { PcfButton, PcfCheckBox, PcfComponent, PcfSelectInput, PcfTextInput } from '@gtui/gt-ui-framework';
import { LOBWizardStepGroupSubmissionWizard } from '../../../../../../../ui/pages/gw/generated/policysolutions/pages/navigation/submissionWizard/LOBWizardStepGroupSubmissionWizard'

export class LOBWizardStepGroupSubmissionWizard_Ext extends LOBWizardStepGroupSubmissionWizard {

	//#region CommercialProperty
	PropertyOffPremises=PcfCheckBox('[id$="LOBWizardStepGroup-LineWizardStepSet-CLLWizardStepGroup-CLLCPLTypeName1Screen-CLLCPLTypeName1PanelSet-SupplementalCovCovPatterns-CoverageCategoryInputSet-0-CoverageInputSet-CovPatternInputGroup-_checkbox_checkboxDiv"]')
	PropertyOffPremisesLimit= PcfTextInput('[id$="LOBWizardStepGroup-LineWizardStepSet-CLLWizardStepGroup-CLLCPLTypeName1Screen-CLLCPLTypeName1PanelSet-SupplementalCovCovPatterns-CoverageCategoryInputSet-0-CoverageInputSet-CovPatternInputGroup-0-CovTermInputSet-CovTermDirectInputSet-DirectTermInput"]')
	PropertyOffPremisesDeductible= PcfTextInput('[id$="LOBWizardStepGroup-LineWizardStepSet-CLLWizardStepGroup-CLLCPLTypeName1Screen-CLLCPLTypeName1PanelSet-SupplementalCovCovPatterns-CoverageCategoryInputSet-0-CoverageInputSet-CovPatternInputGroup-1-CovTermInputSet-CovTermDirectInputSet-DirectTermInput"]')
	PropertyOffPremisesWithinTerritorialLimits= PcfTextInput('[id$="LOBWizardStepGroup-LineWizardStepSet-CLLWizardStepGroup-CLLCPLTypeName1Screen-CLLCPLTypeName1PanelSet-SupplementalCovCovPatterns-CoverageCategoryInputSet-0-CoverageInputSet-CovPatternInputGroup-2-CovTermInputSet-CovTermDirectInputSet-DirectTermInput"]')
	PropertyOffPremisesWithinInterContinent= PcfTextInput('[id$="LOBWizardStepGroup-LineWizardStepSet-CLLWizardStepGroup-CLLCPLTypeName1Screen-CLLCPLTypeName1PanelSet-SupplementalCovCovPatterns-CoverageCategoryInputSet-0-CoverageInputSet-CovPatternInputGroup-3-CovTermInputSet-CovTermDirectInputSet-DirectTermInput"]')    
	OutsideObjectsAndStructures = PcfCheckBox('[id$="LOBWizardStepGroup-LineWizardStepSet-CLLWizardStepGroup-CLLCPLTypeName1Screen-CLLCPLTypeName1PanelSet-SupplementalCovCovPatterns-CoverageCategoryInputSet-2-CoverageInputSet-CovPatternInputGroup-_checkbox_checkboxDiv"]')
	OutsideObjectsAndStructuresLimit= PcfTextInput('[id$="LOBWizardStepGroup-LineWizardStepSet-CLLWizardStepGroup-CLLCPLTypeName1Screen-CLLCPLTypeName1PanelSet-SupplementalCovCovPatterns-CoverageCategoryInputSet-2-CoverageInputSet-CovPatternInputGroup-0-CovTermInputSet-CovTermDirectInputSet-DirectTermInput"]')
	OutsideObjectsAndStructuresDeductible=PcfTextInput('[id$="SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-CLLWizardStepGroup-CLLCPLTypeName1Screen-CLLCPLTypeName1PanelSet-SupplementalCovCovPatterns-CoverageCategoryInputSet-2-CoverageInputSet-CovPatternInputGroup-1-CovTermInputSet-CovTermDirectInputSet-DirectTermInput"]')
	EachLossCausedByWind=PcfCheckBox('[id$="LOBWizardStepGroup-LineWizardStepSet-CLLWizardStepGroup-CLLCPLTypeName1Screen-CLLCPLTypeName1PanelSet-SupplementalCovCovPatterns-CoverageCategoryInputSet-4-CoverageInputSet-CovPatternInputGroup-_checkbox_checkboxDiv"]')
	EachLossCausedByWindLimit=PcfTextInput('[id$="LOBWizardStepGroup-LineWizardStepSet-CLLWizardStepGroup-CLLCPLTypeName1Screen-CLLCPLTypeName1PanelSet-SupplementalCovCovPatterns-CoverageCategoryInputSet-4-CoverageInputSet-CovPatternInputGroup-0-CovTermInputSet-CovTermDirectInputSet-DirectTermInput"]')
	EachLossCausedByWindDeductible=PcfTextInput('[id$="LOBWizardStepGroup-LineWizardStepSet-CLLWizardStepGroup-CLLCPLTypeName1Screen-CLLCPLTypeName1PanelSet-SupplementalCovCovPatterns-CoverageCategoryInputSet-4-CoverageInputSet-CovPatternInputGroup-1-CovTermInputSet-CovTermDirectInputSet-DirectTermInput"]')
	Terrorism=PcfCheckBox('[id$="LOBWizardStepGroup-LineWizardStepSet-CLLWizardStepGroup-CLLCPLTypeName1Screen-CLLCPLTypeName1PanelSet-SupplementalCovCovPatterns-CoverageCategoryInputSet-6-CoverageInputSet-CovPatternInputGroup-_checkbox_checkboxDiv"]')
	//#endregion
	//#region CommercialUmbrellaAndAccessLiability
    submissionWizardUmbrellaLiability = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-CELWizardStepGroup-CELCommUmbExcLiabScreen-CELCommUmbExcLiabPanelSet-UmborExcLiab')
    submissionWizardUmbrellaCoverages = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-CELWizardStepGroup-CELCommUmbExcLiabScreen-CELCommUmbExcLiabPanelSet-UmbrellaCoveragesTab')
    submissionWizardOccurrenceLimit = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-CELWizardStepGroup-CELCommUmbExcLiabScreen-CELCommUmbExcLiabPanelSet-UmbrellaCoveragesCovPatterns-CoverageCategoryInputSet-0-CoverageInputSet-CovPatternInputGroup-0-CovTermInputSet-OptionTermInput')
    submissionWizardAggregateLimit = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-CELWizardStepGroup-CELCommUmbExcLiabScreen-CELCommUmbExcLiabPanelSet-UmbrellaCoveragesCovPatterns-CoverageCategoryInputSet-0-CoverageInputSet-CovPatternInputGroup-1-CovTermInputSet-OptionTermInput')
    submissionWizardProductandCompletedOperationsAggregateLImit = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-CELWizardStepGroup-CELCommUmbExcLiabScreen-CELCommUmbExcLiabPanelSet-UmbrellaCoveragesCovPatterns-CoverageCategoryInputSet-0-CoverageInputSet-CovPatternInputGroup-2-CovTermInputSet-OptionTermInput')
    submissionWizardUmbrellaCoverageForm = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-CELWizardStepGroup-CELCommUmbExcLiabScreen-CELCommUmbExcLiabPanelSet-UmbrellaCoveragesCovPatterns-CoverageCategoryInputSet-0-CoverageInputSet-CovPatternInputGroup-3-CovTermInputSet-TypekeyTermInput')
    submissionWizardSelfInsuredRetention = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-CELWizardStepGroup-CELCommUmbExcLiabScreen-CELCommUmbExcLiabPanelSet-UmbrellaCoveragesCovPatterns-CoverageCategoryInputSet-0-CoverageInputSet-CovPatternInputGroup-4-CovTermInputSet-OptionTermInput')
	//#endregion
}
