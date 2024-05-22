import { ClaimNotes } from "../../../../ui/pages/gw/generated/claimsolutions/pages/claim/ClaimNotes.js";
import { ClaimMenuLinks } from "../../../../ui/pages/gw/generated/claimsolutions/pages/navigation/menuLinks/ClaimMenuLinks.js";
import { NewNoteWorksheet } from "../../../../ui/pages/gw/generated/claimsolutions/pages/other/NewNoteWorksheet.js";
import { NoteCreation_New } from "../../../actions/gw/cc/scenarioPages/notes/NoteCreation_New.js"
import world from "../../../util/gw/world.js"
import { t } from "testcafe"

let claimNotes = new ClaimNotes();
let claimMenuNotes = new ClaimMenuLinks();
let newNoteWorkSheet = new NewNoteWorksheet();
let noteCreation_New = new NoteCreation_New();

export class NoteCreationScenario{
    async noteSceneario() {
        await claimMenuNotes.menuLinksClaim_ClaimNotes.click();
        await claimNotes.notesSearchScreenNotesSearchScreen_NewNote.click();
        await newNoteWorkSheet.newNoteWorksheetNewNoteScreenNoteDetailDVTopic.selectOptionByLabel(world.dataMap.get('Topic'));
        await newNoteWorkSheet.newNoteWorksheetNewNoteScreenNoteDetailDVRelatedTo.selectOptionByLabel(world.dataMap.get('RelatedTO'));
        await noteCreation_New.newNoteWorksheetNewNoteScreenNoteDetailDVBody.getValue(world.dataMap.get('Text'));
        await newNoteWorkSheet.newNoteScreenUpdate.click()
    }
}