import { PcfComponent, PcfButton, PcfSelectInput } from '@gtui/gt-ui-framework';

export class Renewal_New {
	NextRenewalWizard= PcfButton('#RenewalWizard-Next');
	RenewalWizard_EditPolicyTransaction= PcfButton('#RenewalWizard-LOBWizardStepGroup-RenewalWizard_PolicyInfoScreen-JobWizardToolbarButtonSet-EditPolicyWorkflow')
	RenewalWizard_BindOptions = PcfButton('#RenewalWizard-PostQuoteWizardStepSet-RenewalWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions');
	RenewalWizard_Renew= PcfComponent('#RenewalWizard-PostQuoteWizardStepSet-RenewalWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-SendToRenewal');
	RenewalWizard_Quote = PcfButton('#RenewalWizard-LOBWizardStepGroup-RenewalWizard_DifferencesScreen-JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote')
	renewalWizard_CpBlanketAdd = PcfButton('#RenewalWizard-LOBWizardStepGroup-LineWizardStepSet-CLLWizardStepGroup-CLLCpBlanketScreen-CLLCpBlanketListPanelSet-AddCpBlanket')
	RenewalWizardAdditionalCoverage = PcfComponent('#RenewalWizard-LOBWizardStepGroup-LineWizardStepSet-HLLWizardStepGroup-HLLGwHomeownersLineScreen-HLLGwHomeownersLinePanelSet-AdditionalCoveragesTab')
	RenewalWizardSectionIICoverages= PcfComponent('#RenewalWizard-LOBWizardStepGroup-LineWizardStepSet-HLLWizardStepGroup-HLLGwHomeownersLineScreen-HLLGwHomeownersLinePanelSet-SectionIICoveragesTab')
	RenewalWizardOptionalCoverages =PcfComponent('#RenewalWizard-LOBWizardStepGroup-LineWizardStepSet-HLLWizardStepGroup-HLLGwHomeownersLineScreen-HLLGwHomeownersLinePanelSet-OptionalCoveragesTab')
	RenewalWizardExclusionsConditions = PcfComponent('#RenewalWizard-LOBWizardStepGroup-LineWizardStepSet-HLLWizardStepGroup-HLLGwHomeownersLineScreen-HLLGwHomeownersLinePanelSet-ExclusionsAndconditionsTab')
	RenewalWizardGWHomeownersLine = PcfComponent('#RenewalWizard-LOBWizardStepGroup-LineWizardStepSet-HLLWizardStepGroup-HLLGwHomeownersLineScreen-HLLGwHomeownersLinePanelSet-detailsTab')
	//#region small business
	RenewalWizardSmallBusienssTab = PcfComponent('#RenewalWizard-LOBWizardStepGroup-LineWizardStepSet-SBLWizardStepGroup-SBLSmallBusinessScreen-SBLSmallBusinessPanelSet-detailsTab')
	RenewalWizardSmallBusinessLineCoveragesTab = PcfComponent('#RenewalWizard-LOBWizardStepGroup-LineWizardStepSet-SBLWizardStepGroup-SBLSmallBusinessScreen-SBLSmallBusinessPanelSet-SBLLineCoveragesTab')
	RenewalWizardSmallBusinessLineAdditionalCoveragesTab = PcfComponent('#RenewalWizard-LOBWizardStepGroup-LineWizardStepSet-SBLWizardStepGroup-SBLSmallBusinessScreen-SBLSmallBusinessPanelSet-SBLAdditionalLineCoveragesTab')
	RenewalWizardExclusionsConditionsTabSb = PcfComponent('#RenewalWizard-LOBWizardStepGroup-LineWizardStepSet-SBLWizardStepGroup-SBLSmallBusinessScreen-SBLSmallBusinessPanelSet-ExclusionsAndconditionsTab')
	RenewalWizardBusinessType = PcfSelectInput('#RenewalWizard-LOBWizardStepGroup-LineWizardStepSet-SBLWizardStepGroup-SBLSmallBusinessScreen-SBLSmallBusinessPanelSet-SBLBusinessType')
	//#endregion
}