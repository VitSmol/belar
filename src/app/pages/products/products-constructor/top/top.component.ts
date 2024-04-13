import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Construct, ConstructItem, Item } from 'src/app/dao/interfaces/interfaces';
import { titleObj } from '../products-constructor.component';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrl: './top.component.sass'
})
export class TopComponent implements OnInit {

  public constructItem?: Construct | undefined
  public bonksArray?: Item[] = [];
  public shtucArray?: Item[] = [];
  public items!: Item[];

  @Input('constructItem') public set setProducts(constructItem: Construct | undefined) {
    setTimeout(() => {
      this.constructItem = constructItem
    }, 200);
  }
  @Input() topShow: boolean = false;
  @Output() topLeftElement = new EventEmitter<Item | null>();
  @Output() topRightElement = new EventEmitter<Item | null>();
  //! Переменные для отображения в title
  @Input() titleObj: titleObj | any

  public stucerValue: string = "";
  public stucerCount: number = 0;

  ngOnInit(): void {
    this.titleObj.currentHod = 'X'
    this.titleObj.leftCode = 'X'
    this.titleObj.rightCode = 'X'
    this.titleObj.MO = 'X'
    // this.stucer = !this.isNotStuc ? '.3' : ''
  }

  clear(name: string) {
    document.querySelectorAll(`input[name=${name}]`).forEach(item => {
      (item as HTMLInputElement).checked = false
    })
  }

  setElement(el: Item | null, side: string) {
    if (el?.subgroup == '4' || el?.subgroup == '5') {
      this.stucerCount++
      if (this.stucerCount > 2) {
        this.stucerCount = 2
      }
    } else {
      this.stucerCount--
      if (this.stucerCount < 0) {
        this.stucerCount = 0
      }
    }
    this.stucerValue = this.stucerCount > 0 ? '.3' : ''

    if (side === 'topleft') {
      this.topLeftElement.emit(el);
    }
    if (side === 'topright') {
      this.topRightElement.emit(el)
    }
  }
}
