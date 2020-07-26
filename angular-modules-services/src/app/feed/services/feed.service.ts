import { Injectable } from '@angular/core';
import { Post } from '../../shared/models/post';

@Injectable()
export class FeedService {
  public posts: Post[] = [
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
