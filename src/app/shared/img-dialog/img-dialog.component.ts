import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-img-dialog',
  templateUrl: './img-dialog.component.html',
  styleUrl: './img-dialog.component.sass'
})
export class ImgDialogComponent implements OnInit {
  public tempArray: any[] = [];
  public currentImg: any
  public currentImgSrc: string = '';
  public scale = 1;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  ngOnInit(): void {
    this.tempArray = [...this.data[1]]
    this.currentImg = this.data[0]
    console.log(`Initial`);
    let currentInd = 0;
    this.tempArray.forEach((el: any, ind: any) => {
      if (this.currentImg.pathMini === el.pathMini) currentInd = ind
    })
    let cutArr = this.tempArray.splice(0, currentInd)
    this.tempArray = [...this.tempArray, ...cutArr]
    console.log(this.tempArray);
  }
  onCh(e: any) {
    setTimeout(() => {
      let currentSlide = document.querySelector('swiper-slide.slide.swiper-slide-active')
      this.currentImgSrc = (currentSlide?.children[0] as HTMLImageElement).src
      this.scale = 1;
      (currentSlide?.children[0] as HTMLImageElement).style.scale = 1 + ``
    }, 0);
  }
  onwheel(event: Event) {
    event.preventDefault();
    console.log(event.target);

    let count = (event as WheelEvent).deltaY / 5000;
    this.scale -= count;
    (event.target as HTMLImageElement).style.scale = this.scale + ``
    // .style.scale -= count
  }
}
