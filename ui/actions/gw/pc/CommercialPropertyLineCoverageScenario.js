import { CommercialPropertyLineCoverage_New } from "./scenarioPages/policy/CommercialPropertyLineCoverage_New"

const commercialPropertyLineCoverage_New=new CommercialPropertyLineCoverage_New()

export class CommercialPropertyLineCoverageScenario {
    async addFluctuationInRawMaterialValues(nthoption){
        await commercialPropertyLineCoverage_New.propertyLineCov_FluctuationinRawMaterialValues.click()
        await commercialPropertyLineCoverage_New.propertyLineCov_FluctuationinRawMaterialValues_Limit.selectNthOption(Number.parseInt(nthoption))
    }

    async addFursJewelleryWatchesAndPreciousStones(nthoption) {
        await commercialPropertyLineCoverage_New.propertyLineCov_FursJewelleryWatchesandPreciousStones.click()
        await commercialPropertyLineCoverage_New.propertyLineCov_FursJewelleryWatchesandPreciousStones_Limit.selectNthOption(Number.parseInt(nthoption))
    }
}