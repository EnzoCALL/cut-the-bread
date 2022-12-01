import { ElementService } from './../element/element.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public nbElements: number;
  public eachElements: string[];

  constructor(private elementService:ElementService) {
    this.nbElements = this.elementService.getAll().length;
    this.eachElements = this.elementService.getAllName();
  }
}
