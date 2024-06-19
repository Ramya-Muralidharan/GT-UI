
import { LOBWizardStepGroupSubmissionWizard_Ext } from "../scenarioPages/navigation/submissionWizard/LOBWizardStepGroupSubmissionWizard_Ext"
import world from "../../../../util/gw/world"

const lOBWizardStepGroupSubmissionWizard_Ext = new LOBWizardStepGroupSubmissionWizard_Ext()

let coverageDataMap = new Map();
export class CommercialPropertyCoverage {

    async coverageFilter() {
        coverageDataMap = world.dataMap.get('Coverage')
        const coverageKeys = Array.from(coverageDataMap.keys())
        for (const key of coverageKeys) {
            switch(key){
                case('EachLossCausedByWind'):
                console.log(`${key} is present`)
                await this.eachLossCausedByWind(coverageDataMap)
                case('OutsideObjectsAndStructures'):
                console.log(`${key} is present`)
                await this.outsideObjectsAndStructures(coverageDataMap)
                case('Terrorism'):
                console.log(`${key} is present`)
                await this.terrorism(coverageDataMap)
            }
        }
    }

    async eachLossCausedByWind(coverageDataMap) {
        if (coverageDataMap.get('EachLossCausedByWind') == 'check' || coverageDataMap.get('EachLossCausedByWind') == 'update')
        {
            if(!(await lOBWizardStepGroupSubmissionWizard_Ext.EachLossCausedByWind.isChecked()))
            await lOBWizardStepGroupSubmissionWizard_Ext.EachLossCausedByWind.click()
         if (coverageDataMap.has('EachLossCausedByWindLimit'))
            await lOBWizardStepGroupSubmissionWizard_Ext.EachLossCausedByWindLimit.setValue(coverageDataMap.get('EachLossCausedByWindLimit'))
         if (coverageDataMap.has('EachLossCausedByWindDeductible'))
            await lOBWizardStepGroupSubmissionWizard_Ext.EachLossCausedByWindDeductible.setValue(coverageDataMap.get('EachLossCausedByWindDeductible'))
        }
        if (coverageDataMap.get('EachLossCausedByWind') == 'uncheck' && (await lOBWizardStepGroupSubmissionWizard_Ext.EachLossCausedByWind.isChecked()))
        await lOBWizardStepGroupSubmissionWizard_Ext.EachLossCausedByWind.click()           
    }

    async outsideObjectsAndStructures(coverageDataMap) {
        if (coverageDataMap.get('OutsideObjectsAndStructures') == 'check' || coverageDataMap.get('OutsideObjectsAndStructures') == 'update')
        {
            if(!(await lOBWizardStepGroupSubmissionWizard_Ext.OutsideObjectsAndStructures.isChecked()))
            await lOBWizardStepGroupSubmissionWizard_Ext.OutsideObjectsAndStructures.click()
         if (coverageDataMap.has('OutsideObjectsAndStructuresLimit'))
            await lOBWizardStepGroupSubmissionWizard_Ext.OutsideObjectsAndStructuresLimit.setValue(coverageDataMap.get('OutsideObjectsAndStructuresLimit'))
         if (coverageDataMap.has('OutsideObjectsAndStructuresDeductible'))
            await lOBWizardStepGroupSubmissionWizard_Ext.OutsideObjectsAndStructuresDeductible.setValue(coverageDataMap.get('OutsideObjectsAndStructuresDeductible'))
        }
        if (coverageDataMap.get('OutsideObjectsAndStructures') == 'uncheck' && (await lOBWizardStepGroupSubmissionWizard_Ext.OutsideObjectsAndStructures.isChecked()))
        await lOBWizardStepGroupSubmissionWizard_Ext.OutsideObjectsAndStructures.click()    
    }

    async terrorism(coverageDataMap) {
        if (coverageDataMap.get('Terrorism') == 'check' && !(await lOBWizardStepGroupSubmissionWizard_Ext.Terrorism.isChecked()))
            await lOBWizardStepGroupSubmissionWizard_Ext.Terrorism.click()
        if (coverageDataMap.get('Terrorism') == 'uncheck' && (await lOBWizardStepGroupSubmissionWizard_Ext.Terrorism.isChecked()))
            await lOBWizardStepGroupSubmissionWizard_Ext.Terrorism.click()
    }
}
