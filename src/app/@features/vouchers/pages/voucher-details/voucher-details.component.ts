import { Component, OnDestroy, OnInit } from '@angular/core';
import { IVoucher } from '../../models/voucher.model';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-voucher-details',
  templateUrl: './voucher-details.component.html',
  styleUrls: ['./voucher-details.component.scss'],
})
export class VoucherDetailsComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public dataSource: IVoucher;

  constructor(private route: ActivatedRoute) {}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.subscription = this.route.paramMap
      .pipe(
        map(() => this.route.snapshot.data['voucher']),
        tap((voucher: IVoucher) => (this.dataSource = voucher))
      )
      .subscribe();
  }
}
