let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let iceCream = "chocolate";
if (iceCream === "chocolate") {
    alert("我最喜欢巧克力冰淇淋了。");
} else {
    alert("但是巧克力才是我的最爱呀……");
}

document.querySelector("html").addEventListener("click", () => {
    alert("别戳我，我怕疼。");
});

let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/Snipaste_2024-01-22_09-07-15.png");
        myImage.setAttribute("width", "100px");
        myImage.setAttribute("height", "100px");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
        myImage.setAttribute("width", "");
        myImage.setAttribute("height", "");
    }
};

let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
}

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
  }
  

myButton.onclick = function () {
    setUserName();
  };
  



