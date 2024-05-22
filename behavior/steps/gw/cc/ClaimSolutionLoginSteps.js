const{Given,When,Then} = require("@cucumber/cucumber")
import { onApp } from "../../../../ui/pages/gw/registry/onApp"
 
let onCCApp = new onApp("CC")
 
Given(/^the user logs into the claims center/,async function(t){   
    await t.navigateTo(process.env["CC_URL"])
    await onCCApp.loginWithRole("superuser")
    await t.wait(1000)        
});