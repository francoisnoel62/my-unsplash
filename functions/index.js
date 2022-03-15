const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.newImageUpload = functions.storage.object().onFinalize((photo) => {
  return admin.firestore().collection("photos").doc().create({
    "label": photo.metadata["label"],
    "photo_url": photo.mediaLink,
    "index": photo.metadata["label"].split(" "),
  });
});
