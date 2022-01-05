
  var itemOpen = document.getElementById("item1");
  var inner1 = document.querySelector("#window-inner1");
   var inner2 = document.querySelector("#window-inner2");
   var inner3 = document.querySelector("#window-inner3");
   var inner4 = document.querySelector("#window-inner4");

   var videoPlayer = document.getElementById("video-player");

   var videoClose = document.querySelector('.video-closer');



   var aboutMe = document.getElementById("about-me-container");


   var sbl1 = document.querySelector('.sbl1');
      var sbl2 = document.querySelector('.sbl2');
         var sbl3 = document.querySelector('.sbl3');
          var tab1 = document.querySelector('.tab1');
          var tab2 = document.querySelector('.tab2');
          var tab3 = document.querySelector('.tab3');


function active1(){
// sbl1.classList.add('active');
// sbl2.classList.remove('active');
// sbl3.classList.remove('active');

tab1.classList.add('active-tab');
tab2.classList.remove('active-tab');
tab3.classList.remove('active-tab');
}

function active2(){
// sbl2.classList.add('active');
// sbl1.classList.remove('active');
// sbl3.classList.remove('active');

tab2.classList.add('active-tab');
tab1.classList.remove('active-tab');
tab3.classList.remove('active-tab');
}

function active3(){
// sbl3.classList.add('active');
// sbl2.classList.remove('active');
// sbl1.classList.remove('active');

tab3.classList.add('active-tab');
tab1.classList.remove('active-tab');
tab2.classList.remove('active-tab');
}


function closer(){
  itemOpen.style.display = "none";
}

function openWindow(){

  itemOpen.style.display = "block";
  inner1.style.display = "flex";
  inner2.style.display = "none";
  inner3.style.display = "none";
  inner4.style.display = "none";


}


function openWindow2(){

  itemOpen.style.display = "block";
  inner2.style.display = "flex";
  inner1.style.display = "none";
  inner3.style.display = "none";
  inner4.style.display = "none";

}


function openWindow3(){

  itemOpen.style.display = "block";
  inner3.style.display = "block";
  inner1.style.display = "none";
  inner2.style.display = "none";
  inner4.style.display = "none";


}

function openWindow4(){

  itemOpen.style.display = "block";
  inner4.style.display = "flex";
  inner1.style.display = "none";
  inner2.style.display = "none";
  inner3.style.display = "none";


}


function slide(){


  if (aboutMe.style.bottom !== "150px") {
    aboutMe.style.bottom = "150px";
    aboutMe.style.opacity = "1";
  } else {
    aboutMe.style.bottom = "-800px";
    aboutMe.style.opacity = "0";
  }

}

function changeFrame(){

}

function toggleVideo(){

  if (videoPlayer.style.display !== "block"){
     videoPlayer.style.display = "block";
  } else {
    videoPlayer.style.display = "none";
  }




}


var vid1 = document.getElementById("vid1");

function showVideo(){


  if (vid1.style.maxHeight !== "100vh") {
    vid1.style.maxHeight = "100vh";
  } else {
    vid1.style.maxHeight = "0vh";
  }

}


//drag item
if(document.documentElement.clientWidth >= 800) {
    var dragItem = document.querySelector(".item");
  } else{
    var dragItem = 0;
  }
    var container = document.querySelector("#container");

    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {
      if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
      } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
      }

      if (e.target === dragItem) {
        active = true;
      }
    }

    function dragEnd(e) {
      initialX = currentX;
      initialY = currentY;

      active = false;
    }

    function drag(e) {
      if (active) {

        e.preventDefault();

        if (e.type === "touchmove") {
          currentX = e.touches[0].clientX - initialX;
          currentY = e.touches[0].clientY - initialY;
        } else {
          currentX = e.clientX - initialX;
          currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, dragItem);
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
