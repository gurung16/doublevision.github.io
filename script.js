
function initComparisons() {
  var x, i;
  /*find all elements with an "overlay" class:*/
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    /*once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function:*/
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider, img, clicked = 0, w, h;
    /*get the width and height of the img element*/
    w = img.offsetWidth;
    h = img.offsetHeight;
    /*set the width of the img element to 50%:*/
    img.style.width = (w / 2) + "px";
    /*create slider:*/
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /*insert slider*/
    img.parentElement.insertBefore(slider, img);
    /*position the slider in the middle:*/
    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
    /*execute a function when the mouse button is pressed:*/
    slider.addEventListener("mousedown", slideReady);
    /*and another function when the mouse button is released:*/
    window.addEventListener("mouseup", slideFinish);
    /*or touched (for touch screens:*/
    slider.addEventListener("touchstart", slideReady);
    /*and released (for touch screens:*/
    window.addEventListener("touchstop", slideFinish);
    function slideReady(e) {
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*the slider is now clicked and ready to move:*/
      clicked = 1;
      /*execute a function when the slider is moved:*/
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /*the slider is no longer clicked:*/
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      /*if the slider is no longer clicked, exit this function:*/
      if (clicked == 0) return false;
      /*get the cursor's x position:*/
      pos = getCursorPos(e)
      /*prevent the slider from being positioned outside the image:*/
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /*execute a function that will resize the overlay image according to the cursor:*/
      slide(pos);
    }
    function getCursorPos(e) {
      var a, x = 0;
      e = e || window.event;
      /*get the x positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x coordinate, relative to the image:*/
      x = e.pageX - a.left;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /*resize the image:*/
      img.style.width = x + "px";
      /*position the slider:*/
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }

};

initComparisons();




//Modal ----------------->
  function modal(){
       var modalparent = document.getElementsByClassName("modal_multi");

       // Get the button that opens the modal

       var modal_btn_multi = document.getElementsByClassName("myBtn_multi");

       // Get the <span> element that closes the modal
       var span_close_multi = document.getElementsByClassName("close_multi");

       // When the user clicks the button, open the modal
       function setDataIndex() {

           for (i = 0; i < modal_btn_multi.length; i++)
           {
               modal_btn_multi[i].setAttribute('data-index', i);
               modalparent[i].setAttribute('data-index', i);
               span_close_multi[i].setAttribute('data-index', i);
           }
       }



       for (i = 0; i < modal_btn_multi.length; i++)
       {
           modal_btn_multi[i].onclick = function() {
               var ElementIndex = this.getAttribute('data-index');
               modalparent[ElementIndex].style.display = "block";
           };

           // When the user clicks on <span> (x), close the modal
           span_close_multi[i].onclick = function() {
               var ElementIndex = this.getAttribute('data-index');
               modalparent[ElementIndex].style.display = "none";
           };

       }

       window.onload = function() {

           setDataIndex();
       };

       window.onclick = function(event) {
           if (event.target === modalparent[event.target.getAttribute('data-index')]) {
               modalparent[event.target.getAttribute('data-index')].style.display = "none";
           }
         }

 };

 modal();


//end----------------------->
