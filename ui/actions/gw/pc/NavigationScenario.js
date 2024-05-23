import { PolicyTabBar_New } from "./scenarioPages/navigation/tabBar/PolicyTabBar_New.js";
import { PolicyTabBar } from "../../../../ui/pages/gw/generated/policysolutions/pages/navigation/tabBar/PolicyTabBar.js";
import { NextSubmissionWizard } from "../../../pages/gw/generated/policysolutions/pages/navigation/submissionWizard/NextSubmissionWizard.js";
import { AccountTabBar_New } from './scenarioPages/navigation/tabBar/AccountTabBar_New.js'
import { Renewal_New } from "./scenarioPages/renewalWizard/Renewal_New.js";
import { NewAccount_New } from "./scenarioPages/account/NewAccount_New.js";
import { SearchTabBar } from "../../../pages/gw/generated/policysolutions/pages/navigation/tabBar/SearchTabBar.js";
import { SearchTabBar_New } from "./scenarioPages/navigation/tabBar/SearchTabBar_New.js";

const policyTabBar = new PolicyTabBar()
const policyTabBar_New = new PolicyTabBar_New()
const nextSubmissionWizard = new NextSubmissionWizard()
const accountTabBar_New = new AccountTabBar_New()
const renewal_New = new Renewal_New();
const newAccount_New = new NewAccount_New();
const searchTabBar_New = new SearchTabBar_New();
const searchTabBar = new SearchTabBar()

export class NavigationScenario {

async openPolicy(policyNumber) { //0530992437
    await policyTabBar_New.tabBarPolicyTab.click()
    await policyTabBar.policyTabPolicyTab_PolicyRetrievalItem.setValue(policyNumber)
    await policyTabBar_New.tabBar_PolicyRetrievalItem_Button.click()
  }

  async clickNext() {
    await nextSubmissionWizard.submissionWizardNext.click()
  }

  async openAccount(accountNumber)
  {
    await accountTabBar_New.accountTab.click();
    await accountTabBar_New.accountSearch.setValue(accountNumber);
    await accountTabBar_New.accountSearch_Button.click();
  }

  async renewalNext()  {
    await renewal_New.NextRenewalWizard.click()
  }

  async navigateNewAccountScreen() {
    console.log("On Enter Account Information Screen")
    await newAccount_New.account_dropdown.click()
    await newAccount_New.acc_NewAccount.click()
  }

  async navigateSearchAccountScreen(){
    await searchTabBar_New.tabBarSearchTab.click()
    await searchTabBar.searchTabSearch_AccountSearch.click()
    console.log('On Search Accounts Screen')
  }

  async navigateSearchPolicyScreen(){
    await searchTabBar_New.tabBarSearchTab.click()
    await searchTabBar.searchTabSearch_PolicySearch.click()
    console.log('On Search Policy Screen')
  }
}