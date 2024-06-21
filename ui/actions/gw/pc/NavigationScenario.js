import { PolicyTabBar_Ext } from "./scenarioPages/navigation/tabBar/PolicyTabBar_Ext";
import { NextSubmissionWizard } from "../../../pages/gw/generated/policysolutions/pages/navigation/submissionWizard/NextSubmissionWizard.js";
import { AccountTabBar_Ext } from './scenarioPages/navigation/tabBar/AccountTabBar_Ext.js'
import { Renewal_New } from "./scenarioPages/renewalWizard/Renewal_New.js";
import { NewAccount_Ext } from "./scenarioPages/account/NewAccount_Ext.js";
import { SearchTabBar_Ext } from "./scenarioPages/navigation/tabBar/SearchTabBar_Ext.js";
import { t } from "testcafe";

const policyTabBar_Ext = new PolicyTabBar_Ext()
const nextSubmissionWizard = new NextSubmissionWizard()
const accountTabBar_Ext = new AccountTabBar_Ext()
const renewal_New = new Renewal_New();
const newAccount_Ext = new NewAccount_Ext();
const searchTabBar_Ext = new SearchTabBar_Ext();

export class NavigationScenario {

  async openPolicy(policyNumber) {
    await policyTabBar_Ext.tabBarPolicyTab.click()
    await policyTabBar_Ext.policyTabPolicyTab_PolicyRetrievalItem.setValue(policyNumber)
    await policyTabBar_Ext.tabBar_PolicyRetrievalItem_Button.click()
  }

  async clickNext() {
    await nextSubmissionWizard.submissionWizardNext.click()
  }

  async openAccount(accountNumber) {
    await accountTabBar_Ext.accountTab.click();
    await accountTabBar_Ext.accountSearch.setValue(accountNumber);
    await accountTabBar_Ext.accountSearch_Button.click();
  }

  async renewalNext() {
    await renewal_New.NextRenewalWizard.click()
  }

  async navigateNewAccountScreen() {
    console.log("On Enter Account Information Screen")
    await newAccount_Ext.account_dropdown.click()
    await newAccount_Ext.acc_NewAccount.click()
  }

  async navigateSearchAccountScreen() {
    await searchTabBar_Ext.tabBarSearchTab.click()
    await searchTabBar_Ext.searchTabSearch_AccountSearch.click()
    console.log('On Search Accounts Screen')
  }

  async navigateSearchPolicyScreen() {
    await searchTabBar_Ext.tabBarSearchTab.click()
    await searchTabBar_Ext.searchTabSearch_PolicySearch.click()
    console.log('On Search Policy Screen')
  }

  async navigateNewSubmissionScreen(){
    await policyTabBar_Ext.tabBarPolicyTab.click()
    await policyTabBar_Ext.policyTabPolicyTab_NewSubmission.click()
    await t.expect((policyTabBar_Ext.tabBar_Header).component.exists).ok();
  }
}