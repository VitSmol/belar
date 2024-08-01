import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/dao/interfaces/interfaces';
import { CartService } from 'src/app/services/cart.service';
import { MailSendComponent } from 'src/app/shared/mail-send/mail-send.component';
import * as pdfMake from 'pdfmake/build/pdfmake'
import * as pdfFonts from 'pdfmake/build/vfs_fonts'
import { EmailService } from 'src/app/services/email.service';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.sass'
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private serv: EmailService
  ) {
    this.orderForm = this.formBuilder.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      fathername: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      country: [''],
      comment: [''],
    })
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.innerWidth;
  }
  public width: number = 0
  public orderForm!: FormGroup;
  public orderArr: Product[] = []; //
  public columns = ["position", "img", "title", "count", "color","delete"]; //
  public currentCount = 0;
  public numberOfGoods: number = 0;
  dataSource!: MatTableDataSource<any>
  matcher = new ErrorStateMatcher();
  ngOnInit(): void {
    this.width = window.innerWidth;
    this.cartService.loadStorage().subscribe(data => {
      this.orderArr = data;
      console.log(this.orderArr);
      this.getCountToThePage(this.orderArr)
      this.dataSource = new MatTableDataSource(this.orderArr);
    })
  }

  getCountToThePage(arr: Product[]) {
    let commonCount = 0;
    this.numberOfGoods = arr.length;
    arr.forEach((product: Product) => {
      let currentCount = product.count
      if (!currentCount) {
        return
      } else {
        commonCount += +currentCount
      }
    })
    // console.log(commonCount);
    this.currentCount = commonCount;
    // return commonCount
  }
  checkNums(e: any) {
    e.target.value = e.target.value.replace(/[^0-9]/g, '')
  }
  changeCount(symbol: string, item: Product) {
    let count = +item.count!

    if (symbol === '-') {
      count--
      if (count === 0) {
        this.delete(item)
      }
    } else {
      count++
    }
    item.count = count + ``
    this.cartService.setNewCount(item)
    this.getCountToThePage(this.orderArr);
    console.log(this.orderArr);

  }
  setColor(e, item) {
       item.color = e
    this.cartService.setNewColor(item)
    console.log(item);
  }
  changeOnBlur(ev: any, item: Product) {
    item.count = ev.target.value;
    this.cartService.setNewCount(item)
    this.getCountToThePage(this.orderArr)
  }
  delete(item: Product) {
    this.cartService.deleteProduct(item).subscribe(data => {
      this.orderArr = data;
      this.dataSource = new MatTableDataSource(this.orderArr);
    })
  }
  send() {
    console.log(this.orderArr);

    let date = new Date();
    let currentDate = `${date.getDate().toString().padStart(2, '0')}.${date.getMonth().toString().padStart(2, '0')}.${date.getFullYear()} - ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
    // pdf.open()
    let tableStart = `<table>`
    let th = `<tr style="text-align: center; font-weight: bold">
      <th>№п/п</th>
      <th style="width: 500px">Наименование</th>
      <th>Цвет:</th>
      <th>Количество</th>
    </tr>`

    for (let i = 0; i < this.orderArr.length; i++) {
      let row = `<tr>
        <td>${i + 1}</td>
        <td style="text-align: center;">${this.orderArr[i].title}</td>
        <td style="text-align: center;">${this.orderArr[i].color}</td>
        <td style="text-align: center;">${this.orderArr[i].count}</td>
      <tr>`
      th += row
    }
    const tableEnd = `</table>`
    let resultTable = tableStart + th + tableEnd
    let message = {
      date: currentDate,
      fathername: this.orderForm.value.fathername,
      firstname: this.orderForm.value.firstname,
      lastname: this.orderForm.value.lastname,
      mail: this.orderForm.value.email,
      phone: this.orderForm.value.phone,
      country: this.orderForm.value.country,
      comment: this.orderForm.value.comment,
      // array: this.orderArr,
      resultTable: resultTable
    }
    this.serv.sendEmailFromCart(message).subscribe()
    this.showSnackBar()
  }
  showSnackBar() {
    this.snackBar.openFromComponent(MailSendComponent, {
      duration: 3000,
    })
  }
  clearCart() {
    this.cartService.clear().subscribe(data => {
      this.orderArr = data;
      this.dataSource = new MatTableDataSource(this.orderArr);
    })
  }
}


