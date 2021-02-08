// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
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
      mockAll: '/assets/shared/services/testdata/notifications.json',
    },
    session: {
      baseUrl: '/app/API/session.php',
      mock: true,
    },
    userSettings: {
      baseUrl: '/app/API/user_settings.php',
    },
  },
  storage: {
    // define data to put into the session storage
    session: {
      // the key, tigrisInfo, will be set in the sessionStorage
      tigrisInfo: '/assets/shared/services/testdata/tigris-info.json',
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
