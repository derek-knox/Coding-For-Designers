var isMenuOpen = false,
	$wipContainer = document.getElementById('wip-container'),
	$navMenuToggle = document.getElementById('nav-menu-toggle'),
	$navMenu = document.getElementById('nav-menu');

function init() {
	if($wipContainer) {
		$wipContainer.classList = ['reveal'];
	}
}

function onToggleNav(e) {
	isMenuOpen = !isMenuOpen;
	$navMenuToggle.innerHTML = 'Chapter<br>Selection<br>' + (isMenuOpen ? '-' : '+');
	$navMenu.classList = isMenuOpen ? ['nav-menu-open'] : ['nav-menu-closed'];
}

init();