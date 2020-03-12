const btnSave = document.querySelector('.event__btn-save');

const eventHandler = (event) => {
  event.preventDefault();
  const popup = document.querySelector('.popup');
  const formData = [...new FormData(popup)].reduce((acc, [field, value]) => ({ ...acc, [field]: value }), {})
  alert(JSON.stringify(formData));
  document.querySelector('.popup-alert').classList.toggle('display-none');
};

btnSave.addEventListener('click', eventHandler);

export { eventHandler };