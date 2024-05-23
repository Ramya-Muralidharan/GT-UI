const { Given, When, Then } = require("@cucumber/cucumber")
import { ReadTestDataFiles } from "../../../../ui/util/gw/ReadTestDataFiles";
import { onApp } from "../../../../ui/pages/gw/registry/onApp"
 
let onBCApp = new onApp("BC")
 
Given(/^the user logs into the billing center/, async (t) => {
    await onBCApp.navigateToApp();
    await onBCApp.loginWithRole("superuser")
    await t.wait(100)
});