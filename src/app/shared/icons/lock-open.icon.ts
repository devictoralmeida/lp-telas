import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-lock-open',
  standalone: true,
  template: `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6H9C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8Z" fill="var(--cor-cinza-fundo)"/>
  </svg>
  `
})
export class IconLockOpenComponent {
}
