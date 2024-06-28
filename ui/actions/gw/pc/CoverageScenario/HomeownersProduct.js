
import { selectCoverage, textInput, selectInput } from './ActionHelper'
import world from "../../../../util/gw/world"
export class HomeownersProduct {

    //To load the coverage data from json input and to perform action on provided coverage
    async coverageFilter() {
        t.ctx.module = 'Coverage'
        if (!(world.coverageDataMap === undefined) && Array.from(world.coverageDataMap.keys()).length > 0) {
            const coverageKeys = Array.from(world.coverageDataMap.keys())
            for (const key of coverageKeys) {
                switch (key) {
                    case ('IdentityTheftProtection'):
                        console.log(`${key} is present`)
                        await selectCoverage('IdentityTheftProtection')
                        await selectInput('IdentityTheftProtectionLimit')
                        await selectInput('IdentityTheftProtectionDeductible')
                        break;
                    case ('LossAssessment'):
                        console.log(`${key} is present`)
                        await selectCoverage('LossAssessment')
                        await selectInput('LossAssessmentLimit')
                        break;
                    case ('FirstAid'):
                        console.log(`${key} is present`)
                        await selectCoverage('FirstAid')
                        break;
                }
            }
        }
        else {
            console.log(`Coverage Data is ${world.coverageDataMap}`)
            throw new Error('world.coverageDataMap is undefined or empty')
        }
    }
}
