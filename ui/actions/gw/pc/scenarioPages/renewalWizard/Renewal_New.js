import { PcfComponent, PcfButton } from '@gtui/gt-ui-framework';

export class Renewal_New {
	NextRenewalWizard= PcfButton('#RenewalWizard-Next');
	RenewalWizard_EditPolicyTransaction= PcfButton('#RenewalWizard-LOBWizardStepGroup-RenewalWizard_PolicyInfoScreen-JobWizardToolbarButtonSet-EditPolicyWorkflow')
	RenewalWizard_BindOptions = PcfButton('#RenewalWizard-PostQuoteWizardStepSet-RenewalWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions');
	RenewalWizard_Renew= PcfComponent('#RenewalWizard-PostQuoteWizardStepSet-RenewalWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-SendToRenewal');
	RenewalWizard_Quote = PcfButton('#RenewalWizard-LOBWizardStepGroup-RenewalWizard_DifferencesScreen-JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote')
	renewalWizard_CpBlanketAdd = PcfButton('#RenewalWizard-LOBWizardStepGroup-LineWizardStepSet-CLLWizardStepGroup-CLLCpBlanketScreen-CLLCpBlanketListPanelSet-AddCpBlanket')
}