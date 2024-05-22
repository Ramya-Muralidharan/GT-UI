const { Given, When, Then } = require("@cucumber/cucumber")
import world from "../../../../ui/util/gw/world"
import { ReadTestDataFiles } from "../../../../ui/util/gw/ReadTestDataFiles";
import { t } from 'testcafe'
import { onApp } from "../../../../ui/pages/gw/registry/onApp"
 
let onBCApp = new onApp("BC")
const readTestDataFiles = new ReadTestDataFiles()
 
Given(/^the user logs into the billing center/, async (t, stepArguments) => {
    await onBCApp.navigateToApp();
    await onBCApp.loginWithRole("superuser")
    await t.wait(100)
});