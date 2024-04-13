import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Construct, Item } from 'src/app/dao/interfaces/interfaces';
import { ConstructorService } from 'src/app/services/constructor.service';

export interface titleObj {
  currentHod?: string | undefined | null;
  leftCode?: string | undefined | null;
  rightCode?: string | undefined | null;
  diamP?: string | undefined | null;
  diamSh?: string | undefined | null;
  pressureGroup?: string | undefined | null;
  MO?: string | undefined | null
}
@Component({
  selector: 'app-products-constructor',
  templateUrl: './products-constructor.component.html',
  styleUrls: ['./products-constructor.component.sass']
})
export class ProductsConstructorComponent implements OnInit, AfterViewInit {

  public construct?: Construct
  public leftSideElement!: { el: Item | null | string, side: string } | string[]
  public rightSideElement!: { el: Item | null | string, side: string } | string[]
  public topRightElement!: { el: Item | null, side: string }
  public topLeftElement!: { el: Item | null, side: string }

  public width: number = window.innerWidth
  public leftShow: boolean = false
  public rightShow: boolean = false
  public topShow: boolean = false
  side = ''

  //! переменные для title
  public titleObj: titleObj = {}
  public color: string = ''

  public leftCode: string | null | undefined
  public rightCode: string | null | undefined

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.innerWidth
  }
  @HostListener('window:load', ['$event'])
  onLoad(event: any) {
    this.width = window.innerWidth
    console.log(this.width);
  }

  currentHod: string = ''

  constructor(
    private serv: ConstructorService
  ) { }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.serv.getAll().subscribe(data => {
      this.construct = data
    })
  }

  setSideElement(el: Item | null | string, side: string) {
    this.side = side
    if (typeof el === 'string' && side === 'left' ) {
      this.leftSideElement = ['other', side]
    }
    if (typeof el === 'string' && side === 'right' ) {
      this.rightSideElement = ['other', side]
    }
    if (side === 'left' && typeof el !== 'string') {
      this.leftSideElement = { side, el }
      this.titleObj.leftCode = el?.code
    } else if (side === 'right' && typeof el !== 'string') {
      this.rightSideElement = { side, el }
      this.titleObj.rightCode = el?.code
    } else if (side === 'topleft' && typeof el !== 'string') {
      this.topLeftElement = { side, el }
    } else if (side === 'topright' && typeof el !== 'string') {
      this.topRightElement = { side, el }
    }
  }
  setHod(event: string) {
    this.titleObj.currentHod = event.length === 0 ? 'X' : event
  }
  setDiamP(event: string) {
    this.titleObj.diamP = event
  }
  setDiamSh(event: string) {
    this.titleObj.diamSh = event
  }
  setPressure(event: string) {
    let currentGroup = ''
    if (+event < 200) {
      currentGroup = '3'
    } else if (+event >= 200 && +event < 250) {
      currentGroup = '4'
    } else if (+event >= 250) {
      currentGroup = '5'
    }
    this.titleObj.pressureGroup = currentGroup
  }
  setMO(e: string) {
    // console.log(`In product MOS: ${e}`);
    this.titleObj.MO = e.length === 0 ? 'X' : e
  }
  setColor(e: string) {
    this.color = e
    console.log(`In products color is ${this.color}`);
  }
}
