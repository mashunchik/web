document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registration-form');
    const dataTable = document.querySelector('#data-table tbody');
    const deleteSelectedButton = document.getElementById('delete-selected');
    const duplicateSelectedButton = document.getElementById('duplicate-selected');
  
    const phoneInput = document.getElementById('phone');
  
    registrationForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const email = document.getElementById('email').value;
      const lastName = document.getElementById('last-name').value;
      const firstName = document.getElementById('first-name').value;
      const middleName = document.getElementById('middle-name').value;
      const birthDate = document.getElementById('birth-date').value;
      const group = document.getElementById('group').value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const phone = phoneInput.value;
  
      if (!validateFormData()) {
        return;
      }
  
      const newRow = dataTable.insertRow(-1);
      const checkboxCell = newRow.insertCell(0);
      const emailCell = newRow.insertCell(1);
      const lastNameCell = newRow.insertCell(2);
      const firstNameCell = newRow.insertCell(3);
      const middleNameCell = newRow.insertCell(4);
      const birthDateCell = newRow.insertCell(5);
      const groupCell = newRow.insertCell(6);
      const genderCell = newRow.insertCell(7);
      const phoneCell = newRow.insertCell(8);
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkboxCell.appendChild(checkbox);
  
      emailCell.innerText = email;
      lastNameCell.innerText = lastName;
      firstNameCell.innerText = firstName;
      middleNameCell.innerText = middleName;
      birthDateCell.innerText = birthDate;
      groupCell.innerText = group;
      genderCell.innerText = gender;
      phoneCell.innerText = phone;
  
      registrationForm.reset();
    });
  
    deleteSelectedButton.addEventListener('click', function () {
      const checkboxes = document.querySelectorAll('#data-table input[type="checkbox"]:checked');
      checkboxes.forEach(function (checkbox) {
        const row = checkbox.parentElement.parentElement;
        row.remove();
      });
    });
  
    duplicateSelectedButton.addEventListener('click', function () {
      const checkboxes = document.querySelectorAll('#data-table input[type="checkbox"]:checked');
      checkboxes.forEach(function (checkbox) {
        const row = checkbox.parentElement.parentElement.cloneNode(true);
        dataTable.appendChild(row);
      });
    });
  
    function validateFormData() {
      const phonePattern = /^\+380[0-9]{9}$/;
      if (!phonePattern.test(phoneInput.value)) {
        document.getElementById('error-message').textContent = 'Невірний формат номеру телефону.';
        return false;
      }
  
      // Додайте інші перевірки, які вам потрібні
  
      document.getElementById('error-message').textContent = '';
      return true;
    }
  });
  