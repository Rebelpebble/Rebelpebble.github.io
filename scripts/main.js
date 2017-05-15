var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/rare-pepe.jpg') {
    myImage.setAttribute ('src','images/smart-pepe.jpg');
  } else {
    myImage.setAttribute ('src','images/rare-pepe.jpg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Pepe is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Pepe is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
