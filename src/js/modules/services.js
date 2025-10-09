const servicesMore = document.querySelector('.services__more-mob');
const servicesList = document.querySelector('.services__list');

if (servicesList && servicesMore) {
	servicesMore.addEventListener("click", () => {
		servicesList.classList.add('open');

		servicesMore.style.display = 'none';
	})
}