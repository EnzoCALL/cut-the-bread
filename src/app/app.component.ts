import { Component } from '@angular/core';
import { PushNotifications } from '@capacitor/push-notifications';

async () => { // Ajoute les listeners nécessaire aux notifications
  await PushNotifications.addListener('registration', token => {
    console.info('Registration token: ', token.value);
  });
  await PushNotifications.addListener('registrationError', err => {
    console.error('Registration error: ', err.error);
  });
  await PushNotifications.addListener('pushNotificationReceived', notification => {
    console.log('Push notification received: ', notification);
  });
  await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
    console.log('Push notification action performed', notification.actionId, notification.inputValue);
  });
}

async () => { // trigger la demande d'autorisation des notifications à l'utilisateur
  let permStatus = await PushNotifications.checkPermissions();

  if (permStatus.receive === 'prompt') {
    permStatus = await PushNotifications.requestPermissions();
  }
  if (permStatus.receive !== 'granted') {
    throw new Error('User denied permissions!');
  }
  await PushNotifications.register();

  const notificationList = await PushNotifications.getDeliveredNotifications();
  console.log('delivered notifications', notificationList);
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/Home', icon: 'home' },  // Page principale - vue des cartes & ajout des cartes
    { title: 'Edit', url: '/Edit', icon: 'home' },  // Page secondaire - édition des cartes déja présentes
  ];

  constructor() {}
}
