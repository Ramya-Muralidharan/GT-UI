
import { selectCoverage, textInput, selectInput } from './ActionHelper'
import { USAPersonalAuto_New } from '../scenarioPages/other/USAPersonalAuto_New'
import world from "../../../../util/gw/world"
import { t } from 'testcafe'

const usaPersonalAuto_New = new USAPersonalAuto_New()

const pcfCategory = {
    selectInput: ['BodyType', 'LicenseState', 'PropertyProtectionInsurancePropertyProtectionLimits', 'LiabilityBodilyInjuryAndPropertyDamageAutoLiabilityPackage'],
    textInput: ['VIN', 'Year', 'Make', 'Model'],
    checkBox: ['LiabilityBodilyInjuryAndPropertyDamage', 'PropertyProtectionInsurance']
}
export class USAPersonalAuto {

    //To load the coverage data from json input and to perform action on provided coverage
    async coverageFilter() {
        if (!(world.coverageDataMap === undefined) && Array.from(world.coverageDataMap.keys()).length > 0) {
            t.ctx.module = 'Coverage'
            console.log(`The current module is ${t.ctx.module}`)

            for (const [key, value] of world.coverageDataMap) {
                if (pcfCategory.selectInput.includes(key)) {
                    console.log(`${key} is present`)
                    await selectInput(key)
                }
                else if (pcfCategory.textInput.includes(key)) {
                    console.log(`${key} is present`)
                    await textInput(key)
                }
                else if (pcfCategory.checkBox.includes(key)) {
                    console.log(`${key} is present`)
                    await selectCoverage(key)
                }
            }
        }
        else {
            console.log(`Coverage Data is ${world.coverageDataMap}`)
            throw new Error('world.coverageDataMap is undefined or empty')
        }
    }

    //To load vehicle data from json input and add single or multiple vehicle
    async addVehicle() {
        if (!(world.vehicleDataMap === undefined) && Array.from(world.vehicleDataMap.keys()).length > 0) {
            t.ctx.module = 'Vehicles'
            console.log(`The current module is ${t.ctx.module}`)
            let i = 0

            for (const [key, value] of world.vehicleDataMap) {
                for (const dataKey of Object.keys(value)) {
                    t.ctx.VehicleData = value[dataKey]
                    if (pcfCategory.selectInput.includes(dataKey)) {
                        console.log(`${dataKey} is present`)
                        await selectInput(dataKey)
                    }
                    else if (pcfCategory.textInput.includes(dataKey)) {
                        console.log(`${dataKey} is present`)
                        await textInput(dataKey)
                    }
                }
                await usaPersonalAuto_New.UALPersonalVehiclePopup_Ok.click()
                i++
                if (i < world.vehicleDataMap.size) {
                    await usaPersonalAuto_New.SubmissionWizard_AddPersonalVehicle.click()
                    console.log("Adding next Vehicle")
                }
            }
        }
        else {
            console.log(`Vehicle Data is ${world.vehicleDataMap}`)
            throw new Error('world.vehicleDataMap is undefined or empty')
        }
    }
}
