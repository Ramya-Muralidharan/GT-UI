const { Given } = require("@cucumber/cucumber")
import { onApp } from "../../../../ui/pages/gw/registry/onApp"
 
let onBCApp = new onApp("BC")
let onPCApp = new onApp('PC')
let onCCApp = new onApp("CC")
 
Given(/^the user logs into the billing center/, async (t) => {
    await onBCApp.navigateToApp();
    await onBCApp.loginWithRole("superuser")
    await t.wait(100)
});
 
Given(/^the user logs into the policy center as superuser/,async function(t){
    await t.navigateTo(process.env["PC_URL"]);
    await onPCApp.loginWithRole("superuser")
    await t.wait(100);
});
 
Given(/^the user logs into the claims center/,async function(t){   
    await t.navigateTo(process.env["CC_URL"])
    await onCCApp.loginWithRole("superuser")
    await t.wait(1000)        
});