import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {
  testPost: IPost;
  testData: IPost[] = [];
  
  constructor() {
    this.testPost = {
      title: "Sample Post",
      previewUrl: "https://placehold.it/500x300",
      description: "loremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }
  }

  ngOnInit() {
    this.getTestData();
  }

  getTestData () {
    for (let i = 0; i < 3; i++){
      this.testData.push(this.testPost);
    }
  }

}

export interface IPost {
  title: string,
  previewUrl: string,
  description: string
}
