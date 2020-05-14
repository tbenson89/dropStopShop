import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';


@Component({
  selector: 'app-main-carousel-config',
  templateUrl: './main-carousel-config.component.html',
  styleUrls: ['./main-carousel-config.component.scss']
})
export class MainCarouselConfigComponent implements OnInit {
  images = [
    'assets/bg.jpg',
    'assets/car.png',
    'assets/canberra.jpg',
    'assets/holi.jpg'
  ];
  public carouselTileItems: Array<any> = [0, 1, 2, 3, 4, 5];
  public carouselTiles = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  };
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };

  constructor() { }

  ngOnInit(): void {
    this.carouselTileItems.forEach(el => {
      this.carouselTileLoad(el);
    });
  }

  public carouselTileLoad(j) {
    console.log('J: ' + j);
    const len = this.carouselTiles[j].length;
    if (len <= 30) {
      for (let i = len; i < len + 15; i++) {
        this.carouselTiles[j].push(
          this.images[Math.floor(Math.random() * this.images.length)]
        );
      }
    }
  }

}
