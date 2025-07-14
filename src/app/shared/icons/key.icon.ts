import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-key',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18" fill="currentColor">
      <path d="M280-400q-33 0-56.5-23.5T200-480q0-33 23.5-56.5T280-560q33 0 56.5 23.5T360-480q0 33-23.5 56.5T280-400Zm0 160q-100 0-170-70T40-480q0-100 70-170t170-70q67 0 121.5 33t86.5 87h352l120 120-180 180-80-80-80 80-85-85h-47q-32 54-86.5 87T280-240Zm0-80q56 0 98-34t56-86h144l46 46 82-82 82 82 75-76-46-46h-383q-14-52-56-86t-98-34q-66 0-113 47t-47 113q0 66 47 113t113 47Z"/>
    </svg>
  `
})
export class IconKeyComponent {}
