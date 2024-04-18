import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
declare let html2pdf: any;
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as pdfMake from 'pdfmake/build/pdfmake'
import * as pdfFonts from 'pdfmake/build/vfs_fonts'
import { FormBuilder, FormGroup } from '@angular/forms';


(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrl: './bottom.component.sass'
})
export class BottomComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder
  ){

  }
  public orderForm!: FormGroup;
  public hydroType = [`Поршневой`, `Двухштоковый`, `Плунженрныйы`]
  public braking = [
    `нет`,
    `при втягивании`,
    `при выдвижении`,
    `при втягивании и выдвижении`
  ]
  public hydLock = [
    `нет`,
    `в поршневой части`,
    `в штоковой части`,
    `в обеих частях`
  ]

  // public currentColor: string = ''

  public barArray: number[] = [160, 180, 200, 210, 230, 240, 250, 260, 280, 300, 400]
  public selectedHydroType = this.hydroType[0]
  public selectedBar = this.barArray[0]

  //! Переменные для title
  public currentPressure: string = ''
  public currentMO: string = ''
  @ViewChild('pressureSelect') selectPressure: any
  @Output() pressure = new EventEmitter();
  @Output() MO = new EventEmitter();
  @Output() currentColor = new EventEmitter();

  ngOnInit(): void {
    setTimeout(() => {
      this.currentPressure = this.selectPressure.value;
      this.pressure.emit(this.currentPressure)
    }, 100);
  }

  checkNums(ev: KeyboardEvent): void {
    (ev.target as HTMLInputElement).value = (ev.target as HTMLInputElement).value.replace(/[^0-9]/g, '')
  }
  setChange(ev: any): void {
    this.pressure.emit(ev)
  }
  checkNumsAndEmmit(e: KeyboardEvent) {
    this.currentMO = this.currentMO.replace(/[^0-9]/g, '')
    this.MO.emit(this.currentMO)
  }

  setColor(color: string | null): void {
    this.currentColor.emit(color)
    console.log(`In bottom color is: ${color}`);

  }
  send() {

    // setTimeout(() => {

      let title = document.querySelector('#title') as HTMLDivElement
      let snapshot = document.querySelector('#snapshot') as HTMLDivElement
      snapshot.style.animation = 'none'
      // let snapshot = snaps.cloneNode() as HTMLDivElement;
      // snapshot.style.paddingLeft = `300px`
      // snapshot.style.paddingRight = `300px`
      snapshot.style.paddingTop = `100px`
      snapshot.style.scale = '1.55'
      let table = document.getElementById('table') as HTMLDivElement
      let div = document.createElement('div');
      div.style.padding = '70px';
      div.setAttribute('id', 'pdfContent')
      div.style.animation = 'none';
      let bottom = document.querySelector('.bottom') as HTMLDivElement

      // html2canvas(title).then(
      //   function (canvas) {
      //     document.body.append(canvas)
      //   }
      // )

      // !

      html2canvas(snapshot, {foreignObjectRendering: false, removeContainer: true}).then(canvas => {
        let img = document.createElement('img')
        let imgSrc = canvas.toDataURL("image/png", 1.0)
        // img.style.animation = 'none';
        // canvas.width = 1400

        img.src = imgSrc
        // div.append(canvas)
        // setTimeout(() => {
          bottom.append(img)

        // }, 500);
      })



      // })
        //!
        //   (canvas) =>
        //     {
        //   let img = document.createElement('img')
        //   let imgSrc = canvas.toDataURL("image/png", 1.0)
        //   img.src = imgSrc
        //   // console.log(canvas);
        //   div.appendChild(canvas)
        //   // document.body.appendChild(canvas)
        // }

      // html2canvas(table).then(
      //   function(canvas) {
      //     div.append(canvas)

      //    }
      //   (canvas) => {
      //   let img = document.createElement('img')
      //   let imgSrc = canvas.toDataURL("image/png", 1.0)
      //   img.src = imgSrc
      //   div.appendChild(canvas)
      //   document.body.appendChild(div)
      //   div.classList.add('pdfContent')
      // }

      // )
    // }, 1000);
    // const pdf = new jsPDF({
    //   orientation: 'landscape',
    //   unit: 'px',
    //   compress: false,
    //   format: [700, 1320]
    // });
    // document.body.appendChild(div)
    //   pdf.html(snapshot, {
    //       callback: (pdf: jsPDF) => {
    //         // pdf.deletePage(pdf.getNumberOfPages());
    //         pdf.save('pdf-export')
    //       }
    //     })

    // const pdf = new jsPDF({
    //   unit: 'px',
    //   format: [595, 842]
    // })
    // pdf.html(img, {
    //   callback: (pdf: jsPDF) => {
    //     // pdf.deletePage(pdf.getNumberOfPages());
    //     pdf.save('pdf-export')
    //   }
    // })
    // // console.log(img);

    // let def = {
    //   content: [
    //     `${img}`
    //   ]
    // }
    // pdfMake.createPdf(def).open()
  }
}
