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
      { id: '1', name: 'Stone', ammount: 6, required: 10, status: "todo"},
      { id: '2', name: 'Iron ore', ammount: 2, required: 5, status: "todo"},
      { id: '3', name: 'Wood planks', ammount: 0, required:2, status: "todo"},
      { id: '4', name: 'Upgrade', ammount: 0, required:1, status: "todo"},
    ];
  }

  getAll(){ // Returns array of all elements
    return this.elements;
  }
  getAllName(){ // Returns array of all elements name inbetween '[ ]'
    const tab: string[] = [];
    this.elements.forEach((e) => tab.push(" [" + e.name + "]"));
    return tab;
  }
  getElements(id:string){ // Returns element by ID
    return this.elements.find((element) => element.id === id);
  }
  getElementByName(name:string): Element{ // Returns element by name
    return this.elements.find((element) => element.name === name) as Element;
  }
  addAmmount(name: string){ // Adds one to element ammount then call setStatus
    let element = this.elements.find((element) => element.name === name);
    if(element) { element.ammount = element.ammount + 1;  this.setStatus(element); };
  }
  subAmmount(name: string){ // Removes one to element ammount then call setStatus
    let element = this.elements.find((element) => element.name === name);
    if(element) { element.ammount = element.ammount - 1;  this.setStatus(element); };
  }
  setStatus(element: Element){ // Sets element status depending 'ammount' & 'required'
    if(element.ammount >= element?.required){
             element.status = "done";
    } else { element.status = "todo" }
  }
}
