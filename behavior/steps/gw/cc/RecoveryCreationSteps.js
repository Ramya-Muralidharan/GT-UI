const{Given, When, Then} = require("@cucumber/cucumber")
import { RecoveryCreationScenario } from "../../../../ui/actions/gw/cc/RecoveryCreationScenario"

let recoveryCreationScenario = new RecoveryCreationScenario();

When (/^the user creates the recovery/,async function (){
await recoveryCreationScenario.recoveryCreation();
});