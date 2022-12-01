import { ElementService } from './../element/element.service';
import { Receipe, ReceipeService } from './../receipe/receipe.service'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  receipes: Receipe[];

  public eachElements: string[];
  public nbReceipes: number;

  constructor(private elementService:ElementService, private receipeService:ReceipeService){
    this.eachElements = this.elementService.getAllName();
    this.nbReceipes = this.receipeService.getAll().length;
    this.receipes = this.receipeService.getAll();
  }
  ngOnInit(): void {
    this.receipeService.checkAll();
  }

  getAllElements(name: string){
    return this.receipeService.getAllName(name);
  }

  addReceipe(){
    alert("Feature is not added yet");
  }
}
