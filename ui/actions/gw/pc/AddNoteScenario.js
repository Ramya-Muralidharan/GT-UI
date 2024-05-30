import { AccountMenuActions } from "../../../../ui/pages/gw/generated/policysolutions/pages/navigation/menuActions/AccountMenuActions"
import { Notes_New } from "../../../../ui/actions/gw/pc/scenarioPages/account/Notes_New"
import world from "../../../../ui/util/gw/world"
import { t,Selector } from "testcafe"

let accountMenuActions = new AccountMenuActions()
const notes_New = new Notes_New()

export class AddNoteScenario {

    async createNote() {
        await accountMenuActions.accountFileAccountFileMenuActions.click()
        await accountMenuActions.accountFileMenuActions_CreateAccountFileMenuActions_NewNote.click()
        await notes_New.topicDropdown.selectOptionByLabel(world.dataMap.get("Topic"))
        await notes_New.securityLevelDropdown.selectOptionByLabel(world.dataMap.get("SecurityLevel"))
        await t.typeText(notes_New.textbox.component, world.dataMap.get("Text"))
        await notes_New.updateButton.click()
    }

    async validateNote() {
        await t.expect(await notes_New.noteAdded.component.textContent).eql('General')
    }
}



