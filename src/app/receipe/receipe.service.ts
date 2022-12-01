import { Injectable } from '@angular/core';

export interface Receipe {
  id: string;
  name: string;
  description?: string;
  elements: string[]
  status?: 'done' | 'todo';
}

@Injectable({
  providedIn: 'root'
})

export class ReceipeService {
  private receipes: Receipe[];
  constructor() {
    this.receipes = [
      { id: '1', name: 'Basic furnace',
        description: "Can't do much without a furnace 'ey!",
        elements: ["Stone", "Iron ore", "Wood planks"]
      },
      { id: '2', name: 'Advanced furnace',
        description: "And better the furnace, better the possibilities 'ey!",
        elements: ["Stone", "Iron ore", "Wood planks", "Upgrade"]
      },
      { id: '3', name: 'Pickaxe',
        description: "A handmade simple stone pickaxe.",
        elements: ["Stone", "Wood planks"]
      },
      { id: '4', name: 'Advanced pickaxe',
        description: "A handmade upgraded stone pickaxe.",
        elements: ["Stone", "Wood planks", "Upgrade"]
      },
      { id: '5', name: 'Pile of stones',
        description: "Good to look at..",
        elements: ["Stone"]
      },
    ];
  }

  getAll(){ // Retourne un tableau contenant toutes les recettes
    return this.receipes;
  }
  getAllName(name:string){ // Retourne un tableau contenant tout les noms d'elements d'un recette via son nom
    const tab: string[] = [];
    let receipe = this.receipes.find((receipe) => receipe.name === name);
    if(receipe) { receipe.elements.forEach((r) => tab.push(" [" + r + "]")); };
    return tab;
  }
}
