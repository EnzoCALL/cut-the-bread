import { Component } from '@angular/core';

export interface Page{
  title: string,
  url: string,
  icon: string
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages: Page[] = [
    {
      title: 'Craft list',
      url: '/home',
      icon: 'list-outline',
    },
    {
      title: 'Elements',
      url: '/elements',
      icon: 'cube-outline',
    },
  ]
  constructor() {}
}
