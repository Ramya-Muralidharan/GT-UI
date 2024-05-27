import { t } from "testcafe"
import { NewActivity_New } from "../../../../ui/actions/gw/cc/scenarioPages/other/NewActivity_New"

const newActivity_New = new NewActivity_New()

export class AddActivityScenario {
    async activityValidation() {
        t.ctx.subject = await newActivity_New.plannedActivities.component.textContent;
        console.log('Activity is added successfully:', t.ctx.subject)
        await t.expect(t.ctx.subject).eql('Autopilot - Action Required')
    }
}