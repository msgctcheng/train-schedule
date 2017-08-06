var config = {
    apiKey: "AIzaSyBYBy9iE9n2PeIFS3TndLkvLhUj3ScT7Rs",
    authDomain: "train-41371.firebaseapp.com",
    databaseURL: "https://train-41371.firebaseio.com",
    projectId: "train-41371",
    storageBucket: "train-41371.appspot.com",
    messagingSenderId: "316413168468"
  };

  firebase.initializeApp(config);
  $(document).ready(function(){
    $('.modal').modal();
  });
  
  var currentTime = new Date ();
  console.log(currentTime);

  //#submitButton

