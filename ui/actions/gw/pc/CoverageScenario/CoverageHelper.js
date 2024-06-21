import { LOBWizardStepGroupSubmissionWizard_Ext } from "../scenarioPages/navigation/submissionWizard/LOBWizardStepGroupSubmissionWizard_Ext"
import world from "../../../../util/gw/world"

const lOBWizardStepGroupSubmissionWizard_Ext = new LOBWizardStepGroupSubmissionWizard_Ext()

export async function selectCoverage(coverageName) {
    if (world.coverageDataMap.get(coverageName) == 'check' || world.coverageDataMap.get(coverageName) == 'update') {
        if (!(await lOBWizardStepGroupSubmissionWizard_Ext[coverageName].isChecked()))
            await lOBWizardStepGroupSubmissionWizard_Ext[coverageName].click()
    }
    if (world.coverageDataMap.get('coverageName') == 'uncheck' && (await lOBWizardStepGroupSubmissionWizard_Ext[coverageName].isChecked()))
        await lOBWizardStepGroupSubmissionWizard_Ext[coverageName].click()
}

export async function enterInputField(fieldName) {
    if (world.coverageDataMap.has(fieldName))
        await lOBWizardStepGroupSubmissionWizard_Ext[fieldName].setValue(world.coverageDataMap.get(fieldName))
}

export async function selectDropdown(fieldName) {
    if (world.coverageDataMap.has(fieldName))
        await lOBWizardStepGroupSubmissionWizard_Ext[fieldName].selectOptionByLabel(world.coverageDataMap.get(fieldName))
}