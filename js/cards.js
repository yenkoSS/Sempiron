/* OPEN BOX FAQ */

document.querySelectorAll(".card-faq").forEach((card) => {
  card.addEventListener("click", (e) => {
    const currentElement = e.currentTarget;
    const textDetailsCardFaq = e.currentTarget.querySelector(".text-details-card-faq");
    const textTitleCardFaq = e.currentTarget.querySelector(".text-title-card-faq");

    if (currentElement.style.backgroundColor === "" || currentElement.style.backgroundColor === "white") {
      textDetailsCardFaq.style.display = "block";
      textDetailsCardFaq.style.color = "white";
      textTitleCardFaq.style.color = "white";
      textTitleCardFaq.classList.add("mbot-30");
      card.style.backgroundColor = "var(--color-blue-med)";
    } else if (currentElement.style.backgroundColor === "var(--color-blue-med)") {
      textDetailsCardFaq.style.display = "none";
      textDetailsCardFaq.style.color = "white";
      textTitleCardFaq.style.color = "var(--color-blue-light)";
      textTitleCardFaq.classList.remove("mbot-30");
      card.style.backgroundColor = "white";
    }
  });
});
