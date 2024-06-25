
import { selectCoverage, enterInputField, selectDropdown } from './CoverageHelper'
import world from "../../../../util/gw/world"

export class CommercialUmbrellaAccessliability {

    async coverageFilter() {
        if (!(world.coverageDataMap === undefined) && Array.from(world.coverageDataMap.keys()).length > 0) {
            const coverageKeys = Array.from(world.coverageDataMap.keys())
            for (const key of coverageKeys) {
                switch (key) {
                    case ('UmbrellaLiability'):
                        console.log(`${key} is present`)
                        await selectDropdown('UmbrellaLiabilityOccurrenceLimit')
                        await selectDropdown('UmbrellaLiabilityAggregateLimit')
                        await selectDropdown('UmbrellaLiabilityProductandCompletedOperationsAggregateLImit')
                        await selectDropdown('UmbrellaLiabilityUmbrellaCoverageForm')
                        await selectDropdown('UmbrellaLiabilitySelfInsuredRetention')
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