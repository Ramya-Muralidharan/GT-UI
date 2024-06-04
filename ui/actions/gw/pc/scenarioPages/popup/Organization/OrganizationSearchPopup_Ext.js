import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { OrganizationBranchSearchPopup } from '../../../../../../pages/gw/generated/policysolutions/pages/popup/Organization/OrganizationBranchSearchPopup';


export class OrganizationSearchPopup_Ext extends OrganizationBranchSearchPopup{
	PolicyDropDowmBtn = PcfButton('#TabBar-PolicyTab > div.gw-action--expand-button > div')
	newSubmission_Btn = PcfButton("[id$='NewSubmission']")
	accountNumberSearch_TextInput = PcfTextInput("[id$='SelectAccountAndProducerDV-Account']")
	search_Btn = PcfButton("[id$='SelectAccount']")
	organisationSearch_Btn = PcfButton("[id$='SelectOrganization']")
	organisationName_TextInput = PcfTextInput("[id$='GlobalContactNameInputSet-Name']")
	orgName_Search_Btn = PcfButton("[id$='SearchLinksInputSet-Search']")
	orgSelect_Btn = PcfButton("[id$='OrganizationSearchResultsLV-0-_Select']")
	installedproductsTab = PcfButton("[id$='InstalledTab']")
	productSelection_WC = PcfButton("[id$='ProductSelectionLV-6-Select']")
	Next_Btn = PcfButton("[id$='Next']")	
}