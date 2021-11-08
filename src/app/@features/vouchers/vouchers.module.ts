import { NgModule } from '@angular/core';
import {
  routedComponents,
  VouchersRoutingModule,
} from './vouchers-routing.module';

import { VoucherListComponent } from './pages/voucher-list/voucher-list.component';
import { SharedModule } from '../../@shared/shared.module';
import { VoucherDetailsComponent } from './pages/voucher-details/voucher-details.component';

@NgModule({
  imports: [SharedModule, VouchersRoutingModule],
  declarations: [
    routedComponents,
    VoucherListComponent,
    VoucherDetailsComponent,
  ],
})
export class VouchersModule {}
