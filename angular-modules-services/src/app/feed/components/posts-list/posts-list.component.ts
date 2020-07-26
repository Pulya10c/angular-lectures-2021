import { Component, OnInit } from '@angular/core';
import { Post } from '@shared/models';

import { FeedService } from '../../services';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts: Post[];

  constructor(private feedService: FeedService) {}

  ngOnInit(): void {
    this.posts = this.feedService.posts;
  }

  likePost(targetPost: Post) {
    this.feedService.likePost(targetPost);
  }

  unlikePost(targetPost: Post) {
    this.feedService.unlikePost(targetPost);
  }
}
