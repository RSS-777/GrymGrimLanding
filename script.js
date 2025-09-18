const navigation = document.getElementById("navigation");
const inputBurger = document.getElementById("burger");
const aboutButton = document.querySelector(".about__button");
const concertsButtons = document.querySelectorAll(".concerts__button");
const formContact = document.querySelector(".form-contacts");
const contactNameInput = document.querySelector(".form-contacts__input-name");
const contactEmailInput = document.querySelector(".form-contacts__input-email");
const contactMessageInput = document.querySelector(".form-contacts__textarea");
const contactNameError = document.querySelector(".form-contacts__error-name");
const contactEmailError = document.querySelector(".form-contacts__error-email");
const contactMessageError = document.querySelector(".form-contacts__error-message");
const popup = document.querySelector(".popup");
const formConcert = document.querySelector(".concert-form");
const concertName = document.querySelector(".concert-form__input-name");
const concertEmail = document.querySelector(".concert-form__input-email");
const concertCity = document.querySelector(".concert-form__city-select");
const concertTiket = document.querySelector(".concert-form__input-tiket");
const concertErrorName = document.querySelector(".concert-form__error-name");
const concertErrorEmail = document.querySelector(".concert-form__error-email");
const concertErrorTiket = document.querySelector(".concert-form__error-tiket");
const popupCloseBtn = document.querySelector(".popup__close");
const consertSubmitBtn = document.querySelector(".concert-form__button");

inputBurger.addEventListener("change", () => {
  navigation.classList.toggle("header__navigation-active");
});

aboutButton.addEventListener("click", () => {
  popup.classList.add("popup-active");
});

concertsButtons.forEach((el) =>
  el.addEventListener("click", () => {
    popup.classList.add("popup-active");
    document.body.style.overflow = "hidden";
    const cityValue = el.dataset.city;
    const placeValue = el.dataset.venue; // при реальному замовленні потрібно, мість може бути декілька.
    concertCity.value = cityValue;
  })
);

popupCloseBtn.addEventListener("click", () => {
  popup.classList.remove("popup-active");
  document.body.style.overflow = "";
});

const validateContactForm = () => {
  let isValid = true;

  if (contactNameInput.value.trim() === "") {
    contactNameError.textContent = "Введіть ім'я";
    isValid = false;
  } else if (contactNameInput.value.length < 3) {
    contactNameError.textContent = `Ім'я має бути мінімум 3 символи`;
    isValid = false;
  } else {
    contactNameError.textContent = "";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

  if (contactEmailInput.value.trim() === "") {
    contactEmailError.textContent = "Введіть email";
    isValid = false;
  } else if (!emailPattern.test(contactEmailInput.value.trim())) {
    contactEmailError.textContent = "Невірний формат email";
    isValid = false;
  } else {
    contactEmailError.textContent = "";
  }

  if (contactMessageInput.value.trim() === "") {
    contactMessageError.textContent = "Напишіть повідомлення";
    isValid = false;
  } else if (contactMessageInput.value.length < 10) {
    contactMessageError.textContent = "Не жалій слів, розкажи детальніше ;) ";
    isValid = false;
  } else {
    contactMessageError.textContent = "";
  }

  return isValid;
};

const validateConcertForm = () => {
  let isValid = true;

  if (concertName.value.trim() === "") {
    concertErrorName.textContent = "Введіть ім'я";
    isValid = false;
  } else if (concertName.value.length < 3) {
    concertErrorName.textContent = `Ім'я має бути мінімум 3 символи`;
    isValid = false;
  } else {
    concertErrorName.textContent = "";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

  if (concertEmail.value.trim() === "") {
    concertErrorEmail.textContent = "Введіть email";
    isValid = false;
  } else if (!emailPattern.test(concertEmail.value.trim())) {
    concertErrorEmail.textContent = "Невірний формат email";
    isValid = false;
  } else {
    concertErrorEmail.textContent = "";
  }

  if (concertTiket.value < 1) {
    concertErrorTiket.textContent = "Кількість не може бути меншою за 1";
    isValid = false;
  } else if (concertTiket.value > 10) {
    concertErrorTiket.textContent = "10 білетів максимум на одну людину";
    isValid = false;
  } else {
    concertErrorTiket.textContent = "";
  }

  return isValid;
};

formContact.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (validateContactForm()) {
    alert("Форма відправлена успішно! 🎉");
    formContact.reset();

    //Тут використати для відправки post запрос! Як банальний приклад:
    // const params = {
    //   name: contactNameInput.value,
    //   email: contactEmailInput.value,
    //   message: contactMessageInput.value
    // }

    // try {
    //   const response = await fetch('Якесь апі діда Миколи', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(params)
    //   })

    //   if (response.ok) {
    //     const data = await response.json()
    //     messageSuccess.value = data.message
    //     formContact.reset();
    //     setTimeout(() => { messageSuccess.value = '' }, 2000)
    //   }
    // } catch (error) {
    //   console.error('Помилка запиту:', error);
    // }
  }
});

formConcert.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (validateConcertForm()) {
    alert("Замовлення прийнято! 🎉");
    formConcert.reset();
    popup.classList.remove("popup-active");
    document.body.style.overflow = "";

    // Приклад POST-запиту: форми відправляються пост запитом!!!
    // const params = {
    //   name: concertName.value.trim(),
    //   email: concertEmail.value.trim(),
    //   tickets: concertTiket.value,
    //   city: concertCity.value
    // };

    // try {
    //   const response = await fetch("API", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(params)
    //   });

    //   if (response.ok) {
    //     const data = await response.json();
    //     messageSuccess.value = data.message
    //     formContact.reset();
    //     setTimeout(() => { messageSuccess.value = '' }, 2000)
    //   }
    // } catch (error) {
    //   console.error("Помилка запиту:", error);
    // }
  }
});
