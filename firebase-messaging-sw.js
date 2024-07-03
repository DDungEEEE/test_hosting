importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyBuhrZJQdgT_Cz4YwcElqLDwFJDgYjCuao",
    authDomain: "sb-order-platform.firebaseapp.com",
    projectId: "sb-order-platform",
    storageBucket: "sb-order-platform.appspot.com",
    messagingSenderId: "857956745194",
    appId: "1:857956745194:web:51c8a22f0c6b3e5d43fc93",
    measurementId: "G-325WV0WQ19"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
