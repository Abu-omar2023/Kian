//select landing page element
let landingPage = document.querySelector(".landing-page"); 
// get array imges
let imgesarray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg","08.jpg","09.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg"];
//change background imge url
landingPage.style.backgroundImage = 'url("imgs/06.jpg")';
//get random number


setInterval(function () {
    let randomNum = Math.floor(Math.random() * imgesarray.length);
    //change background imge url
landingPage.style.backgroundImage = 'url("imgs/' + imgesarray[randomNum] + '")';
    console.log(randomNum)
}, 50000);
let mainColor = localStorage.getItem("color_option");

if (mainColor !== null) {
    document.documentElement.style.setProperty("--main--color" ,mainColor);
     
    //check fot active class
    document.querySelectorAll(".colors-list li").forEach(ele => {
        ele.classList.remove("active");
        if (ele.dataset.color === mainColor) {
            ele.classList.add("active");
           }
    });
  

}

//start theam colors
let btnColor = document.querySelector('.theam-colors .fa-gear');


btnColor.onclick = function() {
    let theamDiv = document.querySelector(".theam-colors");
    this.classList.toggle("fa-spin");
    theamDiv.classList.toggle("open");
}
//switch colors 
let colorsli = document.querySelectorAll(".colors-list li");
colorsli.forEach(li => {
    li.addEventListener("click", (e) => {
        //set on root
        document.documentElement.style.setProperty("--main--color" ,e.target.dataset.color);

        // set color on local storage

        localStorage.setItem("color_option", e.target.dataset.color);
        //remove active class from all children
        e.target.parentElement.querySelectorAll(".active").forEach(ele => {
            ele.classList.remove("active");
        });
        e.target.classList.add("active")
    });


});

//create popup with the image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {
    img.addEventListener("click", (e) => {

        let overlay = document.createElement("div");
        overlay.className = 'popup-overlay';
        document.body.appendChild(overlay);
        let popup_child = document.createElement("div");
        popup_child.className = "popup-child";
        popupImage = document.createElement("img");
        popupImage.src = img.src;
        popupImage.className = "img";
        popup_child.appendChild(popupImage);
        overlay.appendChild(popup_child);
        let closeBtn = document.createElement("span");
        let closeText = document.createTextNode("X");
        closeBtn.appendChild(closeText);
        popup_child.appendChild(closeBtn);
        closeBtn.className = "closeBtn";

    });
    //close popup 
    document.addEventListener("click", function (e) {

        if (e.target.className == "closeBtn"){
            e.target.parentNode.remove();
            document.querySelector(".popup-overlay").remove();

        }

    })

});
let myLink = document.querySelectorAll(".links li");
myLink.forEach(li => {
    li.addEventListener("click", (e) => {
        
        //remove active class from all children
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        e.target.classList.add("active")
    });


});
//let myLink = document.querySelectorAll(".links a");
myLink.forEach(link => {

    link.addEventListener("click", (e) => {
       
        e.preventDefault();

         document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: 'smooth'

         })
        
    });
});
let btn = document.querySelector(".btn");
window.onscroll = function (){
    if(window.scrollY >= 600){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }
};
btn.onclick = function (){
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"

    });
};
//start toggle menu 
let toggleBtn = document.querySelector(".toggle-menu");
let ulLinks = document.querySelector(".links");
toggleBtn.onclick = function (e) {
    e.stopPropagation();
this.classList.toggle("menu-active");
ulLinks.classList.toggle("open2")
};
// click anywhere outside menu
document.addEventListener("click", (e) => {
    if(e.target !== toggleBtn && e.target !== ulLinks){
        if(ulLinks.classList.contains("open2")) {
            toggleBtn.classList.toggle("menu-active");
            ulLinks.classList.toggle("open2")
        }
    }
});
ulLinks.onclick = function (e) {
    e.stopPropagation();
}