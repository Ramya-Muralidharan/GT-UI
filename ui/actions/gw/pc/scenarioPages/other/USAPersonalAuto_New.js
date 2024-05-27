import { PcfButton, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework"

export class USAPersonalAuto_New {
    SubmissionWizard_LineStandardCoveragesTab = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-UALWizardStepGroup-UALUsaPersonalAutoScreen-UALUsaPersonalAutoPanelSet-LineStandardCoveragesTab')
    SubmissionWizard_AddPersonalVehicle = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-UALWizardStepGroup-UALPersonalVehicleScreen-UALPersonalVehicleListPanelSet-AddPersonalVehicle')
    UALPersonalVehiclePopup_BodyType = PcfSelectInput('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-BodyType')
    UALPersonalVehiclePopup_VIN = PcfTextInput('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-VIN')
    UALPersonalVehiclePopup_Year = PcfTextInput('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-Year')
    UALPersonalVehiclePopup_Make = PcfTextInput('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-Make')
    UALPersonalVehiclePopup_Model = PcfTextInput('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-Model')
    UALPersonalVehiclePopup_LicenseState = PcfSelectInput('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-LicenseState')
    UALPersonalVehiclePopup_AddDriver = PcfButton('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-UALVehicleDriverListPanelSet-Add')
    UALPersonalVehiclePopup_PolicyDriverMenuIcon = PcfButton('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-UALVehicleDriverListPanelSet-0-PolicyDriver-PolicyDriverMenuIcon')
    UALPersonalVehiclePopup_NewPerson = PcfButton('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-UALVehicleDriverListPanelSet-0-PolicyDriver-1-ContactType')
    UALPersonalVehiclePopup_VehicleDriverExposureCardTab = PcfButton('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-VehicleDriverExposureCardTab')
    SubmissionWizard_AutoLiabilityPackage = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-UALWizardStepGroup-UALUsaPersonalAutoScreen-UALUsaPersonalAutoPanelSet-LineStandardCoveragesCovPatterns-CoverageCategoryInputSet-0-CoverageInputSet-CovPatternInputGroup-0-CovTermInputSet-TypekeyTermInput')
}