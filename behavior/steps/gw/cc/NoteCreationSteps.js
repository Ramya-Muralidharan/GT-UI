const { Then, When } = require("@cucumber/cucumber");
import { NoteCreationScenario } from '../../../../ui/actions/gw/cc/NoteCreationScenario'
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";


const noteCreationScenario = new NoteCreationScenario();
const navigationScenario = new NavigationScenario()

When(/^the user creates the note/, async function (t) {
    await navigationScenario.openClaim(t.ctx.claimNo);
    await noteCreationScenario.noteScenario();
});

Then(/^the note is added successfully/, async function (t) {
    await navigationScenario.openClaim(t.ctx.claimNo);
    await noteCreationScenario.validateAddedNote();
    
});  