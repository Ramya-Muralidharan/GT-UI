import { AddressBookTabBar } from "../../../../ui/pages/gw/generated/claimsolutions/pages/navigation/tabBar/AddressBookTabBar.js"
import { AddressBookSearch } from "../../../../ui/pages/gw/generated/claimsolutions/pages/addressBook/AddressBookSearch.js"
import { AddressBookTabBar_New } from "../../../../ui/actions/gw/cc/scenarioPages/navigation/tabBar/AddressBookTabBar_New.js"
import world from "../../../util/gw/world.js"
import { t } from 'testcafe'

const addressBookTabBar = new AddressBookTabBar();
const addressBookSearch = new AddressBookSearch();
const addressBookTabBar_New = new AddressBookTabBar_New()

export class SearchContactScenario {
    async searchContact() {
        await addressBookTabBar.tabBarAddressBookTab.click()
        await addressBookSearch.addressBookSearchDVContactSubtype.selectOptionByLabel(world.dataMap.get('Type'));
        await addressBookSearch.addressBookSearchAddressBookSearchScreenAddressBookSearchDVNameInputSetGlobalContactNameInputSetName.setValue(world.dataMap.get('LastName'));
        await addressBookSearch.addressBookSearchAddressBookSearchScreenAddressBookSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
    }
    async searchValidation() {        
        await t.expect(addressBookTabBar_New.addressBookTabNameSearch.component.textContent).eql('driver test')
    }
}