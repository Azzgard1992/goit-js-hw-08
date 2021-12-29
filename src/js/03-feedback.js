import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
// const button = document.querySelector('.feedback-form button');

form.addEventListener('input', throttle(onTextInput, 500));
form.addEventListener('submit', onSubmitForm);

const formData = {};

saveText();

function onTextInput(event) {
  //   console.log(event.target.value);
  formData[event.target.name] = event.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(event) {
  event.preventDefault();
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function saveText(e) {
  const saveFormData = localStorage.getItem('feedback-form-state');
  const parsedFormData = JSON.parse(saveFormData);

  if (parsedFormData) {
    email.value = parsedFormData.email;
    message.value = parsedFormData.message;
  }
}
