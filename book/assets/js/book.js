var isMenuOpen = false,
	$navMenuToggle = document.getElementById('nav-menu-toggle'),
	$navMenu = document.getElementById('nav-menu');

function onToggleNav(e) {
	isMenuOpen = !isMenuOpen;
	$navMenuToggle.innerHTML = isMenuOpen ? 'Menu -' : 'Menu +';
	$navMenu.classList = isMenuOpen ? ['nav-menu-open'] : ['nav-menu-closed'];
}