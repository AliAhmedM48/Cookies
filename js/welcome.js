console.log("welcome page");
// Retrieve the data from the URL
var urlData = window.location.search;
var urlParams = new URLSearchParams(urlData);
var userName = urlParams.get("name");

var cookiesData = JSON.parse(getCookie("data"));
console.log(cookiesData);
var userData;

for (var i = 0; i < cookiesData.length; i++) {
  if (cookiesData[i].name === userName) userData = cookiesData[i];
}

// ! ---------------------------------

// * HTML Elements
var userNameSpan = $("span[id=userNameSpan]");
var numOfVisitsSpan = $("span[id=numOfVisitsSpan]");
var profilePicTage = $("img[id=profilePic]");

userNameSpan.html(userData.name);
userNameSpan.css("text-transform", "capitalize");
userNameSpan.css("color", userData.color);

numOfVisitsSpan.html(userData.numOfVisits);
numOfVisitsSpan.css("color", userData.color);

var imgNewSrc = profilePicTage.prop("src").split("/");
var imgIndex = imgNewSrc.length - 1;

imgNewSrc.splice(imgIndex, 1, userData.gender + ".png");
imgNewSrc = imgNewSrc.join("/");

profilePicTage.prop("src", imgNewSrc);
