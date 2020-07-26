import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PostComponent } from './components/post/post.component';

const materialModules = [
  MatIconModule,
  MatCardModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports: [
    ...materialModules,
    PostComponent,
  ]
})
export class SharedModule { }
