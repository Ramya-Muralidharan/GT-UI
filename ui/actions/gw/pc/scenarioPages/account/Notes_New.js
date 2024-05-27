import { PcfComponent} from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class Notes_New {
    topicDropdown = PcfSelectInput("#NewAccountNoteWorksheet-NewNoteScreen-NewNoteDV-Topic")
    securityLevelDropdown = PcfSelectInput("#NewAccountNoteWorksheet-NewNoteScreen-NewNoteDV-SecurityLevel")
    textbox = PcfComponent("#NewAccountNoteWorksheet-NewNoteScreen-NewNoteDV-Text > div > textarea")
    updateButton = PcfButton("#NewAccountNoteWorksheet-NewNoteScreen-NewNoteScreen_UpdateButton")
    noteAdded = PcfComponent("#AccountFile_Summary-AccountSummaryDashboard-NotesDetailViewTile-NotesDetailViewTile_DV-NoteTopicLabel0_button")
}
