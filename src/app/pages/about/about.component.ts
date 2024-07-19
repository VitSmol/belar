import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class AboutComponent implements OnInit, AfterViewInit {
  // data = DataBase
  series = ['BC', 'MC',]
  constructor() {

  }

  public width!: number
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.innerWidth;
    console.log(this.width);

  }
  ngAfterViewInit(): void {
    const container = document.getElementById('swipe-container')?.shadowRoot?.children[0].children[4];

    setTimeout(() => {
      // const swipeNextBtn = document.querySelector('.swiper-button-next');
      (container as HTMLElement).click()
    }, 3000);
  }
  ngOnInit(): void {
    // ! Попытки заебенить карту не удались
    // setTimeout(() => {
      // const map = document.getElementById('map');
      // (map as HTMLDivElement).innerHTML = `
      //   <link href="assets/map/map.css" rel="stylesheet" type="text/html">
      //   <script type="text/javascript" defer src="assets/map/raphael-min.js"></script>
      //   <script type="text/javascript" defer src="assets/map/settings.js"></script>
      //   <script type="text/javascript" defer src="assets/map/map.js"></script>`;

    // const link = document.createElement('link');
    // link.rel = 'stylesheet';
    // link.type = 'css';
    // link.href = 'assets/map/map.css'
    // map?.append(link)
    // const script1 = document.createElement('script')
    // const script2 = document.createElement('script')
    // const script3 = document.createElement('script')
    // script1.type = 'text/javascript'
    // script2.type = 'text/javascript'
    // script3.type = 'text/javascript'
    // script1.setAttribute('defer', 'true')
    // script2.setAttribute('defer', 'true')
    // script3.setAttribute('defer', 'true')
    // script1.setAttribute('async', 'true')
    // script2.setAttribute('async', 'true')
    // script3.setAttribute('async', 'true')
    // script1.src = 'assets/map/raphael-min.js'
    // script2.src = 'assets/map/settings.js'
    // script3.src = 'assets/map/map.js'
    // map?.append(script1, script2, script3)
    // console.log(map);
  // }, 2000);
  }
}


