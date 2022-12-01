import { ElementService } from './../element/element.service';
import { Receipe, ReceipeService } from './../receipe/receipe.service'
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  receipes: Receipe[];

  public eachElements: string[];
  public nbReceipes: number;

  constructor(private elementService:ElementService, private receipeService:ReceipeService) {
    this.eachElements = this.elementService.getAllName();
    this.nbReceipes = this.receipeService.getAll().length;
    this.receipes = this.receipeService.getAll();
  }

  getAllElements(name: string){
    return this.receipeService.getAllName(name);
  }
}
