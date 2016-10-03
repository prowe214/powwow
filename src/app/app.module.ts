import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { FeedComponent } from './feed/feed.component';

  // Initialize Firebase
export const firebaseConfig = {
  apiKey: 'AIzaSyAt5xogHTD1i2q_enHvqb3uZGUkcS6mD1I',
  authDomain: 'powwow-79bb1.firebaseapp.com',
  databaseURL: 'https://powwow-79bb1.firebaseio.com',
  storageBucket: 'powwow-79bb1.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
