export const formInit = (form) => {
  const inputName = form.querySelector('[name="name"]');
  const inputTelegram = form.querySelector('[name="telegram"]');
  const inputEmail = form.querySelector('[name="email"]');
  const submitButton = form.querySelector(".form__submit");
  const mailRegExp = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  const targetEmail = "dev.victorhripko@gmail.com";
  const mailSubject = "Registration from insiderclub";

  const formDataValidation = {
    name: false,
    telegram: false,
    inputEmail: false,
  };

  const nameValidation = (e) => {
    const isValid = e.target.value.trim() !== "";
    formDataValidation.name = isValid;
    checkValidity();
  };

  const telegramValidation = (e) => {
    const isValid = e.target.value.trim() !== "";
    formDataValidation.telegram = isValid;
    checkValidity();
  };

  const emailValidation = (e) => {
    const target = e.target;
    const isValid =
      target.value.trim() !== "" &&
      target.checkValidity() === true &&
      mailRegExp.test(target.value);
    formDataValidation.inputEmail = isValid;
    checkValidity();
  };

  const toggleDisableLink = (isDisabled) => {
    submitButton.classList.toggle("button--disabled", !isDisabled);
    submitButton.setAttribute("tabIndex", isDisabled ? "" : "-1");
  };

  const checkValidity = () => {
    const { name, telegram, inputEmail } = formDataValidation;
    const isValid = !!(name && telegram && inputEmail);
    toggleDisableLink(isValid);
    generateLink();
  };

  const generateLink = () => {
    const formData = new FormData(form);
    const breakLine = "%0D%0A";
    const name = `Name: ${formData.get("name")}`;
    const email = `E-mail: ${formData.get("email")}`;
    const telegram = `Telegram: ${formData.get("telegram")}`;
    const message = `${name}${breakLine}${telegram}${breakLine}${email}`;
    submitButton.href = `mailto:${targetEmail}?subject=${mailSubject}&body=${message}`;
  };

  inputName.addEventListener("input", nameValidation);
  inputTelegram.addEventListener("input", telegramValidation);
  inputEmail.addEventListener("input", emailValidation);
  window.addEventListener("load", checkValidity);
};
