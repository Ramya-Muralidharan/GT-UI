import { PcfComponent, PcfTextInput } from '@gtui/gt-ui-framework';

export class ClaimTabBar_New {
	tabBarClaimChevron= PcfComponent('#TabBar-ClaimTab > div:nth-child(3)');
	claimTabClaimTab_FNOLWizard = PcfComponent('#TabBar-ClaimTab-ClaimTab_FNOLWizard');
	claimTabClaimTab_FindClaim = PcfTextInput('#TabBar-ClaimTab-ClaimTab_FindClaim');
	claimTabSearch = PcfComponent('#TabBar-ClaimTab-ClaimTab_FindClaim_Button')
}