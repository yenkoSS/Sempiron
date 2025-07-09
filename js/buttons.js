/* INTERNAL BUTTONS */

document.querySelectorAll(".btn-nav-header").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".btn-contact").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelector(".btn-hero").addEventListener("click", () => {
  document.querySelector("#despre").scrollIntoView({ behavior: "smooth" });
});
/* INTERSECTION OBSERVERS */

/* OLD WAY OBSERVERS 

const textAboutList = document.querySelectorAll(".text-about");
const cardsServicesList = document.querySelectorAll(".card-services");
const cardsTeamList = document.querySelectorAll(".card-team");
const cardsFaqList = document.querySelectorAll(".card-faq");
const h3List = document.querySelectorAll("h3");
const cardContact = document.querySelector(".card-contact");
const imgAbout = document.querySelector(".box-img-about");

const offsetYObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("offset-y0", entry.isIntersecting);
    if (entry.isIntersecting) offsetYObserver.unobserve(entry.target);
  });
});

const offsetXObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("offset-x0", entry.isIntersecting);
    if (entry.isIntersecting) offsetXObserver.unobserve(entry.target);
  });
});

textAboutList.forEach((text) => offsetYObserver.observe(text));
cardsServicesList.forEach((card) => offsetYObserver.observe(card));
cardsTeamList.forEach((card) => offsetYObserver.observe(card));
cardsFaqList.forEach((card) => offsetYObserver.observe(card));
h3List.forEach((h3) => offsetXObserver.observe(h3));
offsetXObserver.observe(cardContact);
offsetXObserver.observe(imgAbout); */
