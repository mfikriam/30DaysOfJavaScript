// Global Variable
const body = document.body;
const pNodeList = body.querySelectorAll('p');
const inputNodeList = body.querySelectorAll('input');
const firstNameInput = body.querySelector('input[id="first_name"]');
const lastNameInput = body.querySelector('input[id="last_name"]');
const emailInput = body.querySelector('input[id="email"]');
const passwordInput = body.querySelector('input[id="password"]');
const telephoneInput = body.querySelector('input[id="telephone"]');
const yourBioInput = body.querySelector('input[id="your_bio"]');
const form = body.querySelector('form');
const btnSubmit = form.querySelector('button[type="submit"]');

// Rule 1: input must be alphanumeric and contain 3 - 16 characters
const validationRule1 = (inputNode) => {
  const textInput = inputNode.value;
  const regex = /^[A-Za-z0-9]{3,16}$/;
  return regex.test(textInput);
}

// Rule 2: input must be a valid address, e.g. example@example.com
const validationRule2 = (inputNode) => {
  const textInput = inputNode.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(textInput);
}

// Rule 3: input must be alphanumeric (@, _ and - are allowed) and between 6 - 20 characters
const validationRule3 = (inputNode) => {
  const textInput = inputNode.value;
  const regex = /^[A-Za-z0-9@_-]{6,20}$/;
  return regex.test(textInput);
}

// Rule 4: input must be a valid telephone number (10 digits and 333-333-3334)
const validationRule4 = (inputNode) => {
  const textInput = inputNode.value;
  const regex = /^(\d{3}-\d{3}-\d{4})$/;
  return regex.test(textInput);
}

// Rule 5: input must contain only lowercase letters, underscore, hyphens and be 8 - 50 characters
const validationRule5 = (inputNode) => {
  const textInput = inputNode.value;
  const regex = /^[a-z_-]{8,50}$/;
  return regex.test(textInput);
}

// Check Validation
const checkValidation = (inputNode, validationRules) => {
  const id = inputNode.getAttribute('id');
  const p = body.querySelector(`p[id="${id}_error"]`);

  if (validationRules(inputNode)) {
    inputNode.classList.remove('input-danger');
    p.classList.add('hidden');
  } else {
    inputNode.classList.add('input-danger');
    p.classList.remove('hidden');
  }

  return validationRules(inputNode);
}

// Add Input Event Listener
const addInputEventListener = (input, validationRules) => {
  input.addEventListener('blur', (e) => {
    const inputNode = e.target;
    checkValidation(inputNode, validationRules);
  });
}

// Add Form Submit Event Listener
form.addEventListener('submit', () => {
  const checkAllValidations = checkValidation(firstNameInput, validationRule1)
    && checkValidation(lastNameInput, validationRule1)
    && checkValidation(emailInput, validationRule2)
    && checkValidation(passwordInput, validationRule3)
    && checkValidation(telephoneInput, validationRule4)
    && checkValidation(yourBioInput, validationRule5);

  if (checkAllValidations) {
    inputNodeList.forEach((inputNode) => inputNode.classList.add('input-success'));
    btnSubmit.classList.add('btn-success');
  }
});

// Start
pNodeList.forEach((p) => p.classList.add('hidden'));
addInputEventListener(firstNameInput, validationRule1);
addInputEventListener(lastNameInput, validationRule1);
addInputEventListener(emailInput, validationRule2);
addInputEventListener(passwordInput, validationRule3);
addInputEventListener(telephoneInput, validationRule4);
addInputEventListener(yourBioInput, validationRule5);