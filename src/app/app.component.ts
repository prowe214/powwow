import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Powwow';

  constructor(af: AngularFire) {
    
  }

  public generatePosts() {
    console.log("POSTING");

    firebase.database().ref('posts/' + Math.floor(Math.random() * 10000)).set({
      title: "ANOTHER Sample Post",
      previewUrl: "https://placehold.it/500x300",
      description: "loremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    });
  }
}

