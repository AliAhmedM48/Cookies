// use it in creating the required cookies to display a greeting message
// to your visitor with displaying an image as his profile pic referring to his gender,

// inform him with his number of visits to the site.

// Display username and number of visits with font color according to his choices.

// Replace the registration page with the profile page using location object

// * HTML Elements
// ^ inputs
var nameInput = $("input[id=name]");
var ageInput = $("input[id=age]");
var colorInput = $("input[id=color]");
var maleInput = $("input[id=male]");
var femaleInput = $("input[id=female]");
var rememberInput = $("input[id=rememberCheck]");
// ^ submit button
var submitButton = $("button");

// * variables
var userData = {
  name: null,
  age: null,
  color: null,
  gender: null,
  numOfVisits: null,
};

var userList = getCookie("data") !== null ? JSON.parse(getCookie("data")) : [];
// console.log(getCookie("data") !== null ? JSON.parse(getCookie("data")) : []);

// * Functions
function validateNameInput() {
  if (/\b^[a-z]+\b$/.test(nameInput.val())) {
    nameInput.addClass("is-valid");
    nameInput.removeClass("is-invalid");
    return true;
  } else {
    nameInput.removeClass("is-valid");
    nameInput.addClass("is-invalid");
  }
  return null;
}

function validateAgeInput() {
  if (/\b^[1-9][0-9]\b$/.test(ageInput.val())) {
    ageInput.addClass("is-valid");
    ageInput.removeClass("is-invalid");
    return true;
  } else {
    ageInput.removeClass("is-valid");
    ageInput.addClass("is-invalid");
  }
  return null;
}

function checkGender() {
  // Check which gender checkbox is checked
  if (maleInput.prop("checked")) {
    return maleInput.val();
  } else if (femaleInput.prop("checked")) {
    return femaleInput.val();
  } else {
    console.log("x");
    console.log($("input[id=male]+lable"));
    $(maleInput).next("label").find("img").css("background-color", "#dc354580");
    $("input[id=female] + label img").css("background-color", "#dc354580");
    return null;
  }
}

function checkRemember() {
  // Check wheather remember is checked
  if (rememberInput.prop("checked")) return true;
  return null;
}

function checkOldUser() {
  var oldUser = null;
  for (var i = 0; i < userList.length; i++) {
    if (userList[i].name === nameInput.val()) oldUser = userList[i];
  }
  return oldUser;
}

function submitButtonFunction(event) {
  validateNameInput();
  validateAgeInput();
  checkGender();
  console.log(checkGender());
  if (validateNameInput() && validateAgeInput() && checkGender()) {
    if (checkOldUser()) {
      // ^ get data from inputs and set them to userData Object
      var oldUser = checkOldUser();
      oldUser.name = nameInput.val();
      oldUser.age = ageInput.val();
      oldUser.color = colorInput.val();
      oldUser.gender = checkGender();
      oldUser.numOfVisits = oldUser.numOfVisits + 1;
    } else {
      userData.name = nameInput.val();
      userData.age = ageInput.val();
      userData.color = colorInput.val();
      userData.gender = checkGender();
      userData.numOfVisits = 1;

      // ^ push userData Object to userList array
      userList.push(userData);
    }

    var expirationDate;
    if (checkRemember() !== null) expirationDate = new Date("2025-11-01");
    else expirationDate = new Date();

    // ^ set userData Object to Cookies Storage after convert it to json string
    setCookie("data", JSON.stringify(userList), expirationDate);

    var nextPageURL = "welcome.html?name=" + nameInput.val();
    location.replace(nextPageURL);
  }
}

// * Events
submitButton.click(submitButtonFunction);
nameInput.blur(validateNameInput);
ageInput.blur(validateAgeInput);
// ! ----------------------------------------------------------------
// Encode the data as a JSON string and append it to the URL
//   var encodedData = encodeURIComponent(JSON.stringify(userData));
//   var nextPageURL = "welcome.html?data=" + encodedData;
// ! ----------------------------------------------------------------
//   setCookie("name", userData.name, new Date());
//   setCookie("age", userData.age, new Date());
//   setCookie("color", userData.color, new Date());
//   setCookie("gender", userData.gender, new Date());
