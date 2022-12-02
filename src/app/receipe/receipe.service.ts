import { Element, ElementService } from './../element/element.service';
import { Injectable } from '@angular/core';

export interface Receipe {
  id: string;
  name: string;
  description?: string;
  elements: Element[];
  status?: 'done' | 'todo';
}

@Injectable({
  providedIn: 'root'
})

export class ReceipeService {
  private receipes: Receipe[];
  constructor(private elementService: ElementService) {
    this.receipes = [
      { id: '1', name: 'Basic furnace',
        description: "Can't do much without a furnace 'ey!",
        elements: [elementService.getElementByName("Stone"), elementService.getElementByName("Wood planks"), elementService.getElementByName("Iron ore")]
      },
      { id: '2', name: 'Advanced furnace',
        description: "And better the furnace, better the possibilities 'ey!",
        elements: [elementService.getElementByName("Stone"), elementService.getElementByName("Wood planks"), elementService.getElementByName("Iron ore"), elementService.getElementByName("Upgrade")]
      },
      { id: '3', name: 'Pickaxe',
        description: "A handmade simple stone pickaxe.",
        elements: [elementService.getElementByName("Stone"), elementService.getElementByName("Wood planks")]
      },
      { id: '4', name: 'Advanced pickaxe',
        description: "A handmade upgraded stone pickaxe.",
        elements: [elementService.getElementByName("Stone"), elementService.getElementByName("Wood planks"), elementService.getElementByName("Upgrade")]
      },
      { id: '5', name: 'Pile of stones',
        description: "Good to look at..",
        elements: [elementService.getElementByName("Stone")]
      },
    ];
  }

  getAll(){ // Returns array of all receipes
    return this.receipes;
  }

  getAllName(name:string){ // Returns array of all elements names within a receipe by name
    const tab: string[] = [];
    let receipe = this.receipes.find((receipe) => receipe.name === name);
    if(receipe) { receipe.elements.forEach((r) => tab.push(" [" + r.name + "]")); };
    return tab;
  }

  checkAll(){ // Checks all elements status of every receipes : if all elements == "done", receipe.status = "done"
    let counter: number = 0;
    this.receipes.forEach((r) => {
      let subcounter: number = 0;
      r.elements.forEach((e) =>{ if(e.status == "done"){ subcounter = subcounter +1; } });
      if (subcounter == r.elements.length ){ r.status = "done"; counter = counter +1; }
                                   else { r.status = "todo"; }
    }); return counter;
  }
}
