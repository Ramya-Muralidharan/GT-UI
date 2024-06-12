import { PolicySubmissionScenario } from "../../../../ui/actions/gw/pc/PolicySubmissionScenario"
import { NavigationScenario } from "../../../../ui/actions/gw/pc/NavigationScenario"
import world from "../../../../ui/util/gw/world"

const { When, Then } = require('@cucumber/cucumber')
const policySubmissionScenario = new PolicySubmissionScenario()
const navigationScenario = new NavigationScenario()

When(/^the user issue the new submission for personal auto/, async function () {
    await navigationScenario.navigateNewSubmissionScreen()
    await policySubmissionScenario.initiateNewSubmissionPolicy()
    await policySubmissionScenario.selectProduct()    
    await policySubmissionScenario.policyInfo()
    await policySubmissionScenario.clickNext()
    await policySubmissionScenario.usaPersonalAuto_PersonalAutoStandardCoverages()
    await policySubmissionScenario.clickNext()
    await policySubmissionScenario.personalVehicle()
    await policySubmissionScenario.vehicleDriver()
    await policySubmissionScenario.clickNext()
    await policySubmissionScenario.clickNext()
    await policySubmissionScenario.quote()
    await policySubmissionScenario.verifyQuote()
    await policySubmissionScenario.issuePolicy()
})

Then(/^the policy is issued/, async function () {
    await policySubmissionScenario.verifyIssue()
    await policySubmissionScenario.viewSubmission()
})