// mobile
//ul
let ulTranslate = document.getElementById("ulTranslate");
let translateBtn = document.getElementById("translateBtn");
let upIcon = document.getElementById("upIcon");
let downIcon = document.getElementById("downIcon");
let iconInner = document.getElementById("iconInner");

translateBtn.addEventListener("click", () => {



    if (iconInner.innerHTML != `<i class="fa-solid fa-caret-up"></i>`) {
        iconInner.innerHTML = `<i class="fa-solid fa-caret-up"></i>`;        
        ulTranslate.classList.add("showUl");    
    } else {
        iconInner.innerHTML = `<i class="fa-solid fa-caret-down"></i>`;
        ulTranslate.classList.remove("showUl");
    }









    // if (ulTranslate.classList === "showUl") {
    //     ulTranslate.classList.add("showUl");    
    //     downIcon.style.fontSize = "0px";
    //     upIcon.style.fontSize = "17px";
    // } else {

    //     upIcon.style.fontSize = "0px";
    //     downIcon.style.fontSize = "17px";
    // }
});













//Slides 

let sliderDiv = document.getElementById("sliderDiv");



let i = 0;
let images = [
    `images/backg0.png`,
    `images/backg1.png`,
    `images/backg2.png`
];




setInterval(function () {
    sliderDiv.innerHTML = `<img class="imgSlides" src="${images[i]}">`;
        i++

        if(i == 3) {
            i = 0;
        }
        
}, 4100)











// Films slide
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
let gallery = document.getElementById("gallery");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;

    if (scrollContainer.scrollLeft >= 1) {
        gallery.style.marginLeft = "1%"
        backBtn.style.backgroundColor = "rgba(30, 30, 30, 0.971)"
        backBtn.style.fontSize = "18px"
    }
    if (scrollContainer.scrollLeft >= 714) {
        nextBtn.style.backgroundColor = "rgba(0, 0, 0, 0)"
        nextBtn.style.fontSize = "0px"
        }

    if (scrollContainer.scrollLeft <= 1){
        gallery.style.marginLeft = "-7%"
        backBtn.style.backgroundColor = "rgba(0, 0, 0, 0)"
        backBtn.style.fontSize = "0px"
    }
    if (scrollContainer.scrollLeft <= 714) {
        nextBtn.style.backgroundColor = "rgba(30, 30, 30, 0.971)"
        nextBtn.style.fontSize = "18px"
        }


});



nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollbehavior = "smooth";
    scrollContainer.scrollLeft += 100;
    if (scrollContainer.scrollLeft >= 0) {
        gallery.style.marginLeft = "1%"
        backBtn.style.backgroundColor = "rgba(30, 30, 30, 0.971)"
        backBtn.style.fontSize = "18px"
    }
    if (scrollContainer.scrollLeft >= 714) {
        nextBtn.style.backgroundColor = "rgba(0, 0, 0, 0)"
        nextBtn.style.fontSize = "0px"
        }
});


backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 100;
    if (scrollContainer.scrollLeft <= 15){
        gallery.style.marginLeft = "-7%"
        backBtn.style.backgroundColor = "rgba(0, 0, 0, 0)"
        backBtn.style.fontSize = "0px"
    }
    if (scrollContainer.scrollLeft <= 714) {
        nextBtn.style.backgroundColor = "rgba(30, 30, 30, 0.971)"
        nextBtn.style.fontSize = "18px"
        }
    
});




if (window.matchMedia("(min-width:767px) and (max-width:1023px)").matches) {
    // Films slide


scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;

    if (scrollContainer.scrollLeft >= 1) {
        gallery.style.marginLeft = "1%"
        backBtn.style.backgroundColor = "rgba(30, 30, 30, 0.971)"
        backBtn.style.fontSize = "18px"
    }
    if (scrollContainer.scrollLeft >= 375) {
        nextBtn.style.backgroundColor = "rgba(0, 0, 0, 0)"
        nextBtn.style.fontSize = "0px"
        }

    if (scrollContainer.scrollLeft <= 1){
        gallery.style.marginLeft = "-7%"
        backBtn.style.backgroundColor = "rgba(0, 0, 0, 0)"
        backBtn.style.fontSize = "0px"
    }
    if (scrollContainer.scrollLeft <= 370) {
        nextBtn.style.backgroundColor = "rgba(30, 30, 30, 0.971)"
        nextBtn.style.fontSize = "18px"
        }


});



nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollbehavior = "smooth";
    scrollContainer.scrollLeft += 100;
    if (scrollContainer.scrollLeft >= 0) {
        gallery.style.marginLeft = "1%"
        backBtn.style.backgroundColor = "rgba(30, 30, 30, 0.971)"
        backBtn.style.fontSize = "18px"
    }
    if (scrollContainer.scrollLeft >= 370) {
        nextBtn.style.backgroundColor = "rgba(0, 0, 0, 0)"
        nextBtn.style.fontSize = "0px"
        }
});




}








// FAQs Section
let faqsBoxDiv1 = document.getElementById("faqsBoxDiv1");
let faqsBoxDiv2 = document.getElementById("faqsBoxDiv2");
let faqsBoxDiv3 = document.getElementById("faqsBoxDiv3");
let faqsBoxDiv4 = document.getElementById("faqsBoxDiv4");
let faqsBoxDiv5 = document.getElementById("faqsBoxDiv5");
let faqsBoxDiv6 = document.getElementById("faqsBoxDiv6");


let paragFaqs1 = document.getElementById("paragFaqs1");
let paragFaqs2 = document.getElementById("paragFaqs2");
let paragFaqs3 = document.getElementById("paragFaqs3");
let paragFaqs4 = document.getElementById("paragFaqs4");
let paragFaqs5 = document.getElementById("paragFaqs5");
let paragFaqs6 = document.getElementById("paragFaqs6");

let iconPlusClick1 = document.getElementById("iconPlusClick1");
let iconPlusClick2 = document.getElementById("iconPlusClick2");
let iconPlusClick3 = document.getElementById("iconPlusClick3");
let iconPlusClick4 = document.getElementById("iconPlusClick4");
let iconPlusClick5 = document.getElementById("iconPlusClick5");
let iconPlusClick6 = document.getElementById("iconPlusClick6");
    
faqsBoxDiv1.addEventListener("click", () => {

    if (iconPlusClick1.innerHTML != `<i class="fa-solid fa-xmark"></i>`){
        paragFaqs1.style.transition = "All 1s"
        iconPlusClick1.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        paragFaqs1.classList.add("showParag");

        iconPlusClick2.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs2.classList.remove("showParag");

        iconPlusClick3.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs3.classList.remove("showParag");

        iconPlusClick4.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs4.classList.remove("showParag");

        iconPlusClick5.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs5.classList.remove("showParag");

        iconPlusClick6.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs6.classList.remove("showParag");
    }else {
        iconPlusClick1.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs1.classList.remove("showParag");
     }

})

faqsBoxDiv2.addEventListener("click", () => {

    if (iconPlusClick2.innerHTML != `<i class="fa-solid fa-xmark"></i>`){

        iconPlusClick2.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        paragFaqs2.classList.add("showParag");

        iconPlusClick1.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs1.classList.remove("showParag");

        iconPlusClick3.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs3.classList.remove("showParag");

        iconPlusClick4.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs4.classList.remove("showParag");

        iconPlusClick5.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs5.classList.remove("showParag");

        iconPlusClick6.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs6.classList.remove("showParag");

    }else {
        iconPlusClick2.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs2.classList.remove("showParag");
     }

})

faqsBoxDiv3.addEventListener("click", () => {

    if (iconPlusClick3.innerHTML != `<i class="fa-solid fa-xmark"></i>`){
        
        iconPlusClick3.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        paragFaqs3.classList.add("showParag");

        iconPlusClick1.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs1.classList.remove("showParag");

        iconPlusClick2.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs2.classList.remove("showParag");

        iconPlusClick4.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs4.classList.remove("showParag");

        iconPlusClick5.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs5.classList.remove("showParag");

        iconPlusClick6.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs6.classList.remove("showParag");
    }else {
        iconPlusClick3.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs3.classList.remove("showParag");
     }

})

faqsBoxDiv4.addEventListener("click", () => {

    if (iconPlusClick4.innerHTML != `<i class="fa-solid fa-xmark"></i>`){
        
        iconPlusClick4.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        paragFaqs4.classList.add("showParag");

        iconPlusClick1.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs1.classList.remove("showParag");

        iconPlusClick2.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs2.classList.remove("showParag");

        iconPlusClick3.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs3.classList.remove("showParag");

        iconPlusClick5.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs5.classList.remove("showParag");

        iconPlusClick6.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs6.classList.remove("showParag");
    }else {
        iconPlusClick4.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs4.classList.remove("showParag");
     }

})

faqsBoxDiv5.addEventListener("click", () => {

    if (iconPlusClick5.innerHTML != `<i class="fa-solid fa-xmark"></i>`){
        
        iconPlusClick5.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        paragFaqs5.classList.add("showParag");

        iconPlusClick1.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs1.classList.remove("showParag");

        iconPlusClick2.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs2.classList.remove("showParag");

        iconPlusClick3.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs3.classList.remove("showParag");

        iconPlusClick4.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs4.classList.remove("showParag");

        iconPlusClick6.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs6.classList.remove("showParag");
    }else {
        iconPlusClick5.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs5.classList.remove("showParag");
     }

})

faqsBoxDiv6.addEventListener("click", () => {

    if (iconPlusClick6.innerHTML != `<i class="fa-solid fa-xmark"></i>`){
        
        iconPlusClick6.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        paragFaqs6.classList.add("showParag");

        iconPlusClick1.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs1.classList.remove("showParag");

        iconPlusClick2.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs2.classList.remove("showParag");

        iconPlusClick3.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs3.classList.remove("showParag");

        iconPlusClick4.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs4.classList.remove("showParag");

        iconPlusClick5.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs5.classList.remove("showParag");
    }else {
        iconPlusClick6.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        paragFaqs6.classList.remove("showParag");
     }

})










// contact 
let inputContent = document.getElementById("inputContent");
function clearInputContent() {
    inputContent.value = "";
}

let inputContentTwo = document.getElementById("inputContentTwo");

function clearInputContentTwo() {
    inputContentTwo.value = "";
}
