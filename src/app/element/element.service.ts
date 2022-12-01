import { Injectable } from '@angular/core';

export interface Element {
  id: string;
  name: string;
  ammount: number;
  required: number;
  status?: 'done' | 'todo';
}

@Injectable({
  providedIn: 'root'
})

export class ElementService {
  private elements: Element[];
  constructor() {
    this.elements = [
      { id: '1', name: 'Stone', ammount: 0, required: 10, status: "todo"},
      { id: '2', name: 'Iron ore', ammount: 0, required: 5, status: "todo"},
      { id: '3', name: 'Wood planks', ammount: 0, required:2, status: "todo"},
      { id: '4', name: 'Upgrade', ammount: 0, required:1, status: "todo"},
    ];
  }

  getAll(){
    return this.elements;
  }
  getAllName(){ // Retourne un tableau contenant tout les noms d'elements
    const tab: string[] = [];
    this.elements.forEach((e) => tab.push(" [" + e.name + "]"));
    return tab;
  }
  getElements(id:string){ // Retourne un element via son ID
    return this.elements.find((element) => element.id === id);
  }
  getElementByName(name:string): Element{ // Retourne un element via son nom
    return this.elements.find((element) => element.name === name) as Element;
  }
  addAmmount(name: string){ // Incrémente le montant d'un element de +1 via son nom
    let element = this.elements.find((element) => element.name === name);
    if(element) { element.ammount = element.ammount + 1;  this.setStatus(element); };
  }
  subAmmount(name: string){ // Incrémente le montant d'un element de -1 via son nom
    let element = this.elements.find((element) => element.name === name);
    if(element) { element.ammount = element.ammount - 1;  this.setStatus(element); };
  }
  setStatus(element: Element){ // Set le status d'un element selon son montant
    if(element.ammount >= element?.required){
             element.status = "done";
    } else { element.status = "todo" }
  }
}
