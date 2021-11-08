import { Component, OnInit } from '@angular/core';
import { VoucherService } from '../../services/voucher.service';
import { IVoucher } from '../../models/voucher.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-voucher-list',
  templateUrl: './voucher-list.component.html',
  styleUrls: ['./voucher-list.component.scss'],
})
export class VoucherListComponent implements OnInit {
  public dataSource$: Observable<IVoucher[]>;

  constructor(private voucherService: VoucherService) {}

  ngOnInit() {
    this.dataSource$ = this.voucherService.getVouchers();
  }
}
