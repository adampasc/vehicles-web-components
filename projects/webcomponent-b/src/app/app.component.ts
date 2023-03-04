import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true
})
export class AppComponent {
  title = 'webcomponent-b';
}
