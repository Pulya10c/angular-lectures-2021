import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { SharedModule } from '../shared/shared.module';
import { FeedService } from './services';

@NgModule({
  declarations: [PostsListComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  providers: [FeedService],
  exports: [PostsListComponent]
})
export class FeedModule { }
