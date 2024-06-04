const { Then } = require("@cucumber/cucumber");
import { SearchCheckScenario } from '../../../../ui/actions/gw/cc/SearchCheckScenario'

const searchCheckScenario = new SearchCheckScenario();

Then(/^the user search the check/, async function () {
    await searchCheckScenario.searchCheck();
});  

Then(/^the check details are loaded/, async function (t) {
    await searchCheckScenario.validateCheckDetailsHeader();
  });