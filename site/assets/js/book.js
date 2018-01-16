// CACHE ---------------------------------------------------------------------------------------

var isMenuOpen = false,
	$wipContainer = null,
	$navMenuToggle = null,
	$navMenu = null,
	$revealOverlay = null;

// METHODS -------------------------------------------------------------------------------------	

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

// HANDLERS ------------------------------------------------------------------------------------

function onReady() {

	// Clean
	document.removeEventListener('DOMContentLoaded', onReady);

	// Update cache
	isMenuOpen = false,
	$wipContainer = document.getElementById('wip-container');
	$navMenuToggle = document.getElementById('nav-menu-toggle');
	$navMenu = document.getElementById('nav-menu');
	$revealOverlay = document.getElementById('reveal-overlay');

	// Initialize leveraging updated cache
	init();
}

// INITIALIZATION ------------------------------------------------------------------------------

function ready(fn) {
	if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}
	
ready(onReady);