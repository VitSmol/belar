import { Component, OnInit } from '@angular/core';
import { map_data } from './regions';

@Component({
  selector: 'app-map',
  // standalone: true,
  // imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.sass'
})
export class MapComponent implements OnInit {
  ngOnInit(): void {
    console.log(map_data);

  }

}
