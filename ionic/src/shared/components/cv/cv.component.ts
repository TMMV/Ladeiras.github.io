import { Component } from '@angular/core';

@Component({
  selector: 'jl-cv',
  templateUrl: 'cv.html',
})
export class CvComponent {
  constructor() {}

  openURL(url: string) {
    window.open(url);
  }
}