import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-olho',
  standalone: true,
  template: `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 9.5C12.7956 9.5 13.5587 9.81607 14.1213 10.3787C14.6839 10.9413 15 11.7044 15 12.5C15 13.2956 14.6839 14.0587 14.1213 14.6213C13.5587 15.1839 12.7956 15.5 12 15.5C11.2044 15.5 10.4413 15.1839 9.87868 14.6213C9.31607 14.0587 9 13.2956 9 12.5C9 11.7044 9.31607 10.9413 9.87868 10.3787C10.4413 9.81607 11.2044 9.5 12 9.5ZM12 5C17 5 21.27 8.11 23 12.5C21.27 16.89 17 20 12 20C7 20 2.73 16.89 1 12.5C2.73 8.11 7 5 12 5ZM3.18 12.5C4.83 15.86 8.24 18 12 18C15.76 18 19.17 15.86 20.82 12.5C19.17 9.14 15.76 7 12 7C8.24 7 4.83 9.14 3.18 12.5Z" fill="currentColor"/>
  </svg>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    
    svg {
      display: block;
    }
  `]
})
export class IconOlhoComponent {
}
