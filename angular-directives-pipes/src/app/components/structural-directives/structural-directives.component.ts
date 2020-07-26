import { Component } from '@angular/core';

enum Emotion {
  Sad,
  Confused,
  Happy,
  Surprised,
}

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent {
  public emotion = Emotion;
  public currentEmotion = Emotion.Happy;
  public posts = [
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
    },
    {
      id: 3,
      title: 'Meows news 2!',
      text: 'Laborum minim sit incididunt exercitation laborum commodo laborum.',
      likes: 13,
      isLiked: false
    }
  ];

  likePost(targetPost) {
    const postIdx = this.posts.findIndex((post) => post.id === targetPost.id);
    this.posts[postIdx].isLiked = true;
    this.posts[postIdx].likes = this.posts[postIdx].likes + 1;
  }

  unlikePost(targetPost) {
    const postIdx = this.posts.findIndex((post) => post.id === targetPost.id);
    this.posts[postIdx].isLiked = false;
    this.posts[postIdx].likes = this.posts[postIdx].likes - 1;
  }
}
