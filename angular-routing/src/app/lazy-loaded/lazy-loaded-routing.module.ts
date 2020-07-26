import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadedPageComponent } from './pages/lazy-loaded-page/lazy-loaded-page.component';

const routes: Routes = [
  { path: '', component: LazyLoadedPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadedRoutingModule { }
