function validateEmail() {
  let email = document.getElementsByName('email')[0];
  let constraint = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (constraint.test(email.value)) {
    email.className = '';
    let error = email.nextElementSibling;
    error.innerHTML = '';
    error.style.visibility = 'hidden';
    validateEmailConfirmation();
  } else {
    email.className = 'invalid';
    let error = email.nextElementSibling;
    error.innerHTML = 'Enter a properly formatted email address';
    error.style.visibility = 'visible';
  };
};

function validateEmailConfirmation() {
  let confirmation = document.getElementsByName('email_confirmation')[0];
  let email = document.getElementsByName('email')[0];
  if (confirmation.value == email.value) {
    confirmation.className = '';
    let error = confirmation.nextElementSibling;
    error.innerHTML = '';
    error.style.visibility = 'hidden';
  } else {
    confirmation.className = 'invalid';
    let error = confirmation.nextElementSibling;
    error.innerHTML = 'Confirmation must match email';
    error.style.visibility = 'visible';
  };
};

function validateCountry() {
  let country = document.getElementsByName('country')[0];
  if (country.value != '') {
    country.className = '';
    let error = country.nextElementSibling;
    error.innerHTML = '';
    error.style.visibility = 'hidden';
  } else {
    country.className = 'invalid';
    let error = country.nextElementSibling;
    error.innerHTML = 'Field cannot be left blank';
    error.style.visibility = 'visible';
  };
};

function validateZipcode() {
  let zipcode = document.getElementsByName('zip_code')[0];
  let constraint = /^\d{5}(?:[-\s]\d{4})?$/;
  if (constraint.test(zipcode.value)) {
    zipcode.className = '';
    let error = zipcode.nextElementSibling;
    error.innerHTML = '';
    error.style.visibility = 'hidden';
    validateEmailConfirmation();
  } else {
    zipcode.className = 'invalid';
    let error = zipcode.nextElementSibling;
    error.innerHTML = 'Enter a properly formatted zip code';
    error.style.visibility = 'visible';
  };
};

function validatePassword() {
  let password = document.getElementsByName('password')[0];
  let constraint = /^(?=.*\d).{4,8}$/;
  if (constraint.test(password.value)) {
    password.className = '';
    let error = password.nextElementSibling;
    error.innerHTML = '';
    error.style.visibility = 'hidden';
    validatePasswordConfirmation();
  } else {
    password.className = 'invalid';
    let error = password.nextElementSibling;
    error.innerHTML = 'Enter 4 to 8 digits including at least one number';
    error.style.visibility = 'visible';
  };
};

function validatePasswordConfirmation() {
  let confirmation = document.getElementsByName('password_confirmation')[0];
  let password = document.getElementsByName('password')[0];
  if (confirmation.value == password.value) {
    confirmation.className = '';
    let error = confirmation.nextElementSibling;
    error.innerHTML = '';
    error.style.visibility = 'hidden';
  } else {
    confirmation.className = 'invalid';
    let error = confirmation.nextElementSibling;
    error.innerHTML = 'Confirmation must match password';
    error.style.visibility = 'visible';
  };
};

document.getElementsByName('email')[0].addEventListener('focusout', validateEmail);
document.getElementsByName('email_confirmation')[0].addEventListener('focusout', validateEmailConfirmation);
document.getElementsByName('country')[0].addEventListener('focusout', validateCountry);
document.getElementsByName('zip_code')[0].addEventListener('focusout', validateZipcode);
document.getElementsByName('password')[0].addEventListener('focusout', validatePassword);
document.getElementsByName('password_confirmation')[0].addEventListener('focusout', validatePasswordConfirmation);

document.getElementsByName('submit')[0].addEventListener('click', function() {
  validateEmail();
  validateEmailConfirmation();
  validateCountry();
  validateZipcode();
  validatePassword();
  validatePasswordConfirmation();
  let spans = Array.from(document.getElementsByTagName('span'));
  if (spans.some(x => x.style.visibility == 'visible')) {
    alert('Error! Form could not submit because some fields have not been filled properly.')
  } else {
    document.getElementsByClassName('high_five')[0].style.display = 'block';
  };
});
