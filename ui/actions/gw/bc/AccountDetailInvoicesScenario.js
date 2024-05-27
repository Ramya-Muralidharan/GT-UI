import { AccountDetailInvoices } from '../../../../ui/pages/gw/generated/billingsolutions/pages/accountGroup/AccountDetailInvoices'
import { AccountDetailInvoices_New } from '../../../../ui/actions/gw/bc/scenarioPages/navigation/AccountDetailInvoices_New'
import { dateFunction } from "../../../../ui/util/gw/helper"
import { t, Selector } from 'testcafe'

const accountDetailInvoices_New = new AccountDetailInvoices_New();

export class AccountDetailInvoicesScenario{

    async setInvoiceDate(billDateValue){
        let accountDetailInvoices = new AccountDetailInvoices();
        await accountDetailInvoices.invoiceDetailDV_tbEdit.click();
        await accountDetailInvoices.accountInvoiceInformationInputSetInvoiceDate.setValue(dateFunction(billDateValue));
        await accountDetailInvoices.invoiceDetailDV_tbUpdate.click();
        await t.wait(5000);
    }

    async validateBilledDate(billDateValue){
        const actualBillDateValue = await accountDetailInvoices_New.accountDetailInvoices_BilledDateUpdated.component.innerText;
        await t.expect(actualBillDateValue).eql(dateFunction(billDateValue, 'MM/DD/YYYY'));
    }

    async validateInvoiceResentMessageDisplayed(){
        const accountDetailInvoices = new AccountDetailInvoices()
        await accountDetailInvoices.accountDetailInvoicesScreenAccountDetailInvoices_InvoiceSentAlertBar.isAvailable();
    }
}