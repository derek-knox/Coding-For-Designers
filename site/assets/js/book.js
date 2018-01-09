var isMenuOpen = false,
	$wipContainer = document.getElementById('wip-container'),
	$navMenuToggle = document.getElementById('nav-menu-toggle'),
	$navMenu = document.getElementById('nav-menu'),
	$revealOverlay = document.getElementById('reveal-overlay');

function init() {
	if($wipContainer) {
		$wipContainer.classList = ['reveal'];
	}
	if($revealOverlay) {
		$revealOverlay.classList = ['show'];
		setTimeout(revealComplete, 900);
	}
}

function revealComplete() {
	$revealOverlay.classList = ['hide'];
}

function onToggleNav(e) {
	isMenuOpen = !isMenuOpen;
	$navMenuToggle.innerHTML = 'Chapter<br>Selection<br>' + (isMenuOpen ? '-' : '+');
	$navMenu.classList = isMenuOpen ? ['nav-menu-open'] : ['nav-menu-closed'];
}

setTimeout(init, 1);