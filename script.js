const steps = document.querySelectorAll(".step");
const nextBtns = document.querySelectorAll(".next-button");
const backBtns = document.querySelectorAll(".back-button");

let index = 0;
nextBtns.forEach((nextBtn) => {
  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (index < 3) {
      index++;
      console.log(index);
    }
    changePage();
  });
});
backBtns.forEach((backBtn) => {
  backBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (index > 0) {
      index--;
      console.log(index);
    }
    changePage();
  });
});

function changePage() {
  steps.forEach((step, stepIndex) => {
    if (stepIndex == index) {
      step.classList.remove("hidden");
    } else {
      step.classList.add("hidden");
    }
  });
}

const planPrices = {
  monthly: ["$9/mo", "$12/mo", "$15/mo"],
  yearly: ["$90/y", "$120/y", "$150/y"],
};

const planPriceSpans = document.querySelectorAll(".plan-price");
const planBonusSpans = document.querySelectorAll(".plan-bonus");
const yearlyCheckbox = document.getElementById("yearly");

function updatePrices() {
  const isChecked = yearlyCheckbox.checked;

  planPriceSpans.forEach((pps, index) => {
    pps.textContent = isChecked
      ? planPrices.yearly[index]
      : planPrices.monthly[index];
  });

  planBonusSpans.forEach((bonus) => {
    if (isChecked) {
      bonus.classList.remove("hidden");
    } else {
      bonus.classList.add("hidden");
    }
  });
}

yearlyCheckbox.addEventListener("change", updatePrices);
updatePrices();
