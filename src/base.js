import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAKc4ZU5l7j4SgQy2FvfXB7-o6-Pl_dYEs",
  authDomain: "catch-of-the-day-1643d.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-1643d.firebaseio.com",
  appId: "1:20629686959:web:7e07f330b678585fe0a25a",
});

const base = Rebase.createClass(firebaseApp.database());
// this is a named export
export { firebaseApp };

// this is a default export
export default base;
