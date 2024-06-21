
import { selectCoverage, enterInputField, selectDropdown} from './CoverageHelper'
import world from "../../../../util/gw/world"

export class CommercialPropertyCoverage {

    async coverageFilter() {
        if (!(world.coverageDataMap === undefined) && Array.from(world.coverageDataMap.keys()).length > 0) {
            const coverageKeys = Array.from(world.coverageDataMap.keys())
            for (const key of coverageKeys) {
                switch (key) {
                    case ('EachLossCausedByWind'):
                        console.log(`${key} is present`)
                        await selectCoverage('EachLossCausedByWind')
                        await enterInputField('EachLossCausedByWindLimit')
                        await enterInputField('EachLossCausedByWindDeductiible')
                        break;
                    case ('OutsideObjectsAndStructures'):
                        console.log(`${key} is present`)
                        await selectCoverage('OutsideObjectsAndStructures')
                        await enterInputField('OutsideObjectsAndStructuresLimit')
                        await enterInputField('OutsideObjectsAndStructuresDeductible')
                        break;
                    case ('ContentsOfOtherStructures'):
                        console.log(`${key} is present`)
                        await selectCoverage('ContentsOfOtherStructures')
                        await selectDropdown('ContentsOfOtherStructuresLimit')
                        await enterInputField('ContentsOfOtherStructuresDeductible')
                        break;
                    case ('Terrorism'):
                        console.log(`${key} is present`)
                        await selectCoverage('Terrorism')
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
