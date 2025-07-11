let uptoExperience = 4500;
let uptoCars = 7500;

function updateCounterExperience() {
  let count = document.querySelector(".text-counter-cars");
  count.innerHTML = ++uptoExperience + "+<span>autovehicule reparate</span>";
  if (uptoExperience === 5000) {
    clearInterval(countsExperience);
  }
}

function updateCounterCars() {
  let count = document.querySelector(".text-counter-itp");
  const increased = ++uptoCars;
  count.innerHTML = increased.toLocaleString() + "+<span>autovehicule verificate</span>";
  if (uptoCars === 8000) {
    clearInterval(countsCars);
  }
}

let countsExperience;
let countsCars;

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        if (target.classList.contains("text-counter-cars")) {
          countsExperience = setInterval(updateCounterExperience, 10);
        } else if (target.classList.contains("text-counter-itp")) {
          countsCars = setInterval(updateCounterCars, 10);
        }
        observer.unobserve(target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

const counterCars = document.querySelector(".text-counter-cars");
const counterItp = document.querySelector(".text-counter-itp");

observer.observe(counterCars);
observer.observe(counterItp);
