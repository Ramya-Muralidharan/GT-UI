
import { selectCoverage, enterInputField, selectDropdown } from './CoverageHelper'
import world from "../../../../util/gw/world"

export class CommercialUmbrellaAccessliability {

    async coverageFilter() {
        if (!(world.coverageDataMap === undefined) && Array.from(world.coverageDataMap.keys()).length > 0) {
            const coverageKeys = Array.from(world.coverageDataMap.keys())
            for (const key of coverageKeys) {
                switch (key) {
                    case ('Occurrence Limit'):
                        console.log(`${key} is present`)
                        await selectDropdown('OccurrenceLimit')
                        break;
                    case ('Aggregate Limit'):
                        console.log(`${key} is present`)
                        await selectDropdown('AggregateLimit')
                        break;
                    case ('Product and Completed Operations Aggregate LImit'):
                        console.log(`${key} is present`)
                        await selectDropdown('ProductandCompletedOperationsAggregateLImit')
                        break;
                    case ('Umbrella Coverage Form'):
                        console.log(`${key} is present`)
                        await selectDropdown('UmbrellaCoverageForm')
                        break;
                    case ('Self Insured Retention'):
                        console.log(`${key} is present`)
                        await selectDropdown('SelfInsuredRetention')
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