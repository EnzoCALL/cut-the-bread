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
      { id: '1', name: 'Stone', ammount: 6, required: 10},
      { id: '2', name: 'Iron ore', ammount: 2, required: 5},
      { id: '3', name: 'Wood planks', ammount: 5, required:2, status: 'done'},
      { id: '4', name: 'Upgrade', ammount: 0, required:1},
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
             element.status = "done";  this.checkAll();
    } else { element.status = "todo" }
  }
  checkAll(){
    const eReady: string[] = [];
    this.elements.forEach((e) => { if(e.status == "done"){ eReady.push(e.name); } })
  }
}
