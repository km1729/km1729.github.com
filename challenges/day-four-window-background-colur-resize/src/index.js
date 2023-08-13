import "/src/style.css";

function ChangeBackgroundColor() {
  const bodyColor = document.querySelector("body");
  const blue = "bgblue";
  const purple = "bgPurple";
  const yellow = "bgYellow";

  window.addEventListener("resize", changeColorOnSize);

  function changeColorOnSize() {
    const windowSize = window.innerWidth;
    console.log(windowSize);

    const classesAsString = bodyColor.classList.toString();
    console.log(classesAsString);

    if (windowSize <= 600) {
      bodyColor.classList.add(blue);
      bodyColor.classList.remove(purple);
      bodyColor.classList.remove(yellow);
    } else if (windowSize > 600 && windowSize < 800) {
      bodyColor.classList.remove(blue);
      bodyColor.classList.add(purple);
      bodyColor.classList.remove(yellow);
    } else {
      bodyColor.classList.remove(blue);
      bodyColor.classList.remove(purple);
      bodyColor.classList.add(yellow);
    }
  }
}

ChangeBackgroundColor();
