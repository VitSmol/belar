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
  region: any;
  ngOnInit(): void {
    const regions = Array.from(document.querySelectorAll('.region'));
    regions.forEach((region) => {
      const id = (region as HTMLElement).dataset[`region`];
      (region as HTMLElement).style.fill = map_data[id as string].color_map;

    })

  }
  onClickHover(e: any) {
    if (e.type === 'click') {
      if (this.currentRegion) {
        this.currentRegion.classList.remove('active')
        this.currentRegion = null
        this.currentRegion = e.target
        this.currentRegion.classList.add('active')
        this.getRegionInfo(this.currentRegion)
      } else {
        this.currentRegion = e.target
        this.currentRegion.classList.add('active')
        this.getRegionInfo(this.currentRegion)
      }
    }
  }
  getRegionInfo(region: any) {
    const id = region.dataset[`region`];
    this.region = map_data[id]
    console.log(this.region);

  }
}
