import { Injectable, OnInit } from '@angular/core';
import { Item, Product } from '../dao/interfaces/interfaces';
import { CartDialogComponent } from '../shared/cart-dialog/cart-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {
  public cartArray: Product[] = []
  public tempArr: string = ''

  constructor(
    private dialog: MatDialog,
  ) {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openCartDialog(item: Product) {
    console.log(item);
    const cartDialog = this.dialog.open(CartDialogComponent, {
      data: item,
      autoFocus: true,
      width: `50vw`,
    })
    this.addToCart(item)
  }

  addToCart(product: Product) {
    this.loadStorage()
    product.count = '1'
    this.cartArray.push(product)
    localStorage.setItem('orderList', JSON.stringify(this.cartArray))
    this.loadStorage()
    this.getCount()
  }
  loadStorage() {
    if (localStorage['orderList'] && localStorage['orderList'].length > 0) {
      this.cartArray = JSON.parse(localStorage['orderList'])
    }
    return of(this.cartArray)
    // return this.cartArray
  }

  setNewCount(product: Product) {
    this.loadStorage()
    let index = this.cartArray.findIndex((el: Product) => el.title === product.title);
    this.cartArray[index] = product;
    localStorage['orderList'] = JSON.stringify(this.cartArray)
  }
  deleteProduct(product: Product) {
    this.loadStorage()
    let index = this.cartArray.findIndex((el: Product) => el.title === product.title);
    this.cartArray.splice(index, 1)
    localStorage['orderList'] = JSON.stringify(this.cartArray)
    this.getCount()
    return of(this.cartArray)
  }
  getCount() {
    this.loadStorage()
    return of(this.cartArray.length)
  }
}
