import { Component } from '@angular/core';
import { TabChangeEvent } from '@porsche-design-system/components-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  elementAUrl = 'http://localhost:4301/main.js' // can come from environments later
  elementBUrl = 'http://localhost:4302/main.js' // can come from environments later
  title = 'host';

  tabIndex: number = 0;
  tabPanels: string[] = ['Component A', 'Component B'];

  onTabChange(e: CustomEvent<TabChangeEvent>) {
    this.tabIndex = e.detail.activeTabIndex;
  }
}
