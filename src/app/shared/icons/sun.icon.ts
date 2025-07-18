  import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-sun',
  standalone: true,
  template: `
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" fill="var(--cor-cinza-fundo)"/>
    <path d="M12 1V3M12 21V23M23 12H21M3 12H1M20.071 3.929L18.657 5.343M5.343 18.657L3.929 20.071M20.071 20.071L18.657 18.657M5.343 5.343L3.929 3.929" stroke="var(--cor-cinza-fundo)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `
})
export class IconSunComponent {
}
