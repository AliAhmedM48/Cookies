// var testingData = {
//   name: "Kareem Bush",
//   phone: "(547) 115-4112",
//   email: "faucibus.leo@yahoo.net",
//   date: "Nov 16, 2024",
// };

// for (const key in testingData) {
//   document.cookie = `${key}=${testingData[key]}`;
// }

console.log("document.cookie");
console.log(document.cookie);

// ======================================> Functions

//#region getCookie | Retrieves a cookie value based on a cookie name.
function getCookie(cookieName) {
  var result = null;
  // cookies;
  // 'name = ali; age = 25; job = dev'

  // cookies.split(';');
  // ['name=ali', ' age=25', ' job=dev']

  document.cookie.split(";").forEach(function (cookie) {
    // console.log(cookie);
    // name=ali
    //  age = 25
    //  job = dev

    // console.log(cookie.trim().split('='));
    // ['name', 'ali']
    // ['age', '25']
    // ['job', 'dev']

    var [cookieKey, cookieValue] = cookie.trim().split("=");
    if (cookieName === cookieKey) result = cookieValue;
  });
  return result;
}
// console.log(getCookie('job'));
//#endregion

//#region setCookie | Sets a cookie based on a cookie name, cookie value, and expiration date.
function setCookie(cookieName, cookieValue, expiryDate = new Date()) {
  // if (typeof expiryDate !== "object") throw `expiryDate is not Date Object.`;
  document.cookie = `${cookieName}=${cookieValue}; expires=${expiryDate};`;
  return document.cookie;
}
// setCookie('role', 'manager', new Date());
//#endregion

//#region deleteCookie(cookieName) | Deletes a cookie based on a cookie name.
function deleteCookie(cookieName) {
  if (getCookie(cookieName) !== null) {
    setCookie(cookieName, null, new Date(`1990-1-1`));
    return document.cookie;
  }
  return null;
}
// deleteCookie('name');
//#endregion

//#region allCookieList() | returns a list of all stored cookies.
function allCookieList() {
  return document.cookie.split("; ");
}
//#endregion

//#region hasCookie(cookieName) | Check whether a cookie exists or not.
function hasCookie(cookieName) {
  if (getCookie(cookieName) !== null) return true;
  return false;
}
//#endregion
