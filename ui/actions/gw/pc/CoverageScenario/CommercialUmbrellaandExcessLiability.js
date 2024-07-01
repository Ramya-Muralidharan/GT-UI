
import { selectCoverage, textInput, selectInput } from './ActionHelper'
import world from "../../../../util/gw/world"

export class CommercialUmbrellaAccessliability {

    async coverageFilter() {
        t.ctx.module = 'Coverage'
        if (!(world.coverageDataMap === undefined) && Array.from(world.coverageDataMap.keys()).length > 0) {
            const coverageKeys = Array.from(world.coverageDataMap.keys())
            for (const key of coverageKeys) {
                switch (key) {
                    case ('UmbrellaLiability'):
                        console.log(`${key} is present`)
                        await selectInput('UmbrellaLiabilityOccurrenceLimit')
                        await selectInput('UmbrellaLiabilityAggregateLimit')
                        await selectInput('UmbrellaLiabilityProductandCompletedOperationsAggregateLImit')
                        await selectInput('UmbrellaLiabilityUmbrellaCoverageForm')
                        await selectInput('UmbrellaLiabilitySelfInsuredRetention')
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