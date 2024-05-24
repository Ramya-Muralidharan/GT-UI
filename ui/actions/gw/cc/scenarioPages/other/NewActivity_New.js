import { PcfComponent } from '@gtui/gt-ui-framework';

export class NewActivity_New {
    activityAutoPilot = PcfComponent("#Claim-ClaimMenuActions-ClaimMenuActions_NewActivity-NewActivityMenuItemSet-0-NewActivityMenuItemSet_Category > div.gw-action--inner.gw-hasDivider")
    autopilotActionRequired = PcfComponent("#Claim-ClaimMenuActions-ClaimMenuActions_NewActivity-NewActivityMenuItemSet-0-NewActivityMenuItemSet_Category-0-item > div")
    status = PcfComponent("#ActivityDetailWorksheet-ActivityDetailScreen-ActivityDV-ActivityDetailsInputSet-Activity_Status")
    subject = PcfComponent("#ActivityDetailWorksheet-ActivityDetailScreen-ActivityDV-ActivityDetailsInputSet-Activity_Subject")
    plannedActivities = PcfComponent("#ClaimWorkplan-ClaimWorkplanScreen-WorkplanLV-1-Subject_button")
    
}