import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImgDialogComponent } from 'src/app/shared/img-dialog/img-dialog.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.sass'
})
export class ContactsComponent {
  public src: string = 'assets/img/photo/'

  constructor(
    private dialog: MatDialog
  ){}
  showDialog(e: any, src: string) {
    e.preventDefault();
    const dialog = this.dialog.open(ImgDialogComponent, {
      data: this.src + src,
      width: '400px',
      // height: '300px'
    })
  }
  toApplication(e: any) {
    e.preventDefault();
  }
  nothing(e) {
    e.preventDefault();
  }
}
