import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  // standalone: true,
  // imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.sass'
})
export class MapComponent implements AfterViewInit, OnInit  {
  ngOnInit(): void {

    // throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    const iframe = document.createElement('iframe');
    if (iframe) {
      console.log(iframe.contentWindow);

    }
  }

}
