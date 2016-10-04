import { Component, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent {
  @Input() postData: any;

  constructor() {
  }

}

export interface IPost {
  title: string,
  previewUrl: string,
  description: string
}
