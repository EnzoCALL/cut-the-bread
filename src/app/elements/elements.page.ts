import { Element, ElementService } from './../element/element.service';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.page.html',
  styleUrls: ['./elements.page.scss'],
})
export class ElementsPage implements OnInit {
  elements: Element[];

  constructor(
    private elementService: ElementService,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private toastController: ToastController)
  {
    this.elements = this.elementService.getAll();
  }

  ngOnInit() {
  }

  deleteElement(element: Element){
    this.elements = this.elements.filter((e) => e.id !== element.id);
  }
  addOne(name : string){
    this.elementService.addAmmount(name);
  }
  subOne(name : string){
    this.elementService.subAmmount(name);
  }
}

