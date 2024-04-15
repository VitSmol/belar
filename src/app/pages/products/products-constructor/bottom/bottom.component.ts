import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as pdfMake from 'pdfmake/build/pdfmake'
import * as pdfFonts from 'pdfmake/build/vfs_fonts'

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrl: './bottom.component.sass'
})
export class BottomComponent implements OnInit {
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
    let img = document.getElementById('snapshot') as HTMLDivElement
    // html2canvas(img).then((canvas) => {
    //   document.body.appendChild(canvas)
    // })
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
