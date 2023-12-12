import data from '../../assets/json/navigation.json' assert { type: 'json' };

document.addEventListener("DOMContentLoaded", BuildNavigation);

const menuItemContainerDesktop = document.getElementById("desktop");
const menuItemContainerMobile = document.getElementById("mobile");

function BuildNavigation() {
	data.content.forEach((element, index) => {
		let menuItemDesktop = fromHTML(element.template.desktop.replace("$name", element.name).replace("$link", element.link));
		menuItemContainerDesktop.append(menuItemDesktop);

		let menuItemMobile = fromHTML(element.template.mobile.replace("$name", element.name).replace("$link", element.link));
		menuItemContainerMobile.append(menuItemMobile);
	});
}

const mobileMenu = document.getElementById('mobileMenu')
const menuBtn = document.getElementById('burgerMenu')

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('active')
	mobileMenu.classList.toggle('hidden')
})

/**
 * @param {String} HTML representing a single element.
 * @param {Boolean} flag representing whether or not to trim input whitespace, defaults to true.
 * @return {Element | HTMLCollection | null}
 */
function fromHTML(html, trim = true) {
	// Process the HTML string.
	html = trim ? html : html.trim();
	if (!html) return null;

	// Then set up a new template element.
	const template = document.createElement('template');
	template.innerHTML = html;
	const result = template.content.children;

	// Then return either an HTMLElement or HTMLCollection,
	// based on whether the input HTML had one or more roots.
	if (result.length === 1) return result[0];
	return result;
}