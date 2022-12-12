// preferences
var elPreferences = document.querySelector("[data-preferences]");
var elBoxPreferences = document.querySelector("[data-preferences-box]");
var elArrowPreferences = document.querySelector("[data-preferences-arrow]");
elArrowPreferences.classList.add("rotate");
elBoxPreferences.classList.add("visually-hidden");

elPreferences.addEventListener("click", () => {
  elArrowPreferences.classList.toggle("rotate");
  elBoxPreferences.classList.toggle("visually-hidden");
});

// BeanType
var elBeanType = document.querySelector("[data-bean-type]");
var elBoxBean = document.querySelector("[data-bean-box]");
var elArrowBean = document.querySelector("[data-bean-arrow]");
elArrowBean.classList.add("rotate");
elBoxBean.classList.add("visually-hidden");

elBeanType.addEventListener("click", () => {
  elArrowBean.classList.toggle("rotate");
  elBoxBean.classList.toggle("visually-hidden");
});

// Quantity
var elQuantity = document.querySelector("[data-quantity]");
var elQuantityBox = document.querySelector("[data-quantity-box]");
var elQuantityArrow = document.querySelector("[data-quantity-arrow]");
elQuantityArrow.classList.add("rotate");
elQuantityBox.classList.add("visually-hidden");

elQuantity.addEventListener("click", () => {
  elQuantityArrow.classList.toggle("rotate");
  elQuantityBox.classList.toggle("visually-hidden");
});

// GrindOption
var elGrindOption = document.querySelector("[data-grind]");
var elGrindArrow = document.querySelector("[data-grind-arrow]");
var elGrindBox = document.querySelector("[data-grind-box]");
elGrindArrow.classList.add("rotate");
elGrindBox.classList.add("visually-hidden");

elGrindOption.addEventListener("click", () => {
  elGrindArrow.classList.toggle("rotate");
  elGrindBox.classList.toggle("visually-hidden");
});

// Deliveries
var elDeliveries = document.querySelector("[data-deliveries]");
var elDeliveriesArrow = document.querySelector("[data-deliveries-arrow]");
var elDeliveriesBox = document.querySelector("[data-deliveries-box]");
elDeliveriesArrow.classList.add("rotate");
elDeliveriesBox.classList.add("visually-hidden");

elDeliveries.addEventListener("click", () => {
  elDeliveriesArrow.classList.toggle("rotate");
  elDeliveriesBox.classList.toggle("visually-hidden");
});
