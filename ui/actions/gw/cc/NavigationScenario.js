import { ClaimTabBar_New } from "../../../../ui/actions/gw/cc/scenarioPages/navigations/tabBar/ClaimTabBar_New"
import { SearchTabBar_New } from "../pc/scenarioPages/navigation/tabBar/SearchTabBar_New"
import { SearchTabBar } from "../../../pages/gw/generated/claimsolutions/pages/navigation/tabBar/SearchTabBar"

let claimTabBar_New = new ClaimTabBar_New()
let searchTabBar_New = new SearchTabBar_New()
let searchTabBar = new SearchTabBar()
 
export class NavigationScenario {
 
async navigateToNewClaimWizard() {
  await claimTabBar_New.tabBarClaimChevron.click()
  await claimTabBar_New.claimTabClaimTab_FNOLWizard.click()
  }
 
  async clickNext() {
    await nextSubmissionWizard.submissionWizardNext.click()
  }

  async openClaim(claimNumber)
  {
    await claimTabBar_New.tabBarClaimChevron.click();
    await claimTabBar_New.claimTabClaimTab_FindClaim.setValue(claimNumber);
    await claimTabBar_New.claimTabSearch.click();
  }

  async navigateSearchPolicyScreen(){
    await searchTabBar_New.tabBarSearchTab.click()
    await searchTabBar.tabBarSearchTab.click()
    console.log('On Search Claims Screen')
  } 
}