import { Element, ElementService } from './../element/element.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.page.html',
  styleUrls: ['./elements.page.scss'],
})
export class ElementsPage implements OnInit {
  elements: Element[];

  constructor(private elementService: ElementService)
  {
    this.elements = this.elementService.getAll();
  }

  ngOnInit() { // On page init
  }

  deleteElement(element: Element){ // Filters element from elements array
    this.elements = this.elements.filter((e) => e.id !== element.id);
  }
  addOne(name : string){ // Adds '1' to element ammount
    this.elementService.addAmmount(name);
  }
  subOne(name : string){ // Removes '1' to element ammount
    this.elementService.subAmmount(name);
  }
}

