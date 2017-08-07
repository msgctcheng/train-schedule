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
  $('.modal').modal({
    dismissible: false
  });
});
var dataRef = firebase.database();
var trainName = "";
var trainDest = "";
var firstTime = "";
var trainFreq = 0;
var currentTime = moment();
// Validation Functions - - - - - - - - - - - - - - - - - - - - - - - - - - -
function checkTime(){
    var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test($("#startTime").val());
    if (isValid) {
      $("#startTime").addClass("green lighten-3")
      setTimeout(function(){
        $("#startTime").removeClass("green lighten-3")
      }, 2000);
    } else {
      $("#startTime").addClass("red lighten-3");
      setTimeout(function(){
        $("#startTime").removeClass("red lighten-3")
      }, 750);
    }
    return isValid;
};

function notEmpty(){
  var checkName;
  var checkDest;
  var checkArrival;
  if ($("#trainName").val() != "") {
    $("#trainName").addClass("green lighten-3")
    setTimeout(function(){$("#trainName").removeClass("green lighten-2")}, 2000);
    checkName = true;
  } else {
    $("#trainName").addClass("red lighten-3");
    setTimeout(function(){
      $("#trainName").removeClass("red lighten-3")
    }, 750);
    checkName = false;
  }
  if ($("#destiNation").val() != "") {
    $("#destiNation").addClass("green lighten-3")
    setTimeout(function(){$("#destiNation").removeClass("green lighten-2")}, 2000);
    checkDest = true;
  } else {
    $("#destiNation").addClass("red lighten-3");
    setTimeout(function(){
      $("#destiNation").removeClass("red lighten-3")
    }, 750);
    checkDest = false;
  }
  if ($("#trainFreq").val() != "") {
    $("#trainFreq").addClass("green lighten-3")
    setTimeout(function(){$("#trainFreq").removeClass("green lighten-2")}, 2000);
    checkArrival = true;
  } else {
    $("#trainFreq").addClass("red lighten-3");
    setTimeout(function(){
      $("#trainFreq").removeClass("red lighten-3")
    }, 750);
    checkArrival = false;
  }
  if (checkName && checkDest && checkArrival) {
    return true;
  } else {
    return false;
  }
};

// database.ref().on("child_added", function(childSnapshot) {
//     var formatTime = moment(childSnapshot.val().firstTime, "HH:mm").subtract(1, "years");
//     console.log(formatTime);
//     var timeDiff = moment().diff(moment(formatTime), "minutes");
//     console.log("time: " + timeDiff);
//     var remTime = timeDiff % childSnapshot.val().trainFreq;
//     console.log("remainder: " + remTime);
//     var timeTill = trainFreq - remTime;
//     console.log("time till: " + timeTill);

//     var nextTime = moment().add(timeTill, "minutes");
//     console.log(nextTime)
    //$("#appendHere").append("<div class='chip row'><div class='new name col s3'>" + snap.val().trainName + "</div><div class='new dest col s3'>" + snap.val().trainDest + "</div><div class='new freq col s2'>" + nextTime + "</div><div class='new next col s2'>" + timeTill + "</div><div class='new away col s2'>1000</div></div>");

  // });      
//#submitButton onclick
$(document).on("click", ".subButton", function() {
  if(checkTime() && notEmpty()) {
    trainName = $("#trainName").val().trim();
    trainDest = $("#destiNation").val().trim();
    firstTime = $("#startTime").val().trim();
    trainFreq = $("#trainFreq").val();
   

    
  //push values to firebase
  dataRef.ref().push({
    trainName: trainName,
    trainDest: trainDest,
    firstTime: firstTime,
    trainFreq: trainFreq
  });
  //pull vals from firebase and store
  
  //format time
  
  //calculate Next Arrival and Minutes - Store values
  //append new chip w/ values from virebase and calculated vals
  }
  
 $("#form").modal("close");
});

dataRef.ref().on("child_added", function(childSnapshot) {
    var displayName = childSnapshot.val().trainName;
    var displayDest = childSnapshot.val().trainDest;
    var firstArr = childSnapshot.val().firstTime;
    var frequent = childSnapshot.val().trainFreq;
    console.log(displayName);
    console.log(displayDest);
    console.log(firstArr);
    console.log(frequent);
    //$("#appendHere").append("<div class='chip row'><div class='new name col s3'>" + snap.val().trainName + "</div><div class='new dest col s3'>" + snap.val().trainDest + "</div><div class='new freq col s2'>" + nextTime + "</div><div class='new next col s2'>" + timeTill + "</div><div class='new away col s2'>1000</div></div>");

  });      
 
  
      
      
    

   
 
    


