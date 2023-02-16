import Video from "./modules/Video";
import VacancyBtn from "./modules/VacancyBtn";
/*
	--------------------------------------------
	--------------------------------------------
					SLIDERS
	--------------------------------------------
	--------------------------------------------
 */

	const scrollElements = document.querySelectorAll(".tmpl-hh__icon-card__icon-container");

	const elementInView = (el, dividend = 1) => {
		const elementTop = el.getBoundingClientRect().top;
	
		return (
			elementTop <=
			(window.innerHeight || document.documentElement.clientHeight) / dividend
		);
	};
	
	const elementOutofView = (el) => {
		const elementTop = el.getBoundingClientRect().top;
	
		return (
			elementTop > (window.innerHeight || document.documentElement.clientHeight)
		);
	};
	
	const displayScrollElement = (element) => {
		element.classList.add("tmpl-hh__icon-card__icon-container-animate");
	};
	
	// const hideScrollElement = (element) => {
	// 	element.classList.remove("tmpl-hh__icon-card__icon-container-animate");
	// };
	
	const handleScrollAnimation = () => {
		scrollElements.forEach((el) => {
			if (elementInView(el, 1.25)) {
				displayScrollElement(el);
			} else if (elementOutofView(el)) {
				hideScrollElement(el)
			}
		})
	}
	
	window.addEventListener("scroll", () => { 
		handleScrollAnimation();
	});

	const scrollElementsTwo = document.querySelectorAll(".tmpl-hh__s-team__content-img-wrapper");

	const elementInViewTwo = (el, dividend = 1) => {
		const elementTopTwo = el.getBoundingClientRect().top;
	
		return (
			elementTopTwo <=
			(window.innerHeight || document.documentElement.clientHeight) / dividend
		);
	};
	
	const elementOutofViewTwo = (el) => {
		const elementTopTwo = el.getBoundingClientRect().top;
	
		return (
			elementTopTwo > (window.innerHeight || document.documentElement.clientHeight)
		);
	};
	
	const displayScrollElementTwo = (element) => {
		element.classList.add("tmpl-hh__s-team__content-img-wrapper-animate");
	};
	
	// const hideScrollElementTwo = (element) => {
	// 	element.classList.remove("tmpl-hh__s-team__content-img-wrapper-animate");
	// };
	
	const handleScrollAnimationTwo = () => {
		scrollElementsTwo.forEach((el) => {
			if (elementInViewTwo(el, 1.25)) {
				displayScrollElementTwo(el);
			} else if (elementOutofViewTwo(el)) {
				hideScrollElementTwo(el)
			}
		})
	}
	
	window.addEventListener("scroll", () => { 
		handleScrollAnimationTwo();
	});


/*
	--------------------------------------------
	--------------------------------------------
						COMMON
	--------------------------------------------
	--------------------------------------------
 */

	new Video();
	new VacancyBtn();