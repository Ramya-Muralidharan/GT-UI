const { When } = require("@cucumber/cucumber")
import { NavigationScenario } from "../../../../ui/actions/gw/pc/NavigationScenario"
import { RenewalScenario } from "../../../../ui/actions/gw/pc/RenewalScenario"
import { NewSubmissionScenario } from "../../../../ui/actions/gw/pc/NewSubmissionScenario"
 
const navigationScenario = new NavigationScenario()
const renewalScenario = new RenewalScenario()
const newSubmissionScenario = new NewSubmissionScenario()
 
When(/^the renewal is applied successfully/, async function () {
    await renewalScenario.verifyRenewal()
})
 
When(/^the user performs renewal transaction on the policy/, async function (t) {
    await navigationScenario.openPolicy(t.ctx.PolicyNumber)
    await renewalScenario.initiatePolicyRenewal()
    await renewalScenario.editPolicyTransaction()
    await renewalScenario.renewalAddCommercialPropertyLineCoverage('Terrorism')
    await navigationScenario.renewalNext()
    await navigationScenario.renewalNext()
    await navigationScenario.renewalNext()
    await navigationScenario.renewalNext()
    await renewalScenario.renewalQuote()
    await renewalScenario.clickRenew()
    await renewalScenario.selectRenewalCode()  
})