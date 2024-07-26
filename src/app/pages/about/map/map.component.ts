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
  partners: any;
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
    const companyGenerals: any[] = [];

    const partners: any = {
      companyName: map_data[id].company.name,
      companyAddress: map_data[id].company.address,
      companyMail: map_data[id].company.mail,

    }
    map_data[id].company.general.forEach(general => {
      const phones: any[] = [];
      let result: any = {
        name: general.name,
      }
      general.phones.forEach(phone => {
        phones.push({
          phoneSimple: phone,
          phoneToTag: phone.match(/\d/g).join("")
        })
      })
      result.phones = phones
      companyGenerals.push(result)
    })
    partners.companyGenerals = companyGenerals
    this.partners = partners
    console.log(this.partners);

  }
}
