import { AfterViewInit, Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Item, Product } from 'src/app/dao/interfaces/interfaces';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CartDialogComponent } from 'src/app/shared/cart-dialog/cart-dialog.component';
import { DataService } from 'src/app/services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products-list-all',
  templateUrl: './products-list-all.component.html',
  styleUrls: ['./products-list-all.component.sass'],
})
export class ProductsListAllComponent implements OnInit, AfterViewInit{

  constructor(
    private dialog: MatDialog,
    private serv: DataService,
    private cartServ: CartService
  ){}

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.innerWidth;
  }
  // @ViewChild(MatPaginator) paginator!: MatPaginator;

  // public columns = ['№', 'Серия', 'Ход', 'Ø Штока', 'Ø Поршня', 'Межосевое', 'В корзину']
  public width: number = 0
  public columns = ['num','title','diamP', 'diamSh', 'hod', 'mezh', 'action']
  data!: MatTableDataSource<Product>
  public productsArr: Product[] = [];
  public productsSlice: Product[] = [];
  public view = `grid`


  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
    this.width = window.innerWidth;
    setTimeout(() => {
      this.data = new MatTableDataSource<Product>(this.productsArr)
      this.data.paginator = this.paginator
    }, 0);

  }


  @Input('productsArr') public set setProducts(productsArr: Product[]) {
    this.productsArr = productsArr;
    this.productsSlice = this.productsArr.slice(0, 10)
    setTimeout(() => {
      this.data = new MatTableDataSource<Product>(this.productsArr)
      this.data.paginator = this.paginator
    }, 0);

  }
  @Input('view') public set setView(view: string) {
    this.view = view;
    console.log(this.view);

  }
  //! Расчет текущего количества страниц
  pageHandler(event: any): void {
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize
    let endIndex = startIndex + event.pageSize
    if (endIndex > this.productsArr.length) {
      endIndex = this.productsArr.length
    }
    this.productsSlice = this.productsArr.slice(startIndex, endIndex)
  }


  openDialog(item: Product) {
    this.cartServ.openCartDialog(item)
  }

  addToCart(item: any) {
    console.log(item);
    this.serv.getAll().subscribe(data => {
      const result = data.filter(el => el.title === item.cylName)
      console.log(result);
    })
  }
}


