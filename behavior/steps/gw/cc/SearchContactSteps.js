const { Then, When } = require("@cucumber/cucumber")

import { SearchContactScenario} from "../../../../ui/actions/gw/cc/SearchContactScenario"

const searchContactScenario = new SearchContactScenario();

When(/^the user search the contact/, async function () {
    await searchContactScenario.searchContact()
});

Then(/^the search contact details are loaded/, async function () {
    await searchContactScenario.searchValidation();
});