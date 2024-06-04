import { PcfComponent, PcfButton } from '@gtui/gt-ui-framework';
import { Selector } from 'testcafe';
import { NextSubmissionWizard } from '../../../../../../pages/gw/generated/policysolutions/pages/navigation/submissionWizard/NextSubmissionWizard';

export class NextSubmissionWizard_Ext  extends NextSubmissionWizard{
	ok_Button = PcfComponent('[aria-label="OK"]')
	quote_button = PcfButton('[id$="-Quote"] [aria-label="Quote"]')
	Quotedstatus = PcfComponent('#SubmissionWizard-JobWizardInfoBar-JobLabel > div')
	Quotenumber = PcfComponent('#SubmissionWizard-SubmissionWizard_QuoteScreen-Quote_SummaryDV-JobNumber')
	BindOptions = PcfButton('[aria-label="Bind Options"]')
	BindOptions_Sel = Selector('[aria-label="Bind Options"]')
	issuepolicy = PcfButton('[aria-label="Issue Policy"]')
	issuestatus = PcfComponent('#JobComplete-JobCompleteScreen-ttlBar > div.gw-TitleBar--titles--container > div')
	viewsubmission = PcfComponent('#JobComplete-JobCompleteScreen-JobCompleteDV-ViewJob > div > div > div.gw-action')
	policynumber = PcfComponent('#SubmissionWizard-JobWizardInfoBar-PolicyNumber')
	bindpolicy = PcfButton('#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-BindOnly')
	PolicyStatus = PcfComponent('#JobComplete-JobWizardInfoBar-JobLabel > div')
}
