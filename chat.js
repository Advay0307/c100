var firebaseConfig = {
    apiKey: "AIzaSyCt3Ef06NxYGMeW-WVH5YB8vCmYm3-pIv0",
    authDomain: "lets-chat-project-baab1.firebaseapp.com",
    databaseURL: "https://lets-chat-project-baab1-default-rtdb.firebaseio.com",
    projectId: "lets-chat-project-baab1",
    storageBucket: "lets-chat-project-baab1.appspot.com",
    messagingSenderId: "494312623059",
    appId: "1:494312623059:web:ffea44be7fe492aa0b3d26"
  };



firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



