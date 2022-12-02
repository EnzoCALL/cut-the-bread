import { ElementService } from './../element/element.service';
import { Receipe, ReceipeService } from './../receipe/receipe.service'
import { Component, OnInit } from '@angular/core';
import { NotificationService } from './../notification/notification.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  receipes: Receipe[];

  public eachElements: string[];  // All elements name
  public nbReceipes: number;      // Receipes ammount

  constructor(private elementService:ElementService, private receipeService:ReceipeService, private notificationService:NotificationService){
    this.eachElements = this.elementService.getAllName();
    this.nbReceipes = this.receipeService.getAll().length;
    this.receipes = this.receipeService.getAll();
  }
  ngOnInit(): void { // On page init, will check every receipe's element status to see if they're all fillfuled
    this.receipeService.checkAll();
  }
  getAllElements(name: string){ // Gets all elements from a receipe using its name
    return this.receipeService.getAllName(name);
  }
  addReceipe(){ // TODO
    //alert("Feature is not added yet");
    this.notificationService.checkPermissions();
    if (confirm("Checking permissions, press OK to request permissions") == true) {
      this.notificationService.requestPermissions();
      if (confirm("Requesting permissions, press OK to test notifications") == true) {
        this.notificationService.testNotification();
      } else { }
    } else {
      this.notificationService.testNotification();
    }
  }
}
