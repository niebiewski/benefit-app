import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { throwIfAlreadyLoaded } from './utils/module-import-guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../@shared/shared.module';

@NgModule({
  declarations: [NavbarComponent, PageNotFoundComponent],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NavbarComponent,
    [PageNotFoundComponent],
  ],
  imports: [CommonModule, FormsModule, RouterModule, SharedModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
