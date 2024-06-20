
import { LOBWizardStepGroupSubmissionWizard_Ext } from "../scenarioPages/navigation/submissionWizard/LOBWizardStepGroupSubmissionWizard_Ext"
import world from "../../../../util/gw/world"

const lOBWizardStepGroupSubmissionWizard_Ext = new LOBWizardStepGroupSubmissionWizard_Ext()
export class CommercialPropertyCoverage {

    async coverageFilter() {
        if (!(world.coverageDataMap === undefined) && Array.from(world.coverageDataMap.keys()).length > 0) {
            const coverageKeys = Array.from(world.coverageDataMap.keys())
            for (const key of coverageKeys) {
                switch (key) {
                    case ('EachLossCausedByWind'):
                        console.log(`${key} is present`)
                        await this.selectCoverage('EachLossCausedByWind')
                        await this.enterInputField('EachLossCausedByWindLimit')
                        await this.enterInputField('EachLossCausedByWindDeductiible')
                        break;
                    case ('OutsideObjectsAndStructures'):
                        console.log(`${key} is present`)
                        await this.selectCoverage('OutsideObjectsAndStructures')
                        await this.enterInputField('OutsideObjectsAndStructuresLimit')
                        await this.enterInputField('OutsideObjectsAndStructuresDeductible')
                        break;
                    case ('ContentsOfOtherStructures'):
                        console.log(`${key} is present`)
                        await this.selectCoverage('ContentsOfOtherStructures')
                        await this.selectDropdown('ContentsOfOtherStructuresLimit')
                        await this.enterInputField('ContentsOfOtherStructuresDeductible')
                        break;
                    case ('Terrorism'):
                        console.log(`${key} is present`)
                        await this.selectCoverage('Terrorism')
                        break;
                }
            }
        }
        else {
            console.log(`Coverage Data is ${world.coverageDataMap}`)
            throw new Error('world.coverageDataMap is undefined or empty')
        }
    }

    async selectCoverage(coverageName) {
        if (world.coverageDataMap.get(coverageName) == 'check' || world.coverageDataMap.get(coverageName) == 'update') {
            if (!(await lOBWizardStepGroupSubmissionWizard_Ext[coverageName].isChecked()))
                await lOBWizardStepGroupSubmissionWizard_Ext[coverageName].click()
        }
        if (world.coverageDataMap.get('coverageName') == 'uncheck' && (await lOBWizardStepGroupSubmissionWizard_Ext[coverageName].isChecked()))
            await lOBWizardStepGroupSubmissionWizard_Ext[coverageName].click()
    }

    async enterInputField(fieldName) {
        if (world.coverageDataMap.has(fieldName))
            await lOBWizardStepGroupSubmissionWizard_Ext[fieldName].setValue(world.coverageDataMap.get(fieldName))
    }

    async selectDropdown(fieldName) {
        if (world.coverageDataMap.has(fieldName))
            await lOBWizardStepGroupSubmissionWizard_Ext[fieldName].selectOptionByLabel(world.coverageDataMap.get(fieldName))
    }
}
