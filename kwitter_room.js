var firebaseConfig = {
    apiKey: "AIzaSyCOjucCtxEPthTnsieTPvlUQko0azpeF2I",
    authDomain: "schoolchat-a0531.firebaseapp.com",
    databaseURL: "https://schoolchat-a0531-default-rtdb.firebaseio.com",
    projectId: "schoolchat-a0531",
    storageBucket: "schoolchat-a0531.appspot.com",
    messagingSenderId: "985533422274",
    appId: "1:985533422274:web:c82e064c5e60898f4a395b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addRoom(){
    name_room=document.getElementById("room_name").value; 
    firebase.database().ref("/").child(name_room).update({
    purpose: "adding room name"
    }) 
  }
