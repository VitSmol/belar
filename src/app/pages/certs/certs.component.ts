import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgRotate from 'lightgallery/plugins/rotate';
import lgZoom from 'lightgallery/plugins/zoom';
import { ImgDialogComponent } from 'src/app/shared/img-dialog/img-dialog.component';

@Component({
  selector: 'app-certs',
  templateUrl: './certs.component.html',
  styleUrls: ['./certs.component.sass']
})
export class CertsComponent {
  constructor(public dialog: MatDialog) {}
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

  certsArray = [
    {
      pathMini: 'assets/img/certs/cert-1-light.png',
      pathFull: 'assets/img/certs/cert-1.png',
      title: 'Сертификат продукции собственного производства',
      alt: 'Сертификат продукции собственного производства',
      size: '1240-1754'
    },
    {
      pathMini: 'assets/img/certs/cert-2-light.jpg',
      pathFull: 'assets/img/certs/cert-2.jpg',
      title: 'Сертификат соответствия евразийского экономического союза',
      alt: 'Сертификат RY C-BY.АД07.В.06024_23_page-0001',
      size: '1240-2754'
    },
    {
      pathMini: 'assets/img/certs/cert-4-light.jpg',
      pathFull: 'assets/img/certs/cert-4.jpg',
      title: 'Приложение к сертификату соответствия евразийского экономического союза',
      alt: 'RY-C-BY.АД07.В.06024',
      size: '1240-1754'
    },
    {
      pathMini: 'assets/img/certs/cert-3-light.jpg',
      pathFull: 'assets/img/certs/cert-3.jpg',
      title: 'Сертификат ТМ Белар',
      alt: 'Сертификат ТМ Белар',
      size: '1240-1754'
    },
  ]
  showSwipe(cert: any) {
    console.log(cert);
    const dialog = this.dialog.open(ImgDialogComponent, {
      data: [cert, this.certsArray],
      width: `30%`,
      height: `auto`
    })
  }

}
