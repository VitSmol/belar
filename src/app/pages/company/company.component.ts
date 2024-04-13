import { Component, HostListener, OnInit, VERSION, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImgDialogComponent } from 'src/app/shared/img-dialog/img-dialog.component';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { LightgalleryModule } from 'lightgallery/angular';
import lgZoom from 'lightgallery/plugins/zoom';


@Component({
  selector: 'app-company',
  standalone: true,
  templateUrl: './company.component.html',
  styleUrl: './company.component.sass',
  imports: [LightgalleryModule],
  // encapsulation: ViewEncapsulation.None

})

export class CompanyComponent implements OnInit {
public width: number = 0
public imgArray = [
  {
    pathMini: 'assets/img/1.jpg',
    pathFull: 'assets/img/1sc.jpg',
},
  {
    pathMini: 'assets/img/2.jpg',
    pathFull: 'assets/img/2sc.jpg',
},
  {
    pathMini: 'assets/img/3.jpg',
    pathFull: 'assets/img/3sc.jpg',
},
  {
    pathMini: 'assets/img/4.jpg',
    pathFull: 'assets/img/4sc.jpg',
},
  {
    pathMini: 'assets/img/5.jpg',
    pathFull: 'assets/img/5sc.jpg',
},
  {
    pathMini: 'assets/img/6.jpg',
    pathFull: 'assets/img/6sc.jpg',
},
  {
    pathMini: 'assets/img/7.jpg',
    pathFull: 'assets/img/7sc.jpg',
},
  {
    pathMini: 'assets/img/8.jpg',
    pathFull: 'assets/img/8sc.jpg',
},
];

@HostListener('window:resize', ['$event'])
onResize(event: any) {
    this.width = event.target.innerWidth;
}
ngOnInit(): void {
  this.width = window.innerWidth;
}

constructor(
  public dialog: MatDialog
){}

showSwipe(img: {pathMini: string, pathFull: string}) {
  const dialog = this.dialog.open(ImgDialogComponent, {
    data: [img, this.imgArray],
    width: `60%`,
    height: `auto`
  })

}

settings = {
  width: '300px',
  counter: true,
  closable: true,
  plugins: [lgZoom],
  zoomFromOrigin: true,
  closeOnTap: true,
  mobileSettings: {
    controls: true, showCloseIcon: true, download: true,
  },
};

onBeforeSlide = (detail: BeforeSlideDetail): void => {
  const { index, prevIndex } = detail;
  console.log(index, prevIndex);
};
}
