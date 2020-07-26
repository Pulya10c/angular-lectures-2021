import { Component } from '@angular/core';
import { Post } from './../../models/post';

@Component({
  selector: 'app-feed-simple',
  templateUrl: './feed-simple.component.html',
  styleUrls: ['./feed-simple.component.scss']
})
export class FeedSimpleComponent {
  posts = [
    {
      id: 1,
      title: 'Breaking news!',
      text: 'Voluptate labore veniam sit exercitation nisi fugiat voluptate laboris',
      likes: 2,
      isLiked: false
    },
    {
      id: 2,
      title: 'Meows news!',
      text: 'Laborum minim sit incididunt exercitation laborum commodo laborum.',
      likes: 42,
      isLiked: false
    }
  ];

  likePost(targetPost: Post) {
    const postIdx = this.posts.findIndex((post) => post.id === targetPost.id);
    this.posts[postIdx].isLiked = true;
    this.posts[postIdx].likes = this.posts[postIdx].likes + 1;
  }

  unlikePost(targetPost: Post) {
    const postIdx = this.posts.findIndex((post) => post.id === targetPost.id);
    this.posts[postIdx].isLiked = false;
    this.posts[postIdx].likes = this.posts[postIdx].likes - 1;
  }
}
