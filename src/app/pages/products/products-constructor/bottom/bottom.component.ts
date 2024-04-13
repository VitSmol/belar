import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

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
}
