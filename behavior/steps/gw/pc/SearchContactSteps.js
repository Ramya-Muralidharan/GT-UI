const { When, Then } = require("@cucumber/cucumber")
import { SearchContactScenario } from "../../../../ui/actions/gw/pc/SearchContactScenario"

const searchContactScenario  = new SearchContactScenario();

When (/^the user searches contact in policycenter/, async function (t) {
    await searchContactScenario.contactSearch()
});

Then (/^the contact details are loaded successfully/, async function (t) {
    await searchContactScenario.contactValidation()
});