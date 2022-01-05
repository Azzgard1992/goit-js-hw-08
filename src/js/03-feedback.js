import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formEmail = document.querySelector('.feedback-form input');
const formMessage = document.querySelector('.feedback-form textarea');

form.addEventListener('input', throttle(onTextInput, 500));
form.addEventListener('submit', onSubmitForm);

saveText();

function onSubmitForm(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function saveText() {
  const saveFormData = localStorage.getItem('feedback-form-state');
  const parsedFormData = JSON.parse(saveFormData);

  if (parsedFormData) {
    formEmail.value = parsedFormData.email;
    formMessage.value = parsedFormData.message;
  }
}

function onTextInput(event) {
  const {
    elements: { email, message },
  } = form;

  const formData = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
