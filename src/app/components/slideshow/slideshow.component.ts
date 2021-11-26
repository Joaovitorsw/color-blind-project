import { Component } from '@angular/core';

@Component({
  selector: 'cbp-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent {
  images: string;
  index: number;
  constructor() {
    this.index = 10;
    this.images = 'https://picsum.photos/id/10/600/600';
  }

  nextIndex() {
    this.index++;
    this.images = `https://picsum.photos/id/${this.index}/600/600`;
  }

  previousIndex() {
    this.index--;
    if (this.index < 10) this.index = 10;
    this.images = `https://picsum.photos/id/${this.index}/600/600`;
  }
}
