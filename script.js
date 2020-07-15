var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var timeEventJs = document.getElementById('timeEvent');
var lolCatImage = document.getElementById('lolcat');
//var image = lolCatImage.src;
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
var isPartyTime = false;
var partyTimeButton = document.getElementById('partyTimeButton');
var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');
var lunchTimeSelector = document.getElementById('lunchTimeSelector');
var napTimeSelector = document.getElementById('napTimeSelector');


var updateClock = function()
{
if (time == partyTime){
    messageText = "IZ PARTEE TIME!!";
	image = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg';
} else if (time == napTime) {
    messageText = "IZ NAP TIME...";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
} else if (time == lunchTime) {
    messageText = "IZ NOM NOM NOM TIME!!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
} else if (time == wakeupTime) {
    messageText = "IZ TIME TO GETTUP.";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
} else if (time < noon) {
    messageText = "Good morning!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
} else if (time > evening) {
    messageText = "Good Evening!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
} else {
    messageText = "Good afternoon!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
}
timeEventJs.innerText = messageText;
lolCatImage.src = image;
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};
showCurrentTime();
};
updateClock();
var oneSecond = 1000;
setInterval( updateClock, oneSecond);
//party time button code
var partyEvent = function() {

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
	   partyTimeButton.innerText = "Party over";
	   partyTimeButton.style.background = "#0A8DAB";
      // text in the button should read "Party Over"
      // color of the button should be "#0A8DAB" (bonus!)
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
     partyTimeButton.innerText = "PARTY TIME";
	   partyTimeButton.style.background = "#222";
	   // text in the button should read "PARTY TIME!"
      // color of the button should be "#222" (bonus!)
   }
};
partyTimeButton.addEventListener('click', partyEvent);

var wakeupEvent = function() {
wakeupTime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener('change', wakeupEvent);

var lunchEvent = function() {
	lunchTime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener('change', lunchEvent);

var napEvent = function(){
napTime = napTimeSelector.value;
};
napTimeSelector.addEventListener('change', napEvent);
