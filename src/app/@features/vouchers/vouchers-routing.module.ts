import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoucherDetailsComponent } from './pages/voucher-details/voucher-details.component';
import { VoucherListComponent } from './pages/voucher-list/voucher-list.component';
import { VoucherResolver } from './services/voucher-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: VoucherListComponent,
    children: [
      {
        path: ':id',
        component: VoucherDetailsComponent,
        resolve: {
          voucher: VoucherResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VouchersRoutingModule {}

export const routedComponents = [VoucherListComponent];
