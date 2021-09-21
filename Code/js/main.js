const buttons = document.querySelectorAll(".card_buttons button");
const sections = document.querySelectorAll(".card_section");
const card = document.querySelector(".card");

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);

  //   use the ternarry condition to check the condition

  targetSection !== "#about"
    ? card.classList.add("is_active")
    : card.classList.remove("is_active");

  card.setAttribute("data-state", targetSection);
  //   remove the active sesstion
  sections.forEach((s) => s.classList.remove("is_active"));
  //   remove the active button
  buttons.forEach((b) => b.classList.remove("is_active"));

  //   add the target section and button as active on click
  e.target.classList.add("is_active");
  section.classList.add("is_active");
};

// add listener event for all the buttons
buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});
