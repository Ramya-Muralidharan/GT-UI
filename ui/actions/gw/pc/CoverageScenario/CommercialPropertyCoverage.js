
import { selectCoverage, textInput, selectInput } from './ActionHelper'
import world from "../../../../util/gw/world"

export class CommercialPropertyCoverage {

    //To load the coverage data from json input and to perform action on provided coverage
    async coverageFilter() {
        t.ctx.module = 'Coverage'
        if (!(world.coverageDataMap === undefined) && Array.from(world.coverageDataMap.keys()).length > 0) {
            const coverageKeys = Array.from(world.coverageDataMap.keys())
            for (const key of coverageKeys) {
                switch (key) {
                    case ('EachLossCausedByWind'):
                        console.log(`${key} is present`)
                        await selectCoverage('EachLossCausedByWind')
                        await textInput('EachLossCausedByWindLimit')
                        await textInput('EachLossCausedByWindDeductiible')
                        break;
                    case ('OutsideObjectsAndStructures'):
                        console.log(`${key} is present`)
                        await selectCoverage('OutsideObjectsAndStructures')
                        await textInput('OutsideObjectsAndStructuresLimit')
                        await textInput('OutsideObjectsAndStructuresDeductible')
                        break;
                    case ('ContentsOfOtherStructures'):
                        console.log(`${key} is present`)
                        await selectCoverage('ContentsOfOtherStructures')
                        await selectInput('ContentsOfOtherStructuresLimit')
                        await textInput('ContentsOfOtherStructuresDeductible')
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
