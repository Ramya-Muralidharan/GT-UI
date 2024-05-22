import {t, stepArguements} from "testcafe";
import { AccountScenario } from '../../../../ui/actions/gw/pc/AccountScenario'
import { NavigationScenario } from "../../../../ui/actions/gw/pc/NavigationScenario";

const accountScenario = new AccountScenario();
const navigationScenario = new NavigationScenario();

const{Given, When, Then} = require("@cucumber/cucumber")
 
When(/^the user creates personal account/,async function(){
    await navigationScenario.navigateNewAccountScreen()
    await accountScenario.createPersonalAccount()
    await accountScenario.organizationSearchPopup()
    await accountScenario.createAccountNumber()
});

When(/^the user creates commercial account/, async function () {  
    await navigationScenario.navigateNewAccountScreen()
    await accountScenario.createCommercialAccount()
    await accountScenario.organizationSearchPopup()
    await accountScenario.createAccountNumber()
})