import { NgModule } from '@angular/core';
import {
  LandingPageRoutingModule,
  routedComponents,
} from './landing-page-routing.module';

@NgModule({
  imports: [LandingPageRoutingModule],
  declarations: [routedComponents],
})
export class LandingPageModule {}
