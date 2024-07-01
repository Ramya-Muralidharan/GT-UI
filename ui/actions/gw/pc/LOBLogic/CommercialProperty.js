
import { selectCoverage, textInput, selectInput } from './ActionHelper'
import world from "../../../../util/gw/world"
import { t } from 'testcafe'

const pcfCategory = {
    selectInput: ['ContentsOfOtherStructuresLimit'],
    textInput: ['EachLossCausedByWindLimit', 'EachLossCausedByWindDeductiible', 'OutsideObjectsAndStructuresLimit', 'OutsideObjectsAndStructuresDeductible', 'ContentsOfOtherStructuresDeductible'],
    checkBox: ['EachLossCausedByWind', 'OutsideObjectsAndStructures', 'ContentsOfOtherStructures', 'Terrorism']
}

export class CommercialProperty {
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
}
