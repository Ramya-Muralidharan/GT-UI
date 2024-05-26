import { ContactTabBar } from "../../../pages/gw/generated/policysolutions/pages/navigation/tabBar/ContactTabBar"
import { ContactSearch } from "../../../pages/gw/generated/policysolutions/pages/search/ContactSearch"
import { ContactSearch_New } from "../../../actions/gw/pc/scenarioPages/search/ContactSearch_New"
import world from "../../../util/gw/world"
import { t } from 'testcafe'

const contactTabBar = new ContactTabBar();
const contactSearch = new ContactSearch();
const contactSearch_New = new ContactSearch_New()

export class SearchContactScenario {
    async contactSearch() {
        await contactSearch_New.contactMenu.click()
        await contactTabBar.contactTabSearch.click()
        await contactSearch.contactSearchScreenContactType.selectOptionByLabel(world.dataMap.get('Type'));
        await contactSearch.contactSearchContactSearchScreenBasicContactInfoInputSetGlobalPersonNameInputSetFirstName.setValue(t.ctx.FirstName)
        await contactSearch.contactSearchContactSearchScreenBasicContactInfoInputSetGlobalPersonNameInputSetLastName.setValue(t.ctx.LastName)
        await contactSearch.contactSearchContactSearchScreenSearchAndResetInputSetSearchLinksInputSetSearch.click()
    }

    async contactValidation() {
        t.ctx.ContactSearchName = await contactSearch_New.contactSearchName.component.textContent
        console.log("Contact search sucessfully" + t.ctx.ContactSearchName)
        const name = t.ctx.FirstName + " " + t.ctx.LastName
        await t.expect(t.ctx.ContactSearchName).eql(name)
    }
}