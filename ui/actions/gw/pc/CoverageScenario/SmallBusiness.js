
import { selectCoverage, enterInputField, selectDropdown } from './CoverageHelper'
import world from "../../../../util/gw/world"
export class SmallBusiness {

    //To load the coverage data from json input and to perform action on provided coverage
    async coverageFilter() {
        if (!(world.coverageDataMap === undefined) && Array.from(world.coverageDataMap.keys()).length > 0) {
            const coverageKeys = Array.from(world.coverageDataMap.keys())
            for (const key of coverageKeys) {
                switch (key) {
                    case ('GeneralLiability'):
                        console.log(`${key} is present`)
                        await selectCoverage('GeneralLiability')
                        await selectDropdown('GeneralLiabilityOccurrenceLImit')
                        await selectDropdown('GeneralLiabilityAggregateLimit')
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