t.js
javascript
Copiar
Editar
const form = document.getElementById('goalForm');
const valueInput = document.getElementById('goalValue');
const deadlineInput = document.getElementById('goalDeadline');
const suggestion = document.getElementById('suggestedContribution');

function calculateContribution() {
  const value = parseFloat(valueInput.value);
  const deadline = new Date(deadlineInput.value);
  const today = new Date();
  const months = (deadline.getFullYear() - today.getFullYear()) * 12 + (deadline.getMonth() - today.getMonth());

  if (value > 0 && months > 0) {
    const contribution = (value / months).toFixed(2);
    suggestion.textContent = `Contribuição mensal sugerida: R$ ${contribution}`;
  } else {
    suggestion.textContent = '';
  }
}

valueInput.addEventListener('input', calculateContribution);
deadlineInput.addEventListener('change', calculateContribution);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Cofre criado com sucesso! Convite enviado ao participante.');
  form.reset();
  suggestion.textContent = '';
});