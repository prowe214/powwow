import { Component, Input, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {
  @Input() postData: any;
  title: string;
  previewUrl: string = "http://placehold.it/500x300";
  description: string;

  constructor() {
  }

  ngOnInit() {
   console.log(this.postData)
  }
}
