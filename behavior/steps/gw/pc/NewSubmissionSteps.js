const { When, Then } = require('@cucumber/cucumber')
import { NewSubmissionScenario } from '../../../../ui/actions/gw/pc/NewSubmissionScenario'
import { NavigationScenario } from '../../../../ui/actions/gw/pc/NavigationScenario'

const newSubmissionScenario = new NewSubmissionScenario()
const navigationScenario = new NavigationScenario()

When(/^the user bind the new submission/, async function () {
    await newSubmissionScenario.bindPolicy()
}) 

Then(/^the policy is bound successfully/, async function (t, stepArguments) {
    await newSubmissionScenario.verifyIssue()
    await newSubmissionScenario.viewSubmission()
})

When(/^the user quote the new submission for personal auto/, async function (t) {
    await navigationScenario.navigateNewSubmissionScreen()
    await newSubmissionScenario.initiateNewSubmissionPolicy()
    await newSubmissionScenario.selectProduct()    
    await newSubmissionScenario.policyInfo()
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.usaPersonalAuto_PersonalAutoStandardCoverages()
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.personalVehicle()
    await newSubmissionScenario.vehicleDriver()
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.quote()
    await newSubmissionScenario.verifyQuote()
}) 

When(/^the user quote the new submission for homeowners/, async function (t) {
    await navigationScenario.navigateNewSubmissionScreen()
    await newSubmissionScenario.initiateNewSubmissionPolicy()
    await newSubmissionScenario.selectProduct()    
    await newSubmissionScenario.policyInfo()
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.gWHomeownersLine()
    await newSubmissionScenario.addAdditionalCoverageHomeOwners("Identity Theft Protection")
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.quote()
    await newSubmissionScenario.verifyQuote()
})

Then(/^the quote is saved successfully/, async function () {
    await newSubmissionScenario.saveQuote()
}) 

When(/^the user creates commercial policy/, async function () {
    await navigationScenario.navigateNewSubmissionScreen()
    await newSubmissionScenario.initiateNewSubmissionPolicy()
    await newSubmissionScenario.selectProduct()   
    await newSubmissionScenario.policyInfo()
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.addCommercialPropertyLineCoverage()
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.addCpBlanket()
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.quote()
    await newSubmissionScenario.verifyQuote()
    await newSubmissionScenario.issuePolicy()
})

When(/^the user issue the new submission for personal auto/, async function () {
    await navigationScenario.navigateNewSubmissionScreen()
    await newSubmissionScenario.initiateNewSubmissionPolicy()
    await newSubmissionScenario.selectProduct()    
    await newSubmissionScenario.policyInfo()
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.usaPersonalAuto_PersonalAutoStandardCoverages()
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.personalVehicle()
    await newSubmissionScenario.vehicleDriver()
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.quote()
    await newSubmissionScenario.verifyQuote()
    await newSubmissionScenario.issuePolicy()
})

When(/^the user issue the new homeowner policy/, async function () {
    await navigationScenario.navigateNewSubmissionScreen()
    await newSubmissionScenario.initiateNewSubmissionPolicy()
    await newSubmissionScenario.selectProduct()    
    await newSubmissionScenario.policyInfo()
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.gWHomeownersLine()
    await newSubmissionScenario.addAdditionalCoverageHomeOwners("Identity Theft Protection")
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.quote()
    await newSubmissionScenario.verifyQuote()
    await newSubmissionScenario.issuePolicy()
})

Then(/^the policy is issued/, async function () {
    await newSubmissionScenario.verifyIssue()
    await newSubmissionScenario.viewSubmission()
})