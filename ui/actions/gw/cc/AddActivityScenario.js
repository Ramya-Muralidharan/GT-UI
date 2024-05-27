import { t } from "testcafe"
import { NewActivity_New } from "../../../../ui/actions/gw/cc/scenarioPages/other/NewActivity_New"

const newActivity_New = new NewActivity_New()

export class AddActivityScenario {
    async activityValidation() {
        await t.expect(newActivity_New.plannedActivities.component.textContent).eql('Autopilot - Action Required')
    }
}