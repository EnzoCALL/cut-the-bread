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
      { id: '1', name: 'Stone', ammount: 1, required: 10},
      { id: '2', name: 'Iron ore', ammount: 2, required: 5},
      { id: '3', name: 'Wood planks', ammount: 32, required:30, status: 'done'}
    ];
  }

  getAll(){
    return this.elements;
  }
  getAllName(){
    const tab: string[] = []; // ici elle l'est
    this.elements.forEach((e) => tab.push(" [" + e.name + "]"));
    return tab;
  }
  getElements(id:string){
    return this.elements.find((element) => element.id === id);
  }
  addAmmount(name: string){
    let element = this.elements.find((element) => element.name === name);
    if(element) { element.ammount = element.ammount + 1; };
  }
  subAmmount(name: string){
    let element = this.elements.find((element) => element.name === name);
    if(element) { element.ammount = element.ammount - 1; };
  }
}
