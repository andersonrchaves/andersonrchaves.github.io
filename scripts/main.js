var myHeading = document.querySelector('h1');
myHeading.textContent = 'Página Inicial';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/serpro-dataprev.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Por favor, digite seu nome.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Bem vindo ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Bem vindo ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
