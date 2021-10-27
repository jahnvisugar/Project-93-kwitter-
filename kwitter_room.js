const firebaseConfig = {
      apiKey: "AIzaSyCRAMmxDn5xZUN1fpBXwnhWq_sHQs4MLG0",
      authDomain: "kwitter-66573.firebaseapp.com",
      databaseURL: "https://kwitter-66573-default-rtdb.firebaseio.com",
      projectId: "kwitter-66573",
      storageBucket: "kwitter-66573.appspot.com",
      messagingSenderId: "91959221894",
      appId: "1:91959221894:web:2b8460eb938caaf9c4bb07"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
