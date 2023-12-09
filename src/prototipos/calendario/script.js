document.addEventListener('DOMContentLoaded', function () {
  const calendar = document.getElementById('calendar');
  const modal = document.getElementById('myModal');
  const closeModal = document.querySelector('.close');
  const appointmentForm = document.getElementById('appointmentForm');
  const attendantInput = document.getElementById('attendant');
  const patientInput = document.getElementById('patient');
  const monthYearHeader = document.getElementById('monthYear');

  function generateCalendar() {
      const currentDate = new Date();
      const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
      const lastDayOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();

      const firstDayOfWeek = firstDayOfMonth.getDay();

      // Atualiza o cabeçalho com o mês e o ano
      const monthYearString = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentDate);
      monthYearHeader.textContent = `Calendário de Consulta - ${monthYearString}`;

      // Preenche os dias do mês anterior
      for (let i = firstDayOfWeek; i > 0; i--) {
          const day = document.createElement('div');
          day.classList.add('day', 'inactive');
          day.textContent = lastDayOfLastMonth - i + 1;
          calendar.appendChild(day);
      }

      // Preenche os dias do mês atual
      for (let i = 1; i <= lastDayOfMonth; i++) {
          const day = document.createElement('div');
          day.classList.add('day');
          day.textContent = i;
          const dateId = `${i}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}-emaildaempresa`;
          day.setAttribute('data-id', dateId);
          day.addEventListener('click', function () {
              modal.style.display = 'block';
              appointmentForm.setAttribute('data-date-id', dateId);
          });
          calendar.appendChild(day);
      }

      // Preenche os dias do mês seguinte
      const totalDays = firstDayOfWeek + lastDayOfMonth;
      const remainingDays = 42 - totalDays; // 6 linhas * 7 dias por linha = 42
      for (let i = 1; i <= remainingDays; i++) {
          const day = document.createElement('div');
          day.classList.add('day', 'inactive');
          day.textContent = i;
          calendar.appendChild(day);
      }
  }

  generateCalendar();

  closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });

  appointmentForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const dateId = appointmentForm.getAttribute('data-date-id');
      const attendant = attendantInput.value.trim() || 'Defina um Atendente';
      const patient = patientInput.value.trim() || 'Defina um Paciente';

      const dayElement = document.querySelector(`[data-id="${dateId}"]`);
      dayElement.innerHTML = `<div>${dayElement.textContent}</div><div>A: ${attendant}</div><div>P: ${patient}</div>`;

      modal.style.display = 'none';
      attendantInput.value = '';
      patientInput.value = '';
  });
});
