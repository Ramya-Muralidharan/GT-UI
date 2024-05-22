import { NewAccount } from '../../../pages/gw/generated/policysolutions/pages/account/NewAccount.js'
import { OrganizationBranchSearchPopup } from '../../../pages/gw/generated/policysolutions/pages/popup/Organization/OrganizationBranchSearchPopup.js'
import { generateRandomStringFunction } from '../../../util/gw/helper'
import { Summary_New } from "./scenarioPages/account/Summary_New.js"
import { OrganizationSearchPopup_New } from "./scenarioPages/popup/Organization/OrganizationSearchPopup_New.js"
import { NewAccount_New } from "../../../../ui/actions/gw/pc/scenarioPages/account/NewAccount_New.js"
import { t } from 'testcafe'
import { AccountTabBar_New } from './scenarioPages/navigation/tabBar/AccountTabBar_New.js'
import { AccountTabBar } from '../../../../ui/pages/gw/generated/policysolutions/pages/navigation/tabBar/AccountTabBar.js'
import { OrganizationBranchSearchPopup_New } from './scenarioPages/popup/Organization/OrganizationBranchSearchPopup_New.js'
import world from "../../../../ui/util/gw/world"

const accountTabBar_New = new AccountTabBar_New()
const accountTabBar = new AccountTabBar()
const newAccount = new NewAccount()
const organizationBranchSearchPopup = new OrganizationBranchSearchPopup()
const organizationBranchSearchPopup_New = new OrganizationBranchSearchPopup_New()
const newAccount_New = new NewAccount_New()
const summary_New = new Summary_New()
const organizationSearchPopup_New = new OrganizationSearchPopup_New()

export class AccountScenario {

    async personalAccountCreation() {
        console.log("***Personal Line Account creation starts***")
        await accountTabBar_New.accountTab.click()
        await accountTabBar.accountTabAccountTab_NewAccount.click()
        await newAccount.newAccountNewAccountScreenNewAccountSearchDVGlobalContactNameInputSetName.setValue(generateRandomStringFunction(3))
        await newAccount.newAccountNewAccountScreenNewAccountSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
        await newAccount.newAccountScreenNewAccountButton.click()
        await newAccount.newAccountButtonNewAccount_Person.click()
        await newAccount_New.CreateAccount_FirstName.setValue(world.dataMap.generateRandomStringFunction(5))
        await newAccount_New.CreateAccount_LastName.setValue(world.dataMap.generateRandomStringFunction(5))
        await newAccount_New.CreateAccount_State.selectOptionByLabel(world.dataMap.get('State'));
        await newAccount_New.zipCode.setValue(world.dataMap.get('ZIPCode'));
        await newAccount_New.CreateAccount_AddressLine1.setValue(world.dataMap.get('Address1'));
        await newAccount_New.city.setValue(world.dataMap.get('City'));
        await newAccount_New.CreateAccount_AddressType.click();
        await newAccount_New.CreateAccount_AddressType.selectOptionByLabel(world.dataMap.get('AddressType'))
        await organizationBranchSearchPopup_New.organizationTextBox.click();
        //await organizationBranchSearchPopup_New.organizationTextBox.setValue(world.dataMap.get('Organization'));
        await organizationBranchSearchPopup.organizationBranchSearchPopupOrganizationBranchSearchScreenOrganizationBranchSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
        await organizationBranchSearchPopup_New.organizationSearchPopup_ProducerCode.selectFirstOptionWithValue()
        await newAccount_New.CreateAccount_Update.click()
        t.ctx.personalAccountNumber = await summary_New.accountDetailsDetailViewTile_DVAccountNumber.component.innerText
        console.log("The newly created Personal Line Account Number is: " + t.ctx.personalAccountNumber)
    }

    async createCommercialAccount() {
        await newAccount_New.company_Name.setValue(generateRandomStringFunction(5))
        await newAccount_New.acc_Search_btn.click()
        await newAccount_New.CreateNewAccount_Btn.click()
        //selecting Company
        await newAccount_New.newCompanyAccount_Btn.click()
        await newAccount_New.acc_State_Dropdown.selectOptionByLabel(world.dataMap.get('State'))
        await newAccount_New.acc_zipcode_TxtBox.setValue(world.dataMap.get('ZIPCode'))
        await newAccount_New.acc_AddressLine1_TxtBox.setValue(world.dataMap.get('Address1'))
        await newAccount_New.acc_AddressType_Dropdown.selectOptionByLabel(world.dataMap.get('AddressType'))
    }

    async createPersonalAccount() {
        await newAccount_New.company_Name.setValue(generateRandomStringFunction(5))
        await newAccount_New.acc_Search_btn.click()
        await newAccount_New.CreateNewAccount_Btn.click()
        //selecting Person
        await newAccount.newAccountButtonNewAccount_Person.click()
        await newAccount_New.CreateAccount_FirstName.setValue(generateRandomStringFunction(5))
        await newAccount_New.CreateAccount_LastName.setValue(generateRandomStringFunction(5))
        await newAccount_New.acc_State_Dropdown.selectOptionByLabel(world.dataMap.get('State'))
        await newAccount_New.acc_zipcode_TxtBox.setValue(world.dataMap.get('ZIPCode'))
        await newAccount_New.acc_AddressLine1_TxtBox.setValue(world.dataMap.get('Address1'))
        await newAccount_New.city.setValue(world.dataMap.get('City'));
        await newAccount_New.CreateAccount_AddressType.click();
        await newAccount_New.acc_AddressType_Dropdown.selectOptionByLabel(world.dataMap.get('AddressType'))
    }

    async organizationSearchPopup() {
        console.log("On Organizations Screen")
        await organizationSearchPopup_New.organisationSearch_Btn.click()
        await organizationSearchPopup_New.organisationName_TextInput.setValue(world.dataMap.get('Organization'))
        await organizationSearchPopup_New.orgName_Search_Btn.click()
        await organizationSearchPopup_New.orgSelect_Btn.click()
    }

    async createAccountNumber() {
        await newAccount_New.accUpdate_Btn.click()
        console.log('On Account Summary screen')
        t.ctx.AccountNumber = await summary_New.accountDetailsDetailViewTile_DVAccountNumber.component.innerText
        console.log("The newly created commercial Account Number is: " + t.ctx.AccountNumber)
    }
}