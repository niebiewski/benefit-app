import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { first } from 'rxjs/operators';
import { IVoucher } from '../models/voucher.model';

@Injectable({
  providedIn: 'root',
})
export class VoucherService {
  private vouchers: IVoucher[] = [
    <IVoucher>{ id: 1, name: 'emplik 1' },
    <IVoucher>{ id: 2, name: 'multi sport' },
    <IVoucher>{ id: 3, name: 'cinema city' },
    <IVoucher>{ id: 4, name: 'decathlon' },
  ];

  constructor() {}

  getVouchers(): Observable<IVoucher[]> {
    return of(this.vouchers);
  }

  getVoucher(id: number): Observable<IVoucher> {
    return from(this.vouchers).pipe(first((item: IVoucher) => item.id === id));
  }
}
