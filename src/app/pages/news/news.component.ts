import { AfterViewInit, Component, OnInit } from '@angular/core';
import { news } from './news'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.sass'
})
export class NewsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // this.showSlides(this.slideIndex)
    // throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  public news = news.reverse();
  public slideIndex = 1;

  plusSlides(n: number, img: string): void {
    // this.showSlides(this.slideIndex = n)

  }

  // showSlides(n: number): void {
//     let slides = document.getElementsByClassName('mySlides');
//     console.log(slides);
//     if (n > slides.length) {
//       this.slideIndex = 1;
//     }
//     if (n < 1) {
//       this.slideIndex = slides.length
//     }
//     for (let i = 0; i < slides.length; i++) {
//       (slides[i] as HTMLElement).style.display = 'none';
//     }
//     (slides[this.slideIndex-1] as HTMLElement).style.display = 'block';

  // }
}
