import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
declare let html2pdf: any;
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as pdfMake from 'pdfmake/build/pdfmake'
import * as pdfFonts from 'pdfmake/build/vfs_fonts'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { EmailService } from 'src/app/services/email.service';
import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { MailSendComponent } from 'src/app/shared/mail-send/mail-send.component';


(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrl: './bottom.component.sass'
})
export class BottomComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private serv: EmailService,
    private snackBar: MatSnackBar
  ) {
    this.orderForm = this.formBuilder.group({
      operPreassure: [this.selectedBar],
      maxPreassure: [''],
      temperature: [''],
      aggressiveEnvironments: [''],
      braking: [''],
      lock: [''],
      betweenOs: [this.currentMO],
      hydroType: [this.selectedHydroType],
      contactName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      other: [''],
      grunt: [''],
      color: ['']
    })
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
  matcher = new ErrorStateMatcher();
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
    let date = new Date();
    let currentDate = `${date.getDate().toString().padStart(2, '0')}.${date.getMonth().toString().padStart(2, '0')}.${date.getFullYear()} - ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
    let title = document.querySelector('#title') as HTMLDivElement
    let snapshot = document.querySelector('#snapshot') as HTMLDivElement
    snapshot.style.animation = 'none'
    snapshot.style.paddingTop = `100px`
    snapshot.style.scale = '1.45'
    let table = document.getElementById('table') as HTMLDivElement
    let div = document.createElement('div');
    div.style.padding = '70px';
    div.setAttribute('id', 'pdfContent')
    div.style.animation = 'none';
    let bottom = document.querySelector('.bottom') as HTMLDivElement
    let startTextY = 270
    html2canvas(snapshot, { foreignObjectRendering: false, removeContainer: true }).then(canvas => {
      let img = document.createElement('img')
      let imgSrc = canvas.toDataURL("image/png", 1.0)
      img.src = imgSrc
      img.style.width = `90%`
      let docDefinition = {
        content: [
          {
            text: title.innerHTML,
            fontSize: 14,
            fontWeight: 'bold'
          },
          {
            image: imgSrc,
            width: 630,
            absolutePosition: { x: -20, y: 75 }
          },
          { text: `Дата формирования заказа: ${currentDate}`, fontWeight: 900, fontSize: 14 },
          { text: `Информация о клиенте:`, fontWeight: `bold`, fontSize: 14, absolutePosition: { x: 30, y: startTextY } },
          { text: `ФИО: ${this.orderForm.value.contactName}`, absolutePosition: { x: 30, y: startTextY + 20 } },
          { text: `Контактный номер: ${this.orderForm.value.phone}`, absolutePosition: { x: 30, y: startTextY + 40 } },
          { text: `E-mail: ${this.orderForm.value.email}`, absolutePosition: { x: 30, y: startTextY + 60 } },
          { text: `Компания: ${this.orderForm.value.company}`, absolutePosition: { x: 30, y: startTextY + 80 } },
          { text: `Информация о заказе:`, fontWeight: 900, fontSize: 14, absolutePosition: { x: 30, y: startTextY + 100 } },
          { text: `Межосевое расстояние: ${this.orderForm.value.betweenOs}`, absolutePosition: { x: 30, y: startTextY + 120 } },
          { text: `Рабочее давление, bar: ${this.orderForm.value.operPreassure}`, absolutePosition: { x: 30, y: startTextY + 140 } },
          { text: `Максимальное рабочее давление, bar: ${this.orderForm.value.maxPreassure}`, absolutePosition: { x: 30, y: startTextY + 160 } },
          { text: `Темп. окружающей среды, °C: ${this.orderForm.value.temperature}`, absolutePosition: { x: 30, y: startTextY + 180 } },
          { text: `Воздействие агрессивных сред: ${this.orderForm.value.aggressiveEnvironments}`, absolutePosition: { x: 30, y: startTextY + 200 } },
          { text: `Торможение: ${this.orderForm.value.braking}`, absolutePosition: { x: 30, y: startTextY + 220 } },
          { text: `Гидрозамок: ${this.orderForm.value.lock}`, absolutePosition: { x: 30, y: startTextY + 240 } },
          { text: `Тип гидроцилиндра: ${this.orderForm.value.hydroType}`, absolutePosition: { x: 30, y: startTextY + 260 } },
          { text: `Другие требования: ${this.orderForm.value.other}`, absolutePosition: { x: 30, y: startTextY + 280 } },
          { text: `Покрытие: ${this.orderForm.value.color}`, absolutePosition: { x: 30, y: startTextY + 300 } },
        ]
      }

      const message = {
        date: currentDate,
        contact: this.orderForm.value.contactName,
        mail: this.orderForm.value.email,
        phone: this.orderForm.value.phone,
        company: this.orderForm.value.company,
        cylName: title.innerHTML,
        betweenOS: this.orderForm.value.betweenOs,
        operPreassure: this.orderForm.value.operPreassure,
        maxPreassure: this.orderForm.value.maxPreassure,
        temperature: this.orderForm.value.temperature,
        aggressiveEnvironments: this.orderForm.value.aggressiveEnvironments,
        braking: this.orderForm.value.braking,
        lock: this.orderForm.value.lock,
        hydroType: this.orderForm.value.hydroType,
        other: this.orderForm.value.other,
        color: this.orderForm.value.color,
        img: imgSrc
      }

      let pdf = pdfMake.createPdf(docDefinition)

      pdf.getBase64(data => {
        const message = {
          pdf: data,
          contact: this.orderForm.value.contactName,
          mail: this.orderForm.value.email,
          phone: this.orderForm.value.phone,
        }
        // console.log(message);
        let fileInput = (document.getElementById('file') as HTMLInputElement);
        this.serv.sendEmail(
          message, pdf
        ).subscribe()
      this.showSnackBar()
      })
    })
  }
  showSnackBar() {
    this.snackBar.openFromComponent(MailSendComponent, {
      duration: 3000,
    })
  }
}
