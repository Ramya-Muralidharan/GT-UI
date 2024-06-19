import { PcfButton, PcfComponent } from '@gtui/gt-ui-framework';

export class SubmissionWizard_New {
	submissionWizard_Quote = PcfButton('#SubmissionWizard-SubmissionWizard_PolicyReviewScreen-JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote');
	submissionWizard_QuoteStatus = PcfComponent('#SubmissionWizard-JobWizardInfoBar-JobLabel ')
	submissionWizard_Bind= PcfComponent('#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions')
	submissionWizard_IssuePolicy=PcfComponent('#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-BindAndIssue')
	submissionWizard_PolicyNumber=PcfComponent('#JobComplete-JobWizardInfoBar-PolicyNumber')
	submissionWizard_QuoteNumber = PcfComponent('#SubmissionWizard-SubmissionWizard_QuoteScreen-Quote_SummaryDV-JobNumber')
	submissionWizard_BindOptions = PcfButton('#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-BindOnly')
	submissionWizard_AddCPBlanket= PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-CLLWizardStepGroup-CLLCpBlanketScreen-CLLCpBlanketListPanelSet-AddCpBlanket')
	
}