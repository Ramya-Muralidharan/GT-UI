import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';
import { Selector } from 'testcafe';

export class NewSubmission {
	newSubmissionScreenAddProductButton = PcfButton('#NewSubmission-NewSubmissionScreen-AddProductButton');
	addProductButtonFromCloud = PcfButton('#NewSubmission-NewSubmissionScreen-AddProductButton-FromCloud');
	addProductButtonFromTemplate = PcfButton('#NewSubmission-NewSubmissionScreen-AddProductButton-FromTemplate');
	addProductButtonFromXmind = PcfButton('#NewSubmission-NewSubmissionScreen-AddProductButton-FromXmind');
	addProductButtonNewProduct = PcfButton('#NewSubmission-NewSubmissionScreen-AddProductButton-NewProduct');
	newSubmissionScreenDescriptionHeader = PcfButton('#NewSubmission-NewSubmissionScreen-DescriptionHeader');
	newSubmissionScreenInstalledTab = PcfButton('#NewSubmission-NewSubmissionScreen-InstalledTab');
	newSubmissionScreenNameHeader = PcfButton('#NewSubmission-NewSubmissionScreen-NameHeader');
	productOffersDVProductSelectionLV = PcfListView('#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV');
	productSelectionLV_tbMakeSubmissions = PcfButton('#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV_tb-MakeSubmissions');
	productSettingsDVCreateSingle = PcfComponent('#NewSubmission-NewSubmissionScreen-ProductSettingsDV-CreateSingle');
	productSettingsDVDefaultBaseState = PcfSelectInput('#NewSubmission-NewSubmissionScreen-ProductSettingsDV-DefaultBaseState');
	productSettingsDVDefaultPPEffDate = PcfDateValueInput('#NewSubmission-NewSubmissionScreen-ProductSettingsDV-DefaultPPEffDate');
	productSettingsDVQuoteType = PcfSelectInput('#NewSubmission-NewSubmissionScreen-ProductSettingsDV-QuoteType');
	accountSelectAccount = PcfButton('#NewSubmission-NewSubmissionScreen-SelectAccountAndProducerDV-Account-SelectAccount');
	selectAccountAndProducerDVAccountName = PcfButton('#NewSubmission-NewSubmissionScreen-SelectAccountAndProducerDV-AccountName');
	newSubmissionNewSubmissionScreenSelectAccountAndProducerDVProducerSelectionInputSetProducerSelectOrganization = PcfButton('#NewSubmission-NewSubmissionScreen-SelectAccountAndProducerDV-ProducerSelectionInputSet-Producer-SelectOrganization');
	producerSelectionInputSetProducerCode = PcfSelectInput('#NewSubmission-NewSubmissionScreen-SelectAccountAndProducerDV-ProducerSelectionInputSet-ProducerCode');
	newSubmissionScreenSelectHeader = PcfTextInput('#NewSubmission-NewSubmissionScreen-SelectHeader');
	newSubmissionScreenUploadAcordButton = PcfButton('#NewSubmission-NewSubmissionScreen-UploadAcordButton');
	newSubmissionScreenUploadAcordInput = PcfButton('#NewSubmission-NewSubmissionScreen-UploadAcordInput');
	newSubmissionScreenUploadAcordTab = PcfButton('#NewSubmission-NewSubmissionScreen-UploadAcordTab');
	newSubmissionScreenUploadAcordTitle = PcfTextInput('#NewSubmission-NewSubmissionScreen-UploadAcordTitle');
	newSubmissionScreenVisualizedTab = PcfButton('#NewSubmission-NewSubmissionScreen-VisualizedTab');
	newSubmissionScreen_ListPaging = PcfButton('#NewSubmission-NewSubmissionScreen-_ListPaging');
	newSubmissionScreen_ViewDetail = PcfButton('#NewSubmission-NewSubmissionScreen-_ViewDetail');
	newSubmissionScreen_msgs = PcfButton('#NewSubmission-NewSubmissionScreen-_msgs');
	newSubmissionNewSubmission_UpLink = PcfButton('#NewSubmission-NewSubmission_UpLink');
	newSubmission_Paging = PcfButton('#NewSubmission-_Paging');
	newSubmission__crumb__ = PcfComponent('#NewSubmission-__crumb__');

	PolicyDropDowmBtn = PcfButton('#TabBar-PolicyTab > div.gw-action--expand-button > div')
	newSubmission_Btn = PcfButton("[id$='NewSubmission']")
	accountNumberSearch_TextInput = PcfTextInput("[id$='SelectAccountAndProducerDV-Account']")
	search_Btn = PcfButton("[id$='SelectAccount']")
	organisationSearch_Btn = PcfButton("[id$='SelectOrganization']")
	organisationName_TextInput = PcfTextInput("[id$='GlobalContactNameInputSet-Name']")
	orgName_Search_Btn = PcfButton("[id$='SearchLinksInputSet-Search']")
	orgSelect_Btn = PcfButton("[id$='OrganizationSearchResultsLV-0-_Select']")
	producerCode_Dropdown = PcfSelectInput("[id$= 'ProducerCode']")
	installedproductsTab = PcfButton("[id$='InstalledTab']")
	productSelection_WC = PcfButton("[id$='ProductSelectionLV-6-Select']")
	Next_Btn = PcfButton("[id$='Next']")
	AddClassCode_Btn = PcfButton("[id$='WCCovEmpLV_tb-Add']")
	GoverningLaw_DropDown = PcfSelectInput("[id$='SpecialCoverage']")
	location = PcfSelectInput("[name*='WCCovEmpLV-0-Loc']")
	ClassCode = PcfTextInput("[id$='WCCovEmpLV-0-ClassCode']")
	Basis = PcfTextInput("[id$='AnnualRenum']")
	Quote_Btn = PcfButton("[id$='QuoteTypeToolbarButtonSet-Quote']")
	SubmissionNo = Selector("[id$='JobNumber']")
	BindOptions = PcfButton("[id$='BindOptions']")
	Issue_Btn = PcfButton("[id$='BindAndIssue'],[id$='IssueNow'],[id$='CancelNow']")
	actions_Btn = PcfButton("[id$='AccountFile-AccountFileMenuActions']")
	actionsNewSubmission_Btn = PcfButton("[id$='AccountFileMenuActions_NewSubmission']")
	productSelection_ComProperty_Btn = PcfButton("[id$='ProductSelectionLV-1-addSubmission']")
	organisationType_dropdown = PcfSelectInput("[id$='OrganizationType']")
	propertyLineCov_PropertyOffPremises = PcfButton("[aria-label='Property Off Premises'] [id$='checkbox']")
	propertyLineCov_OutsideObjectsandStructures = PcfButton("[aria-label='Outside Objects and Structures'] [id$='checkbox']")
	propertyLineCov_OutsideObjectsandStructures_Limit = PcfTextInput("[aria-label='Outside Objects and Structures'] [id$='CovPatternInputGroup-0-CovTermInputSet-CovTermDirectInputSet-DirectTermInput']")
	propertyLineCov_OutsideObjectsandStructures_Deductible = PcfTextInput("[aria-label='Outside Objects and Structures'] [id$='CovPatternInputGroup-1-CovTermInputSet-CovTermDirectInputSet-DirectTermInput']")
	propertyLineCov_Eachlosscausedbywind = PcfButton("[aria-label='Each loss caused by wind'] [id$='checkbox']")
	propertyLineCov_Eachlosscausedbywind_Limit = PcfTextInput("[aria-label='Each loss caused by wind'] [id$='CovPatternInputGroup-0-CovTermInputSet-CovTermDirectInputSet-DirectTermInput']")
	propertyLineCov_Eachlosscausedbywind_Deductible = PcfTextInput("[aria-label='Each loss caused by wind'] [id$='CovPatternInputGroup-1-CovTermInputSet-CovTermDirectInputSet-DirectTermInput']")
	propertyLineCov_ContentsofotherStructures = PcfButton("[aria-label='Contents of Other Structures'] [id$='checkbox']")
	propertyLineCov_ContentsofotherStructures_Limit = PcfSelectInput("[aria-label='Contents of Other Structures'] [name*='CovPatternInputGroup-0-CovTermInputSet-OptionTermInput']")
	propertyLineCov_ContentsofotherStructures_Deductible = PcfTextInput("[aria-label='Contents of Other Structures'] [id$='CovPatternInputGroup-1-CovTermInputSet-CovTermDirectInputSet-DirectTermInput']")
	propertyLineCov_Terrorism = PcfButton("[aria-label='Terrorism'] [id$='checkbox']")
	propertyLineCov_Fungus = PcfButton("[aria-label='Fungus'] [id$='checkbox']")
	propertyLineCov_Fungus_Limit = PcfTextInput("[aria-label='Fungus'] [id$='CovPatternInputGroup-0-CovTermInputSet-CovTermDirectInputSet-DirectTermInput']")
	propertyLineCov_Exhibitions = PcfButton("[aria-label='Exhibitions'] [id$='checkbox']")
	propertyLineCov_Exhibitions_Limit = PcfSelectInput("[aria-label='Exhibitions'] [name*='CovPatternInputGroup-0-CovTermInputSet-OptionTermInput']")
	cpBlanket_AddButton = PcfButton("[id$='AddCpBlanket']")
	cpBlanket_Location = PcfSelectInput("[id$='BlanketLocation']")
	cpBlanket_OK_Btn = PcfButton("[id$='Update']")
	policy_Hyperlink = Selector("[id$='ViewPolicy']")
	policy_ActionsTab = PcfButton("[id$='PolicyFileMenuActions']")
	policyMenuAction_Renewal = PcfButton("[id$='PolicyFileMenuActions_RenewPolicy']")
	editPolicyTransaction_Btn = PcfButton("[id$='EditPolicyWorkflow']")


	ActionsRewriteFullTerm_Btn = PcfButton("[id$='StartRewriteMenuItemSet-RewriteFullTerm']")
	propertyLineCov_ElectronicCommerceLossOfDataCoverage = PcfButton("[aria-label='Electronic Commerce Loss Of Data Coverage'] [id$='checkbox']")
	propertyLineCov_ElectronicCommerceLossOfDataCoverage_Limit = PcfTextInput("[aria-label='Electronic Commerce Loss Of Data Coverage'] [id$='CovTermDirectInputSet-DirectTermInput']")
	propertyLineCov_DebrisRemoval = PcfButton("[aria-label='Debris Removal'] [id$='checkbox']")
	propertyLineCov_DebrisRemoval_OtherPropertyLimit = PcfSelectInput("[aria-label='Debris Removal'] [id$='CovPatternInputGroup-0-CovTermInputSet-OptionTermInput']")
	propertyLineCov_DebrisRemoval_Property = PcfSelectInput("[aria-label='Debris Removal'] [id$='CovPatternInputGroup-1-CovTermInputSet-OptionTermInput']")
	propertyLineCov_DebrisRemoval_InsuredPropertyLimit = PcfSelectInput("[aria-label='Debris Removal'] [id$='CovPatternInputGroup-2-CovTermInputSet-OptionTermInput']")
	propertyLineCov_DefferedPayments = PcfButton("[aria-label='Deferred Payments'] [id$='checkbox']")
	propertyLineCov_DefferedPayments_Limit = PcfSelectInput("[aria-label='Deferred Payments'] [id$='CovPatternInputGroup-0-CovTermInputSet-OptionTermInput']")
	propertyLineCov_ElecEquipBrDwnElecRestCost = PcfButton("[aria-label='Electronic Equipment Breakdown and Electronic Data Restoration Costs'] [id$='checkbox']")
	bindRewrite_Btn = PcfButton("[id$='BindRewrite']")
}
