// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  sayHello: () => {
    console.log("Hello!");
  },
  sayHi: () => {
    console.log("Hi");
  },
  sayLikeThis: (text) => {
    console.log(text);
  },
  changeTitle: () => {
    const h2 = document.querySelector("h2");
    h2.addEventListener("mouseover", mouseOver);
    function mouseOver() {
      h2.innerText = "The mouse is here!";
      h2.style.color = colors[0];
      // console.log(h2.outerText);
    }
    h2.addEventListener("mouseleave", mouseLeave);
    function mouseLeave() {
      h2.innerText = "The mouse is gone!";
      h2.style.color = colors[1];
      // console.log("mouse mouseleave");
    }
    window.addEventListener("contextmenu", mRightClick);
    function mRightClick(info) {
      // info.preventDefault();
      h2.innerText = "That was a right click!!";
      h2.style.color = colors[2];
    }

    window.addEventListener("resize", windowResize);
    function windowResize() {
      h2.innerText = "Window Resized!!";
      h2.style.color = colors[3];
    }
  }
};

superEventHandler.changeTitle();
