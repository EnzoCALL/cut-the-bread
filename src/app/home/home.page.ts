import { Component, OnInit } from '@angular/core';
import { PushNotifications } from '@capacitor/push-notifications';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  async testNotif() {
    alert("TEST"); // Ce bouton faira apparaitre un popup ou l'on rentrera les informations nécessaires à la création d'une carte
  }

  constructor() { }

  ngOnInit() {
  }

}
