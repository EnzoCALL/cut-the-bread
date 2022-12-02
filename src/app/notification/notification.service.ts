import { Injectable } from '@angular/core';
import { LocalNotifications, LocalNotificationSchema, ScheduleOptions } from '@capacitor/local-notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notification1 : LocalNotificationSchema;
  private options : ScheduleOptions;

  constructor() {
    this.notification1 = {
      id: 1,
      title: "Good news!",
      body: 'A receipe is ready to craft!',
    }
    this.options = {
      notifications : [ this.notification1 ],
    }
  }

  sendNotification() { // Delivers the notification
    return LocalNotifications.schedule(this.options);
  }
  checkPermissions(){ // Checks if notifications are permitted
    return LocalNotifications.checkPermissions();
  }
  requestPermissions(){ // Requests permissions for notifications
    return LocalNotifications.requestPermissions();
  }
}
