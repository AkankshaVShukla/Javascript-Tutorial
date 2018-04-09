var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myButton = document.querySelector('button');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
var myImage = document.querySelector('img');

myImage.onclick = function() {

    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox3.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}