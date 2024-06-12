import { PolicySubmissionScenario } from '../../../../ui/actions/gw/pc/PolicySubmissionScenario'
import { NavigationScenario } from '../../../../ui/actions/gw/pc/NavigationScenario'
import { AccountScenario} from '../../../../ui/actions/gw/pc/AccountScenario'
import world from "../../../../ui/util/gw/world"
const { When, Then } = require('@cucumber/cucumber')

const policySubmissionScenario = new PolicySubmissionScenario()
const navigationScenario = new NavigationScenario()

When(/^the user quote the new submission for personal auto/, async function (t) {
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
}) 

Then(/^the quote is saved successfully/, async function () {
    await policySubmissionScenario.saveQuote()
}) 

When(/^the user creates commercial policy/, async function () {
    await navigationScenario.navigateNewSubmissionScreen()
    await policySubmissionScenario.initiateNewSubmissionPolicy()
    await policySubmissionScenario.selectProduct()   
    await policySubmissionScenario.policyInfo()
    await policySubmissionScenario.clickNext()
    await policySubmissionScenario.addCommercialPropertyLineCoverage()
    await policySubmissionScenario.clickNext()
    await policySubmissionScenario.addCpBlanket()
    await policySubmissionScenario.clickNext()
    await policySubmissionScenario.clickNext()
    await policySubmissionScenario.quote()
    await policySubmissionScenario.verifyQuote()
    await policySubmissionScenario.issuePolicy()
})