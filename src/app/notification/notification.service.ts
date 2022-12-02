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
      title: "Ready",
      body: 'A receipe is ready to craft!',
    }

    this.options = {
      notifications : [ this.notification1 ],
    }
  }

  testNotification() {
    return this.notification1.schedule;
  }
  checkPermissions(){
    return LocalNotifications.checkPermissions();
  }
  requestPermissions(){
    return LocalNotifications.requestPermissions();
  }
}
