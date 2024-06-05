import { ContactTabBar } from "../../../pages/gw/generated/policysolutions/pages/navigation/tabBar/ContactTabBar"
import { ContactSearch_Ext } from "../../../actions/gw/pc/scenarioPages/search/ContactSearch_Ext"
import world from "../../../util/gw/world"
import { t } from 'testcafe'

const contactTabBar = new ContactTabBar();
const contactSearch_Ext = new ContactSearch_Ext()

export class SearchContactScenario {
    async contactSearch() {
        await contactSearch_Ext.contactMenu.click()
        await contactTabBar.contactTabSearch.click()
        await contactSearch_Ext.contactSearchScreenContactType.selectOptionByLabel(world.dataMap.get('Type'));
        await contactSearch_Ext.contactSearchContactSearchScreenBasicContactInfoInputSetGlobalPersonNameInputSetFirstName.setValue(t.ctx.FirstName)
        await contactSearch_Ext.contactSearchContactSearchScreenBasicContactInfoInputSetGlobalPersonNameInputSetLastName.setValue(t.ctx.LastName)
        await contactSearch_Ext.contactSearchContactSearchScreenSearchAndResetInputSetSearchLinksInputSetSearch.click()
    }

    async contactValidation() {
        t.ctx.ContactSearchName = await contactSearch_Ext.contactSearchName.component.textContent
        console.log("Contact search sucessfully" + t.ctx.ContactSearchName)
        const name = t.ctx.FirstName + " " + t.ctx.LastName
        await t.expect(t.ctx.ContactSearchName).eql(name)
    }
}