
import { selectCoverage, enterInputField, selectDropdown} from './CoverageHelper'
import world from "../../../../util/gw/world"

export class HomeownersProduct {

    async coverageFilter() {
        if (!(world.coverageDataMap === undefined) && Array.from(world.coverageDataMap.keys()).length > 0) {
            const coverageKeys = Array.from(world.coverageDataMap.keys())
            for (const key of coverageKeys) {
                switch (key) {
                    case ('IdentityTheftProtection'):
                        console.log(`${key} is present`)
                        await selectCoverage('IdentityTheftProtection')
                        await selectDropdown('IdentityTheftProtectionLimit')
                        await selectDropdown('IdentityTheftProtectionDeductible')
                        break;
                    case ('LossAssessment'):
                        console.log(`${key} is present`)
                        await selectCoverage('LossAssessment')
                        await selectDropdown('LossAssessmentLimit')
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
