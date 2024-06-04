import { PcfButton } from '@gtui/gt-ui-framework';
import { Selector } from 'testcafe';
import { NewAPDPolicyInvolvedPartyPopup } from '../../../../../../pages/gw/generated/policysolutions/pages/popup/New/NewAPDPolicyInvolvedPartyPopup'

export class NewAPDPolicyInvolvedPartyPopup_Ext extends NewAPDPolicyInvolvedPartyPopup {
    NewAPDPolicyInvolvedPartyPopup_LinkAddressMenuMenuIcon = PcfButton('#NewAPDPolicyInvolvedPartyPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-LinkedAddressInputSet-LinkAddressMenu-LinkAddressMenuMenuIcon')
	NewAPDPolicyInvolvedPartyPopup_Address = Selector('#NewAPDPolicyInvolvedPartyPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-LinkedAddressInputSet-LinkAddressMenu-0-contactDetail')
	NewAPDPolicyInvolvedPartyPopup_PrimaryAddress = Selector('#NewAPDPolicyInvolvedPartyPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-LinkedAddressInputSet-LinkAddressMenu-0-contactDetail-PrimaryAddress')
}