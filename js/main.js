const buttonActiveClass = "tabs__btn--active";
const tabActiveClass = "tabs__content-item--active";

const defaultSelect = {
  button: document.querySelector(`.${buttonActiveClass}`),
  tab: document.querySelector(`.${tabActiveClass}`),
};

const tabsBtns = document.querySelectorAll(".tabs__btn");
const tabsContent = document.querySelectorAll(".tabs__content-item");

tabsBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    defaultSelect.button.classList.remove(buttonActiveClass);
    defaultSelect.tab.classList.remove(tabActiveClass);

    const currentButton = event.currentTarget;
    const currentTab = document.querySelector(
      `#${currentButton.dataset.button}`
    );

    defaultSelect.button = currentButton;
    defaultSelect.tab = currentTab;

    currentButton.classList.add(buttonActiveClass);
    currentTab.classList.add(tabActiveClass);
  });
});
