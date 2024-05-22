const { Then } = require("@cucumber/cucumber");
import { NoteCreationScenario } from '../../../../ui/actions/gw/cc/NoteCreationScenario'

let noteCreationScenario = new NoteCreationScenario();

Then(/^the note is added successfully/, async function () {
    await noteCreationScenario.noteSceneario();
});  