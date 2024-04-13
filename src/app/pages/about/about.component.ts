import { AfterViewInit, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class AboutComponent implements OnInit, AfterViewInit {
  // data = DataBase
  series = ['BC', 'MC', ]
  constructor() {

  }
  ngAfterViewInit(): void {
    const container = document.getElementById('swipe-container')?.shadowRoot?.children[0].children[4];

    setTimeout(() => {
      // const swipeNextBtn = document.querySelector('.swiper-button-next');
      (container as HTMLElement).click()
    }, 3000);
  }
  ngOnInit(): void {

  }
}


