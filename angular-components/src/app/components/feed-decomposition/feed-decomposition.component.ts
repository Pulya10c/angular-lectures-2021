import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

const posts: Post[] = [
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

@Component({
  selector: 'app-feed-decomposition',
  templateUrl: './feed-decomposition.component.html',
  styleUrls: ['./feed-decomposition.component.scss']
})
export class FeedDecompositionComponent implements OnInit {
  posts: Post[];

  ngOnInit(): void {
    this.posts = posts;
  }

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
