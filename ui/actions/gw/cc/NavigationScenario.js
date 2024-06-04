import { ClaimTabBar_New } from "../../../../ui/actions/gw/cc/scenarioPages/navigations/tabBar/ClaimTabBar_New"
import { SearchTabBar_Ext } from "../pc/scenarioPages/navigation/tabBar/SearchTabBar_Ext"

let claimTabBar_New = new ClaimTabBar_New()
let searchTabBar_Ext = new SearchTabBar_Ext()

export class NavigationScenario {

  async navigateToNewClaimWizard() {
    await claimTabBar_New.tabBarClaimChevron.click()
    await claimTabBar_New.claimTabClaimTab_FNOLWizard.click()
  }

  async clickNext() {
    await nextSubmissionWizard.submissionWizardNext.click()
  }

  async openClaim(claimNumber) {
    await claimTabBar_New.tabBarClaimChevron.click();
    await claimTabBar_New.claimTabClaimTab_FindClaim.setValue(claimNumber);
    await claimTabBar_New.claimTabSearch.click();
  }

  async navigateSearchPolicyScreen() {
    await searchTabBar_Ext.tabBarSearchTab.click()
    await searchTabBar_Ext.tabBarSearchTab.click()
    console.log('On Search Claims Screen')
  }
}