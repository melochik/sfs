let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'first.jpg') {
        myImage.setAttribute('src', 'second.jpg');
    } else {
        myImage.setAttribute('src', 'first.jpg');
    }
}

let myButton = document.querySelector('button');

let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}