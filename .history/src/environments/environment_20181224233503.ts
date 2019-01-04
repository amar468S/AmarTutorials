// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyDWt74rP60MA1PLCdq6p3RQlC9nRTi3W_o",
    authDomain: "todolistapp-d46a1.firebaseapp.com",
    databaseURL: "https://todolistapp-d46a1.firebaseio.com",
    projectId: "todolistapp-d46a1",
    storageBucket: "todolistapp-d46a1.appspot.com",
    messagingSenderId: "721328897421"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
