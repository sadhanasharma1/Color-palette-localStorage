 let selectedColors = JSON.parse(localStorage.getItem("selectedColors")) || [
      "white",
    ];

    function changeColor(color) {
      document.body.style.backgroundColor = color;
      selectedColors.push(color);
      localStorage.setItem("selectedColors", JSON.stringify(selectedColors));
    }

    function buttonAnimation(color) {
      var activeButton = document.querySelector("#" + color);
      activeButton.classList.add("pressed");
      setTimeout(function () {
        activeButton.classList.remove("pressed");
      }, 100);
    }

    const colorButtons = document.querySelectorAll(".item");

    colorButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const colorId = this.id;
        let colorCode = colorId;

        changeColor(colorCode);
        buttonAnimation(colorCode);
      });
    });

    document.addEventListener("DOMContentLoaded", function () {
      if (selectedColors.length > 0) {
        changeColor(selectedColors[selectedColors.length - 1]);
      }
    });








