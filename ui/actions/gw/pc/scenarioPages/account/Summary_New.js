import { PcfComponent } from '@gtui/gt-ui-framework';
import {t} from 'testcafe'

export class Summary_New {
	accountDetailsDetailViewTile_DVAccountNumber = PcfComponent('#AccountFile_Summary-AccountSummaryDashboard-AccountDetailsDetailViewTile-AccountDetailsDetailViewTile_DV-AccountNumber > div > div');
	accountHolder = PcfComponent('#AccountFile_Summary-AccountSummaryDashboard-AccountDetailsDetailViewTile-AccountDetailsDetailViewTile_DV-AccountHolder_button')
	accountStatus = PcfComponent('#AccountFile_Summary-AccountSummaryDashboard-AccountDetailsDetailViewTile-AccountDetailsDetailViewTile_DV-AccountStatus > div > div')
}

