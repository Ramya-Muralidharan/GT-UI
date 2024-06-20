const { When, Then } = require('@cucumber/cucumber')
import { NewSubmissionScenario } from '../../../../ui/actions/gw/pc/NewSubmissionScenario'
import { NavigationScenario } from '../../../../ui/actions/gw/pc/NavigationScenario'
import { CommercialPropertyCoverage } from '../../../../ui/actions/gw/pc/CoverageScenario/CommercialPropertyCoverage'
import { t } from 'testcafe'

const newSubmissionScenario = new NewSubmissionScenario()
const navigationScenario = new NavigationScenario()
const commercialPropertyCoverage = new CommercialPropertyCoverage()

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

When(/^the user quote the new submission for umbrella liability/, async function () {
    await navigationScenario.navigateNewSubmissionScreen()
    await newSubmissionScenario.initiateNewSubmissionPolicy()
    await newSubmissionScenario.selectProduct()    
    await newSubmissionScenario.policyInfo()
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.commercialUmbrellaAccessliability()
    await newSubmissionScenario.addUmbrellaCoverages("Occurrence Limit")
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.quote()
    await newSubmissionScenario.verifyQuote()
})

When(/^the user issue the new submission for umbrella liability/, async function () {
    await navigationScenario.navigateNewSubmissionScreen()
    await newSubmissionScenario.initiateNewSubmissionPolicy()
    await newSubmissionScenario.selectProduct()    
    await newSubmissionScenario.policyInfo()
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.commercialUmbrellaAccessliability()
    await newSubmissionScenario.addUmbrellaCoverages("Occurrence Limit")
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.quote()
    await newSubmissionScenario.verifyQuote()
    await newSubmissionScenario.issuePolicy()
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
    await commercialPropertyCoverage.coverageFilter()
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

When(/^the user quote the new submission for commercial property/, async function (t) {
    await navigationScenario.navigateNewSubmissionScreen()
    await newSubmissionScenario.initiateNewSubmissionPolicy()
    await newSubmissionScenario.selectProduct()   
    await newSubmissionScenario.policyInfo()
    await newSubmissionScenario.clickNext()
    await commercialPropertyCoverage.coverageFilter()
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.addCpBlanket()
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.clickNext()
    await newSubmissionScenario.quote()
    await newSubmissionScenario.verifyQuote()
})

Then(/^the policy is issued/, async function () {
    await newSubmissionScenario.verifyIssue()
    await newSubmissionScenario.viewSubmission()
})