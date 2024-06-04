import { AccountDetailInvoices } from '../../../../ui/pages/gw/generated/billingsolutions/pages/accountGroup/AccountDetailInvoices'
import { AccountDetailInvoices_Ext } from '../../../../ui/actions/gw/bc/scenarioPages/navigation/AccountDetailInvoices_Ext'
import { dateFunction } from "../../../../ui/util/gw/helper"
import { t} from 'testcafe'

const accountDetailInvoices_Ext = new AccountDetailInvoices_Ext();
const accountDetailInvoices = new AccountDetailInvoices();

export class AccountDetailInvoicesScenario{

    async setInvoiceDate(billDateValue){
        await accountDetailInvoices.invoiceDetailDV_tbEdit.click();
        await accountDetailInvoices.accountInvoiceInformationInputSetInvoiceDate.setValue(dateFunction(billDateValue));
        await accountDetailInvoices.invoiceDetailDV_tbUpdate.click();
        await t.wait(5000);
    }

    async validateBilledDate(billDateValue){
        await t.expect(accountDetailInvoices_Ext.accountDetailInvoices_BilledDateUpdated.component.innerText).eql(dateFunction(billDateValue, 'MM/DD/YYYY'));
    }

    async validateInvoiceResentMessageDisplayed(){
        await accountDetailInvoices.accountDetailInvoicesScreenAccountDetailInvoices_InvoiceSentAlertBar.isAvailable();
    }
}