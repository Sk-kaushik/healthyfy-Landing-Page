window.addEventListener("load", () => {
  var prev = document.querySelector(".prev-btn");
  var next = document.querySelector(".next-btn");

  var recipeBox = document.querySelector(".recipe");
  var recipeList = document.querySelectorAll(".recipe p");

  prev.addEventListener("click", (e) => {
    Slide(-1);
  });
  next.addEventListener("click", (e) => {
    Slide(+1);
  });

  var slideIndex = 1;
  showRecipe(slideIndex);

  function Slide(n) {
    slideIndex = slideIndex + n;
    showRecipe(slideIndex);
  }

  function showRecipe(n) {
    console.log("slide index " + slideIndex);

    if (n > recipeList.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = recipeList.length;
    }

    for (var i = 0; i < recipeList.length; i++) {
      recipeList[i].classList.add("removeRecipe");
      recipeList[i].classList.remove("activeRecipe");

      console.log("loop");
    }

    recipeList[slideIndex - 1].classList.remove("removeRecipe");
    recipeList[slideIndex - 1].classList.add("activeRecipe");
  }
});
