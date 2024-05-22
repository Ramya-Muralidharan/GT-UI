import { AccountsTabBar_New } from '../../../../ui/actions/gw/bc/scenarioPages/navigation/AccountsTabBar_New'

const accountsTabBar = new AccountsTabBar_New();

export class AccountsTabBarScenario {
    async openExistingAccount(accountNumber) {
        await accountsTabBar.accountsTab_ExpandButton.click();
        await accountsTabBar.accountSearch.setValue(accountNumber);
        await accountsTabBar.accountSearch_Button.click();
    }
}