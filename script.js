const ico = document.querySelector('#burger');
const menu = document.querySelector('.nav');

//hamburger menu
ico.addEventListener('click', function(){
	ico.classList.toggle('active');
	menu.classList.toggle('hidden');
});


//autoscroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

//fading out in top button
function fadeIn(el){
	el.classList.add('show');
	el.classList.remove('hide');
}

function fadeOut(el){
	el.classList.add('hide');
	el.classList.remove('show');
}

const topButton = document.querySelector('.top');

window.onload = function(){
	barProgress = function(){
		const height = document.documentElement.offsetHeight;
		const ih = window.innerHeight;
		const Y = window.scrollY;
		if(Y < (0.9*ih)){
			fadeOut(topButton);
		}else if(Y > (0.9*ih)){
			fadeIn(topButton);
		}
	}
	setInterval(barProgress, 1000/60);
};
//gallery
const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.gallery .rest img');
const opacity = 0.4;

imgs.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {
	imgs.forEach(img => (img.style.opacity = 1));
	current.src = e.target.src;
	e.target.style.opacity = opacity;
}