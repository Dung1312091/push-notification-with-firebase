importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: '48493316426' // troque pelo seu sender id 
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    var notificationTitle = payload.data.title;
    var notificationOptions = {
      body: payload.data.body,
      icon: payload.data.icon
    };
  
    // return self.registration.showNotification(notificationTitle,
    //   notificationOptions);
    return self.registration.showNotification(notificationTitle, notificationOptions)
  });

  console.log("aaaa")