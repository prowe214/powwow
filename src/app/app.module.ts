import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

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
    TranslateModule.forRoot({
          provide: TranslateLoader,
          useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
          deps: [Http]
        }),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
