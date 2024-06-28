import { LOBWizardStepGroupSubmissionWizard_Ext } from "../scenarioPages/navigation/submissionWizard/LOBWizardStepGroupSubmissionWizard_Ext"
import { USAPersonalAuto_New } from "../scenarioPages/other/USAPersonalAuto_New";
import world from "../../../../util/gw/world"
import { t } from "testcafe";

const lOBWizardStepGroupSubmissionWizard_Ext = new LOBWizardStepGroupSubmissionWizard_Ext()
const uSAPersonalAuto_New = new USAPersonalAuto_New()

const ModIdentifier = {
    coverage: lOBWizardStepGroupSubmissionWizard_Ext,
    vehicle: uSAPersonalAuto_New
};

//Function to check and uncheck coveareg checkbox
export async function selectCoverage(coverageName) {
    const covgAction = world.coverageDataMap.get(coverageName)
    if (covgAction === 'check' || covgAction === 'update') {
        if (!(await ModIdentifier.coverage[coverageName].isChecked()))
            await ModIdentifier.coverage[coverageName].click()
    }
    if (covgAction === 'uncheck' && (await ModIdentifier.coverage[coverageName].isChecked()))
        await ModIdentifier.coverage[coverageName].click()
}

//Fucntion to type in coverage input box
export async function textInput(fieldName) {
    switch (t.ctx.module) {
        case ('Coverage'):
            await ModIdentifier.coverage[fieldName].setValue(world.coverageDataMap.get(fieldName))
            break;
        case ('Vehicles'):
            await ModIdentifier.vehicle[fieldName].setValue(t.ctx.Data)
            break;
        default:
            throw new Error('Incorrect module provided')
    }
}

//Function to select value from dropdown by label
export async function selectInput(fieldName) {
    switch (t.ctx.module) {
        case ('Coverage'):
            await ModIdentifier.coverage[fieldName].selectOptionByLabel(world.coverageDataMap.get(fieldName))
            break;
        case ('Vehicles'):
            await ModIdentifier.vehicle[fieldName].selectOptionByLabel(t.ctx.Data)
            break;
        default:
            throw new Error('Incorrect module provided')
    }

}