import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Powwow';

  constructor(af: AngularFire,
    private translate: TranslateService,
    private titleService: Title) {
            // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang('en');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use('en');
      translate.get('appTitle').subscribe((res: string) => {
        this.titleService.setTitle(res);
    });

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

