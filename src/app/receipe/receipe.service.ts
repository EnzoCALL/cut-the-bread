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

  getAll(){ // Retourne un tableau contenant toutes les recettes
    return this.receipes;
  }

  getAllName(name:string){ // Retourne un tableau contenant tout les noms d'elements d'un recette via son nom
    const tab: string[] = [];
    let receipe = this.receipes.find((receipe) => receipe.name === name);
    if(receipe) { receipe.elements.forEach((r) => tab.push(" [" + r.name + "]")); };
    return tab;
  }

  checkAll(){
    this.receipes.forEach((r) => {
      let counter: number = 0;
      r.elements.forEach((e) =>{ if(e.status == "done"){ counter = counter +1; } });
      if (counter == r.elements.length ){ r.status = "done"; }
      else { r.status = "todo"; }
    })
  }
}
