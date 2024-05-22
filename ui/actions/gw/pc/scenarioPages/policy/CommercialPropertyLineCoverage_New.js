import { PcfTextInput, PcfButton , PcfSelectInput} from '@gtui/gt-ui-framework';

export class CommercialPropertyLineCoverage_New {

    propertyLineCov_PropertyOffPremises = PcfButton("[aria-label='Property Off Premises'] [id$='checkbox']")
	propertyLineCov_OutsideObjectsandStructures = PcfButton("[aria-label='Outside Objects and Structures'] [id$='checkbox']")
	propertyLineCov_OutsideObjectsandStructures_Limit = PcfTextInput("[aria-label='Outside Objects and Structures'] [id$='CovPatternInputGroup-0-CovTermInputSet-CovTermDirectInputSet-DirectTermInput']")
	propertyLineCov_OutsideObjectsandStructures_Deductible = PcfTextInput("[aria-label='Outside Objects and Structures'] [id$='CovPatternInputGroup-1-CovTermInputSet-CovTermDirectInputSet-DirectTermInput']")
	propertyLineCov_Eachlosscausedbywind = PcfButton("[aria-label='Each loss caused by wind'] [id$='checkbox']")
	propertyLineCov_Eachlosscausedbywind_Limit = PcfTextInput("[aria-label='Each loss caused by wind'] [id$='CovPatternInputGroup-0-CovTermInputSet-CovTermDirectInputSet-DirectTermInput']")
	propertyLineCov_Eachlosscausedbywind_Deductible = PcfTextInput("[aria-label='Each loss caused by wind'] [id$='CovPatternInputGroup-1-CovTermInputSet-CovTermDirectInputSet-DirectTermInput']")
	propertyLineCov_ContentsofotherStructures = PcfButton("[aria-label='Contents of Other Structures'] [id$='checkbox']")
	propertyLineCov_ContentsofotherStructures_Limit = PcfSelectInput("[aria-label='Contents of Other Structures'] [name*='CovPatternInputGroup-0-CovTermInputSet-OptionTermInput']")
	propertyLineCov_ContentsofotherStructures_Deductible = PcfTextInput("[aria-label='Contents of Other Structures'] [id$='CovPatternInputGroup-1-CovTermInputSet-CovTermDirectInputSet-DirectTermInput']")
	propertyLineCov_Terrorism = PcfButton("[aria-label='Terrorism'] [id$='checkbox']")
	propertyLineCov_Fungus = PcfButton("[aria-label='Fungus'] [id$='checkbox']")
	propertyLineCov_Fungus_Limit = PcfTextInput("[aria-label='Fungus'] [id$='CovPatternInputGroup-0-CovTermInputSet-CovTermDirectInputSet-DirectTermInput']")
	propertyLineCov_Exhibitions = PcfButton("[aria-label='Exhibitions'] [id$='checkbox']")
	propertyLineCov_Exhibitions_Limit = PcfSelectInput("[aria-label='Exhibitions'] [name*='CovPatternInputGroup-0-CovTermInputSet-OptionTermInput']")
	propertyLineCov_FluctuationinRawMaterialValues = PcfButton("[aria-label='Fluctuation in Raw Material Values'] [id$='checkbox']")
	propertyLineCov_FluctuationinRawMaterialValues_Limit = PcfSelectInput("[aria-label='Fluctuation in Raw Material Values'] [name*='CovPatternInputGroup-0-CovTermInputSet-OptionTermInput']")
	propertyLineCov_FursJewelleryWatchesandPreciousStones = PcfButton("[aria-label='Furs, Jewellery, Watches and Precious Stones'] [id$='checkbox']")
	propertyLineCov_FursJewelleryWatchesandPreciousStones_Limit = PcfSelectInput("[aria-label='Furs, Jewellery, Watches and Precious Stones'] [name*='CovPatternInputGroup-0-CovTermInputSet-OptionTermInput']")
}