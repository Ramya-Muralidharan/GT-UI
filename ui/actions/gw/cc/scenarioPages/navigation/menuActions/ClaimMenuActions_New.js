import { PcfButton, PcfComponent, PcfSelectInput } from '@gtui/gt-ui-framework';

export class ClaimMenuActions_New {
    otherTabRecovery= PcfComponent('#Claim-ClaimMenuActions-ClaimMenuActions_NewTransaction-ClaimMenuActions_NewOtherTrans')
    recoveryTab= PcfComponent('#Claim-ClaimMenuActions-ClaimMenuActions_NewTransaction-ClaimMenuActions_NewOtherTrans-ClaimMenuActions_NewTransaction_RecoverySet')
    recoveryPayer = PcfSelectInput('#NewRecoverySet-NewRecoveryScreen-RecoveryDetailDV-Payer')
    payerMenu = PcfSelectInput("#NewRecoverySet-NewRecoveryScreen-RecoveryDetailDV-Payer-PayerMenuIcon")
    claimMenuActions = PcfComponent("#Claim-ClaimMenuActions > div.gw-action--inner")   
}