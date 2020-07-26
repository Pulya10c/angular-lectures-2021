import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { OneComponent } from './pages/one/one.component';
import { TwoComponent } from './pages/two/two.component';

const routes: Routes = [
    { path: '', component: OneComponent },
    { path: 'two', component: TwoComponent },
];

@NgModule({
    declarations: [
        OneComponent,
        TwoComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
    ],
})
export class AnotherModule {}