const{Given} = require("@cucumber/cucumber")
import { onApp } from "../../../../ui/pages/gw/registry/onApp"
 
let onPCApp = new onApp('PC')
 
Given(/^the user logs into the policy center as superuser/,async function(t){
    await t.navigateTo(process.env["PC_URL"]);
    await onPCApp.loginWithRole("superuser")
    await t.wait(100);
});