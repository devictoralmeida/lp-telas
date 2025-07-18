import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-sair',
  standalone: true,
  template: `
  <svg xmlns="http://www.w3.org/2000/svg" [attr.width]="width" [attr.height]="height" viewBox="0 0 24 24" fill="none">
    <path d="M14.08 15.59L16.67 13H7V11H16.67L14.08 8.41L15.5 7L20.5 12L15.5 17L14.08 15.59ZM19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V9.67L19 7.67V5H5V19H19V16.33L21 14.33V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H19Z" [attr.fill]="fill"/>
  </svg>
  `
})
export class IconSairComponent {
  @Input() width: string = '18';
  @Input() height: string = '18';
  @Input() fill: string = 'currentColor';
}
