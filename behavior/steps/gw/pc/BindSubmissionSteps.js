import {PolicySubmissionScenario} from "../../../../ui/actions/gw/pc/PolicySubmissionScenario"
const { When, Then } = require('@cucumber/cucumber')

const policySubmissionScenario = new PolicySubmissionScenario()

When(/^the user bind the new submission for personal auto/, async function (t) {
    await policySubmissionScenario.bindPolicy()
}) 

Then(/^the policy is bound successfully/, async function (t, stepArguments) {
    await policySubmissionScenario.verifyIssue()
    await policySubmissionScenario.viewSubmission()
})