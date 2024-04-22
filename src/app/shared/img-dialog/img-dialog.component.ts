import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-img-dialog',
  templateUrl: './img-dialog.component.html',
  styleUrl: './img-dialog.component.sass'
})
export class ImgDialogComponent implements OnInit {
  public imgSrc: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }
  ngOnInit(): void {
    this.imgSrc = this.data
  }
}
