// DEPENDENCIES
const firebase_admin = require("firebase-admin");

// INITIALIZE
firebase_admin.initializeApp({
    credential: firebase_admin.credential.cert({
	projectId: process.env.FIREBASE_PROJECT_ID,
	clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
	privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    }),
    databaseURL: process.env.FIREBASE_DB_URL,
    storageBucket: process.env.FIREBASE_STORAGE_URL
});

module.exports = firebase_admin;
							    
