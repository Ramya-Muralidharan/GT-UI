import { AddActivityPage_New } from '../../../../ui/actions/gw/pc/scenarioPages/account/AddActivityPage_New'
import {t, Selector} from "testcafe"

const addActivityPage_New = new AddActivityPage_New()

export class AddActivityScenario {
    async activityValidation() {
        await t.expect(addActivityPage_New.activitiesAdded.component.textContent).eql('Meet with Insured')
    }

    async radioOptionMandatory(value) {
        await t.click(Selector('#NewActivityWorksheet-NewActivityScreen-NewActivityDV-Mandatory span').withText(value));
    }

    async radioOptionRecurring(value) {
        await t.click(Selector('#NewActivityWorksheet-NewActivityScreen-NewActivityDV-Recurring_Input span').withText(value));
    }

}