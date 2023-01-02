(function(){
	const headerBurgerBtn = document.querySelector('.header__burger');
	const headerNavigation = document.querySelector('.header__nav');
	const headerButtonCloseNav = document.querySelector('.header__nav-close');

	headerBurgerBtn.addEventListener('click', e => {
		headerNavigation.classList.add('active');
	});

	headerButtonCloseNav.addEventListener('click', e => {
		headerNavigation.classList.remove('active');
	});

})();

const swiper = new Swiper('.swiper', {
	spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },
	grabCursor: true,

	loop: true,
	speed: 900,
	// autoplay: {
	// 	delay: 1000,
	// },
	// effect: "cards",
});

(function() {
const tabsItem = document.querySelectorAll('.experience__tabs-link');
const tabsContent = document.querySelectorAll('.experience__content');

tabsItem.forEach((tab, index) => {
	tab.addEventListener('click', (e) => {
e.preventDefault();
		tabsContent.forEach(content => {
			content.classList.remove('active')
		})

		tabsItem.forEach(tab => {
			tab.classList.remove('active')
		})
			tabsItem[index].classList.add('active');
			tabsContent[index].classList.add('active');
		})
	})
})();

(function() {
	const langItem = document.querySelectorAll('.header__lang-item');

	langItem.forEach((lang, index) => {
	lang.addEventListener('click', (e) => {
	
			
	
			langItem.forEach(lang => {
				lang.classList.remove('active')
			})
				langItem[index].classList.add('active');
				
			})
		})
	})();
	
