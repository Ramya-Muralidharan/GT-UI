import { AddActivityPage_New } from '../../../../ui/actions/gw/pc/scenarioPages/account/AddActivityPage_New'
import {t, Selector} from "testcafe"

const addActivityPage_New = new AddActivityPage_New()

export class AddActivityScenario {
    async activityValidation() {
        t.ctx.activityName = await addActivityPage_New.activitiesAdded.component.textContent;
        console.log('Activity is added successfully:', t.ctx.activityName)
        await t.expect(t.ctx.activityName).eql('Meet with Insured')
    }

    async radioOptionMandatory(value) {
        await t.click(Selector('#NewActivityWorksheet-NewActivityScreen-NewActivityDV-Mandatory span').withText(value));
    }

    async radioOptionRecurring(value) {
        await t.click(Selector('#NewActivityWorksheet-NewActivityScreen-NewActivityDV-Recurring_Input span').withText(value));
    }

}