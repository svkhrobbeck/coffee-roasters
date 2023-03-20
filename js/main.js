document.addEventListener("click", (evt) => {
  toggleAccordion(evt);
  modalCloseClick(evt);
  modalOutsideCloseClick(evt);
  modalOpenClick(evt);
  navToggleClick(evt);
});

function navToggleClick(evt) {
  const el = evt.target.closest("[data-nav-toggler]");

  if (!el) return;

  const elSelector = el.dataset.navToggler;

  document.querySelector(`[${elSelector}]`).classList.toggle("show");
  document.body.classList.toggle("blocked");
  el.classList.toggle("show");
}

function toggleAccordion(evt) {
  const el = evt.target.closest("[data-type-content]");

  if (!el) return;

  addVisuallyHidden();
  el.querySelector("img").classList.toggle("rotate");
  el.nextElementSibling.classList.remove("visually-hidden");
}

function addVisuallyHidden() {
  const els = document.querySelectorAll("[data-type-content]");

  els.forEach((item) => {
    item.querySelector("img").classList.remove("rotate");
    item.nextElementSibling.classList.add("visually-hidden");
  });
}

function modalCloseClick(evt) {
  const el = evt.target.closest("[data-modal-checkout]");

  if (!el) return;

  document.body.classList.remove("blocked");
  el.parentElement.parentElement.parentElement.classList.remove("show");
}

function modalOutsideCloseClick(evt) {
  const el = evt.target;

  if (el.matches("[data-modal-inner]")) return;

  document.body.classList.remove("blocked");
  el.classList.remove("show");
}

function modalOpenClick(evt) {
  const el = evt.target.closest("[data-modal-open]");

  if (!el) return;

  const elSelector = el.dataset.modalOpen;

  document.body.classList.add("blocked");
  document.querySelector(elSelector).classList.add("show");
}

function responsiveText() {
  const el = document.querySelector("[data-modal-checkout]");
  if (window.innerWidth < 576) {
    el.textContent = "Checkout - $14.00 / mo";
  } else if (window.innerWidth > 576) {
    el.textContent = "Checkout";
  }
}

responsiveText();
document.addEventListener("resize", () => responsiveText());
