// list + define variables global(?)

var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours();
var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeupTimeSelector = document.getElementById("wakeupTimeSelector");


// write + run functions

var updateClock = function() {

     var lolcat = document.getElementById('lolcat');    // local variables
     var message =
		 document.getElementById('timeEvent');
     var messageText;
	   var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

     if (time == partyTime) {
          image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
          messageText = "IZ PARTEE TIME!!";
     } else if (time == napTime) {
          image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/napTime.jpg";
          messageText = "IZ NAP TIME...";
     } else if (time == lunchTime) {
          image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/lunchTime.jpg";
          messageText = "IZ NOM NOM NOM TIME!!";
     } else if (time == wakeupTime) {
          image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";
		      messageText = "IZ TIME TO GETTUP.";
     } else if (time < noon) {
          messageText = "Good Morning!";
     } else if (time > evening) {
          messageText = "Good Evening!";
     } else {
          messageText = "Good Afternoon!";
     }

	message.innerText = messageText;
    lolcat.src = image;

    showCurrentTime();

};

var showCurrentTime = function() {
     // display the string on the webpage
     var clock = document.getElementById('clock');

     var currentTime = new Date();
     var hours = currentTime.getHours();
     var minutes = currentTime.getMinutes();
     var seconds = currentTime.getSeconds();
     var meridian = "AM";

	// Set Hours
     if (hours >= noon) {
          meridian = "PM";
     }

     if (hours > noon) {
          hours = hours - 12;
     }

	// Set Minutes
     if (minutes < 10) {
          minutes = "0" + minutes;
     }

     // Set Seconds
     if (seconds < 10) {
          seconds = "0" + seconds;
     }

	// put together the string that displays the time
     var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

     clock.innerText = clockTime;
};

updateClock();

var oneSecond = 1000;

setInterval(updateClock, oneSecond);

var partyEvent = function() {

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "PARTY TIME!";
      partyTimeButton.style.backgroundColor = "#222";
   } else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY OVER";
      partyTimeButton.style.backgroundColor = "#0A8DAB";
   }
};

var wakeupEvent = function() {
	wakeupTime = wakeupTimeSelector.value;
};

var lunchEvent = function() {
	lunchTime = lunchTimeSelector.value;
};

var napEvent = function() {
	napTime = napTimeSelector.value;
};

partyTimeButton.addEventListener('click', partyEvent);
wakeupTimeSelector.addEventListener('change', wakeupEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);
