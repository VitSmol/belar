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
  currentEvent: any = null
  currentRegion: any
  checked = false
  ngOnInit(): void {
    const regions = Array.from(document.querySelectorAll('.region'));
    // console.log(regions);
    regions.forEach((region) => {
      const id = (region as HTMLElement).dataset[`region`];
      // console.log(id);

      (region as HTMLElement).style.fill = map_data[id as string].color_map;
      // (region as HTMLElement).setAttribute('stroke', '#fff')

    })

  }
  onClickHover(e: any) {
    if (e.type === 'click') {
      if (this.currentRegion) {
        this.currentRegion.classList.remove('active')
        this.currentRegion = null
        this.currentRegion = e.target
        this.currentRegion.classList.add('active')
      } else {
        this.currentRegion = e.target
        this.currentRegion.classList.add('active')
      }
    }
  }
}
