import { ClaimTabBar_New } from "../../../../ui/actions/gw/cc/scenarioPages/navigations/tabBar/ClaimTabBar_New"
 
let claimTabBar_New = new ClaimTabBar_New()
 
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
 
}