import { PcfComponent } from '@gtui/gt-ui-framework';
 
import { Selector } from 'testcafe';
 
export class NoteCreation_New {
    newNoteWorksheetNewNoteScreenNoteDetailDVBody = PcfComponent('#NewNoteWorksheet-NewNoteScreen-NoteDetailDV-Body')
    addedNoteText = PcfComponent('#ClaimSummary-ClaimSummaryScreen-NotesLV-0-Body > div > div')
}