import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './@core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landing-page' },
  {
    path: 'landing-page',
    loadChildren: () =>
      import('./@features/landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  },
  {
    path: 'vouchers',
    loadChildren: () =>
      import('./@features/vouchers/vouchers.module').then(
        (m) => m.VouchersModule
      ),
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
  /*providers: [
    AuthGuard,
    CanDeactivateGuard,
    UserProfileService
  ]
  */
})
export class AppRoutingModule {}
