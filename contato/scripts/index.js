document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.querySelector('form');
  const nameInput = document.querySelector('input[name="Nome"]');
  const emailInput = document.querySelector('input[name="Email"]');
  const checkboxInput = document.querySelector('#checkbox');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const checkboxError = document.getElementById('checkbox-error');

  const spinner = document.querySelector('.container-spinner');

  const successModal = document.getElementById('success-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');

  const textarea = document.querySelector('textarea[name="Assunto"]');
  textarea.addEventListener('input', () => {
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  });

  nameInput.addEventListener('input', () => { if (nameInput.value.trim() !== '' && nameInput.value.length >= 3) nameError.textContent = ''; });
  emailInput.addEventListener('input', () => { const p = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; if (p.test(emailInput.value)) emailError.textContent = ''; });
  checkboxInput.addEventListener('change', () => { if (checkboxInput.checked) checkboxError.textContent = ''; });

  closeModalBtn.addEventListener('click', () => {
    successModal.style.display = 'none';
    window.location.href = '/index.html';
  });

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;
    nameError.textContent = '';
    emailError.textContent = '';
    checkboxError.textContent = '';

    if (nameInput.value.trim() === '' || nameInput.value.length < 3) {
      nameError.textContent = 'Nome inválido (mínimo 3 caracteres).';
      isValid = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      emailError.textContent = 'Por favor, insira um e-mail válido.';
      isValid = false;
    }
    if (!checkboxInput.checked) {
      checkboxError.textContent = 'Você precisa aceitar os termos.';
      isValid = false;
    }

    if (isValid) {
      spinner.style.display = 'flex';

      const formData = new FormData(contactForm);

      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(response => {
          spinner.style.display = 'none';
          if (response.ok) {
            successModal.style.display = 'flex';
            contactForm.reset();
          } else {
            alert('Houve um erro ao enviar o formulário. Tente novamente.');
          }
        })
        .catch(error => {
          spinner.style.display = 'none';
          console.error('Erro de rede:', error);
          alert('Houve um erro de conexão. Verifique sua internet.');
        });
    }
  });
});