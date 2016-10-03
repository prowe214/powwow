import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  posts: FirebaseListObservable<any[]>;
  title = 'app works!';

  constructor(af: AngularFire) {
    this.posts = af.database.list('posts');
  }

  generatePosts() {
    console.log("POSTING");

    firebase.database().ref('posts/' + Math.floor(Math.random() * 10000)).set({
      title: "ANOTHER Sample Post",
      previewUrl: "https://placehold.it/500x300",
      description: "loremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    });
  }
}

