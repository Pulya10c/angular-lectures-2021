import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post: Post;
  @Output() like = new EventEmitter<Post>();
  @Output() unlike = new EventEmitter<Post>();

  likePost() {
    this.like.emit(this.post);
  }

  unlikePost() {
    this.unlike.emit(this.post);
  }
}
