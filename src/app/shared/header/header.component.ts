import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, OnChanges {
  public bageCount = '';
  constructor(
    public route: Router,
    private cartService: CartService
  ) {
    this.cartService.getCount().subscribe(data => {
      console.log(data);

      this.bageCount = data + ''
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  currentRoute: string = ""
  menuBtn?: null | HTMLElement
  closeBtn?: null | HTMLElement
  listMenu?: null | HTMLElement
  footer?: null | HTMLElement

  ngOnInit(): void {
    this.menuBtn = document.querySelector('.menu')
    this.closeBtn = document.querySelector('.close')
    this.listMenu = document.querySelector('#listMenu')
    this.footer = document.getElementById('contacts')
    this.cartService.getCount().subscribe(data => {
        this.bageCount = data + ''
      })


  }
  getRoute() {
    setTimeout(() => {
      this.currentRoute = this.route.routerState.snapshot.url
    }, 0);
  }

  public scrollTo(e: any): void {
    e.preventDefault()
    console.log(e.target);
    this.footer?.scrollIntoView()
  }

  removeMenu(str: string): void {
    str == 'close' ? this.openClose('close') : null
  }

  public openClose(addClose: string): void {
    if (addClose == 'open') {
      (this.menuBtn as HTMLElement).classList.remove('show');
      (this.closeBtn as HTMLElement).classList.add('show');
      (this.listMenu as HTMLElement).classList.add('active');
    } else {
      (this.menuBtn as HTMLElement).classList.add('show');
      (this.closeBtn as HTMLElement).classList.remove('show');
      (this.listMenu as HTMLElement).classList.remove('active');
    }
  }


}
