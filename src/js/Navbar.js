const mobile_menu = document.getElementById('mobile_menu')
const icnMenu = document.querySelector('#burgerMenu')

icnMenu.addEventListener('click', () => {
	icnMenu.classList.toggle('active')
	mobile_menu.classList.toggle('hidden')
})
