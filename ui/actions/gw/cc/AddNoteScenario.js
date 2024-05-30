import { ClaimNotes } from "../../../pages/gw/generated/claimsolutions/pages/claim/ClaimNotes.js";
import { ClaimMenuLinks } from "../../../pages/gw/generated/claimsolutions/pages/navigation/menuLinks/ClaimMenuLinks.js";
import { NewNoteWorksheet } from "../../../pages/gw/generated/claimsolutions/pages/other/NewNoteWorksheet.js";
import { NoteCreation_New } from "./scenarioPages/notes/NoteCreation_New.js"
import world from "../../../util/gw/world.js"
import { t, Selector } from "testcafe"

let claimNotes = new ClaimNotes();
let claimMenuNotes = new ClaimMenuLinks();
let newNoteWorkSheet = new NewNoteWorksheet();
let noteCreation_New = new NoteCreation_New();

export class AddNoteScenario{
    async noteScenario() {
        await claimMenuNotes.menuLinksClaim_ClaimNotes.click(); 
        await claimNotes.notesSearchScreenNotesSearchScreen_NewNote.click();
        await newNoteWorkSheet.newNoteWorksheetNewNoteScreenNoteDetailDVTopic.selectOptionByLabel(world.dataMap.get('Topic'));
        await newNoteWorkSheet.newNoteWorksheetNewNoteScreenNoteDetailDVRelatedTo.selectOptionByLabel(world.dataMap.get('RelatedTO'));
        await t.typeText(newNoteWorkSheet.newNoteTextArea.component, world.dataMap.get('Text') );
        await newNoteWorkSheet.newNoteScreenUpdate.click()
    }

    async validateAddedNote(){
        await t.expect(noteCreation_New.addedNoteText.component.textContent).eql(world.dataMap.get('Text'));
    }
}