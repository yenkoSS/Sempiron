/* LOGO HEADER */

document.querySelector(".nav-header-logo").addEventListener("click", (e) => {
  e.preventDefault();
  const id = document.querySelector(".nav-header-logo").getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".nav-header-logo").forEach((headerLogo) =>
  headerLogo.addEventListener("click", (e) => {
    e.preventDefault();
    const id = document.querySelector(".nav-header-logo").getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  })
);

/* NAV HEADER LINK LG */

document.querySelectorAll(".nav-header-link-lg").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

/* NAV FIXED */
/*
window.addEventListener("scroll", () => {
  if (scrollY > 700) {
    document.querySelector(".nav-header").classList.add("fixed-nav");
  }
  if (scrollY < 700) {
    document.querySelector(".nav-header").classList.remove("fixed-nav");
  }
});
*/

window.addEventListener("scroll", () => {
  if (scrollY > 550) {
    console.log("Should appear");
    document.querySelector(".nav-fixed").style.display = "block";
  } else {
    document.querySelector(".nav-fixed").style.display = "none";
  }
});

/* NAV SM */

document.querySelectorAll(".icon-menu-nav-header").forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    document.querySelector(".nav-header-list-sm").style.display = "flex";
  });
});

document.querySelector(".icon-close").addEventListener("click", () => {
  document.querySelector(".nav-header-list-sm").style.display = "none";
});

document.querySelectorAll(".nav-header-link-sm").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href");
    document.querySelector(".nav-header-list-sm").style.display = "none";
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

/* LOGO FOOTER */

document.querySelector(".logo-footer").addEventListener("click", (e) => {
  e.preventDefault();
  const id = document.querySelector(".logo-footer").getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

/* NAV FOOTER LINK */

document.querySelectorAll(".nav-footer-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});
