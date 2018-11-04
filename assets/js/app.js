angular.module('app', ['app.controllers']);

firebase.initializeApp({
    apiKey: "AIzaSyD4wrpqL61-hK6O2UIZZ_pksAnLhZuPEtI",
    authDomain: "calhacks-bb99b.firebaseapp.com",
    databaseURL: "https://calhacks-bb99b.firebaseio.com",
    projectId: "calhacks-bb99b",
    storageBucket: "calhacks-bb99b.appspot.com",
    messagingSenderId: "516603599472"
  });

var database = firebase.database();
