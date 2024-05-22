import { PcfComponent,PcfButton,PcfTextInput } from '@gtui/gt-ui-framework';
import { Selector } from 'testcafe';

export class AccountsTabBar_New {
	accountsTab_ExpandButton  = PcfButton('#TabBar-AccountsTab > div.gw-action--expand-button > div')
    accountSearch =PcfTextInput('#TabBar-AccountsTab-AccountNumberSearchItem > div')
	accountSearch_Button = PcfButton('#TabBar-AccountsTab-AccountNumberSearchItem_Button')
}