const cards = [...document.querySelectorAll(".card")];

cards.forEach((card) => {
  cardHTML = card.children[0].innerHTML;
  card.addEventListener("mouseover", function () {
    card.children[0].classList.add("card-hover");
    setTimeout(function () {
      card.children[0].innerHTML = "";
    }, 200);
  });
  card.addEventListener("mouseout", function () {
    card.children[0].classList.remove("card-hover");
    setTimeout(function () {
      card.children[0].innerHTML = cardHTML;
    }, 200);
  });
});
