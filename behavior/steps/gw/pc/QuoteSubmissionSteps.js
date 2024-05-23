import { PolicySubmissionScenario } from '../../../../ui/actions/gw/pc/PolicySubmissionScenario'
import world from "../../../../ui/util/gw/world"
const { When, Then } = require('@cucumber/cucumber')

const policySubmissionScenario = new PolicySubmissionScenario()

When(/^the user quote the new submission/, async function (t) {
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
}) 

Then(/^the quote policy should be successful/, async function () {
    await policySubmissionScenario.saveQuote()
}) 

When(/^the user creates commercial policy/, async function () {
    await policySubmissionScenario.initiateNewSubmissionPolicy()
    await policySubmissionScenario.addCommercialPropertyLineCoverage()
    await policySubmissionScenario.clickNext()
    await policySubmissionScenario.addCpBlanket()
    await policySubmissionScenario.clickNext()
    await policySubmissionScenario.clickNext()
    await policySubmissionScenario.quote()
    await policySubmissionScenario.verifyQuote()
    await policySubmissionScenario.issuePolicy()
})