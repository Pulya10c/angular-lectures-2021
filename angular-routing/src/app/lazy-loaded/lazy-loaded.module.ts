import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadedRoutingModule } from './lazy-loaded-routing.module';
import { LazyLoadedPageComponent } from './pages/lazy-loaded-page/lazy-loaded-page.component';

@NgModule({
  declarations: [LazyLoadedPageComponent],
  imports: [
    CommonModule,
    LazyLoadedRoutingModule
  ]
})
export class LazyLoadedModule { }
