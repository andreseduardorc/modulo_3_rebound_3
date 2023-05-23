
const actividadesSelect = document.querySelector('.actividades');
const tarjetas = document.querySelectorAll('.tarjeta');


actividadesSelect.addEventListener('change', (event) => {
  // Ocultar todas las tarjetas
  tarjetas.forEach((tarjeta) => {
    tarjeta.classList.add('d-none');
    tarjeta.classList.remove('d-block');
  });

  // Mostrar la tarjeta seleccionada
  const tarjetaSeleccionada = document.querySelector(`#${event.target.value}`);
  tarjetaSeleccionada.classList.remove('d-none');
  tarjetaSeleccionada.classList.add('d-block');
});


const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('show-text');
  });
});
