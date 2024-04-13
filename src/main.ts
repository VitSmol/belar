/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { register as registerSwiperElements } from 'swiper/element/bundle'
import  Autoplay  from "swiper";
import  Swiper  from "swiper";



registerSwiperElements()
// const swiper = new Swiper();
// Swiper.use([Autoplay]);
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
