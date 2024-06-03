import {PolicySubmissionScenario} from "../../../../ui/actions/gw/pc/PolicySubmissionScenario"
import world from "../../../../ui/util/gw/world"
const { When, Then } = require('@cucumber/cucumber')

const policySubmissionScenario = new PolicySubmissionScenario()

When(/^the user bind the new submission/, async function (t) {
    await policySubmissionScenario.selectProduct()
    await policySubmissionScenario.policyInfo()
    await policySubmissionScenario.clickNext()
    await policySubmissionScenario.usaPersonalAuto_PersonalAutoStandardCoverages()
    await policySubmissionScenario.clickNext()
    await policySubmissionScenario.personalVehicle()
    await policySubmissionScenario.vehicleDriver()
    await policySubmissionScenario.clickNext()
    await policySubmissionScenario.navigateToScreen(world.dataMap.get('Screenname'))
    await policySubmissionScenario.quote()
    await policySubmissionScenario.verifyQuote()
    await policySubmissionScenario.saveQuote()
    await policySubmissionScenario.bindPolicy()
    await policySubmissionScenario.verifyBind()
    await policySubmissionScenario.viewSubmission()
}) 

Then(/^the policy is bound successfully/, async function (t, stepArguments) {
 await policySubmissionScenario.saveBindPolicy()
})