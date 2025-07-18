import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-bars',
  standalone: true,
  template: `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="var(--cor-cinza-fundo)"/>
  </svg>
  `
})
export class IconBarsComponent {
}
