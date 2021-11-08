import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IVoucher } from '../models/voucher.model';
import { VoucherService } from './voucher.service';

@Injectable({ providedIn: 'root' })
export class VoucherResolver implements Resolve<IVoucher> {
  constructor(private service: VoucherService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.service.getVoucher(+route.paramMap.get('id'));
  }
}
