import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import exportFromJSON from 'export-from-json';
import { Product } from 'src/app/dao/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit  {
  public width: number = 0
  public expanded: boolean = false
  public choose = this.fBuilder.group({
    hydro: true,
    other: true
  })
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.innerWidth;
  }
  // public columns = ['№', 'Серия', 'Ход', 'Ø Штока', 'Ø Поршня', 'Межосевое', 'В корзину']
  constructor(
    private fBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
    this.width = window.innerWidth;
  }

}
