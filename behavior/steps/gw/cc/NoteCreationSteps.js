const { Then, When } = require("@cucumber/cucumber");
import { NoteCreationScenario } from '../../../../ui/actions/gw/cc/NoteCreationScenario'

let noteCreationScenario = new NoteCreationScenario();

When(/^the user creates the note/, async function () {
    await noteCreationScenario.noteScenario();
});

Then(/^the note is added successfully/, async function () {
    await noteCreationScenario.validateAddedNote();
    
});  