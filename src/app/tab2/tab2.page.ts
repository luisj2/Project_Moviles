import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  template: `
    <h2>Sitios donde nos ubicamos</h2>
    <ul>
      <li *ngFor="let nombre of nombres">{{ nombre }}</li>
    </ul>
  `,
})
export class Tab2Page {
  nombres: string[] = [''];

  constructor() {}
}
