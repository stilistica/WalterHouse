const btnsSize = document.querySelectorAll('.size__info-variant-btns button');
const hoverSize = document.querySelectorAll('.size__info-variant-hover hr, .size__info-variant-hover svg');

if (btnsSize && hoverSize) {
	btnsSize.forEach((btn, i) => {
		btn.addEventListener('mouseenter', () => {
			hoverSize.forEach(el => el.classList.remove('active'));
			document
			.querySelectorAll('.size__info-variant-hover-' + ['elite', 'vip', 'extra'][i])
			.forEach(el => el.classList.add('active'));
		})
		btn.addEventListener('mouseleave', () => {
			document.querySelectorAll('.size__info-variant-hover hr, .size__info-variant-hover svg')
			.forEach(el => el.classList.remove('active'));
		})
	})
}

