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
    this.includeHTML()
    // throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    const iframe = document.createElement('iframe');
    if (iframe) {
      console.log(iframe.contentWindow);

    }
  }
  includeHTML() {
    let z, i, elmnt, file, xhttp;
      /*loop through a collection of all HTML elements:*/
      z = document.getElementsByTagName("*");
      for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
          /*make an HTTP request using the attribute value as the file name:*/
          xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
              if (this.status == 200) {elmnt.innerHTML = this.responseText;}
              if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
              /*remove the attribute, and call this function once more:*/
              elmnt.removeAttribute("w3-include-html");
              this.includeHTML();
            }
          }
          xhttp.open("GET", file, true);
          xhttp.send();
          /*exit the function:*/
          return;
        }
      }
  }

}
