export const environment = {
  production: true,
  services: {
    actionItems: {
      baseUrl: '/app/API/actionItemListing.php',
    },
    businessObjects: {
      baseUrl: '/app/API/business_objects.php',
    },
    // maps to src/app/shared/services/notifications.service.ts
    notifications: {
      baseUrl: '/app/API/alerts.php/notifications',
      // set to empty string to disable, otherwise the NotificationsService.all function will load data from this file
      mockAll: '',
    },
    session: {
      baseUrl: '/app/API/session.php',
      mock: false,
    },
    userSettings: {
      baseUrl: '/app/API/user_settings.php',
    },
  },
  storage: {
    // define data to put into the session storage
    session: {
      // the key, tigrisInfo, will be set in the sessionStorage
      tigrisInfo: '',
    },
  },
};
