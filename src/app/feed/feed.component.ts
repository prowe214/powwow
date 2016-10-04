import { Component, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.less']
})
export class FeedComponent {
  posts: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.posts = af.database.list('posts');
  }

}
