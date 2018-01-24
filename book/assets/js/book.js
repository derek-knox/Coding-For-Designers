// CACHE ---------------------------------------------------------------------------------------

var isMenuOpen = false,
	isDarkMode = false,
	$wipContainer = null,
	$nav = null,
	$navMenuToggle = null,
	$navMenu = null,
	$lightModeToggle = null,
	$revealOverlay = null;

// METHODS -------------------------------------------------------------------------------------	

function init() {
	initReveal();
	initScroll();
}

function initReveal() {
	// Transition in effects
	if($wipContainer) {
		$wipContainer.classList = ['reveal'];
	}
	if($revealOverlay) {
		$revealOverlay.classList = ['show'];
		setTimeout(revealComplete, 900);
	}
}

function initScroll() {
	var hash = window.location.hash;
	if(hash) {
		
		// Reset pos in prep for scroll
		setTimeout(function() { window.scroll(0, 0); }, 0);

		// Scroll
		setTimeout(function(){
			var hashEl = document.getElementById(hash.substr(1));
			if(hashEl) {
				var targetY = Math.ceil(hashEl.getBoundingClientRect().top) - 30;
				window.scrollTo({ top: targetY, left: 0, behavior: 'smooth'});
			}
		}, 50);
	}
}

function revealComplete() {
	$revealOverlay.classList = ['hide'];
}

// HANDLERS ------------------------------------------------------------------------------------

function onReady() {

	// Clean
	document.removeEventListener('DOMContentLoaded', onReady);

	// Update cache
	isMenuOpen = false,
	$wipContainer = document.getElementById('wip-container');
	$nav = document.getElementById('nav');
	$navMenuToggle = document.getElementById('nav-menu-toggle');
	$navMenu = document.getElementById('nav-menu');
	$lightModeToggle = document.getElementById('light-mode-toggle');
	$revealOverlay = document.getElementById('reveal-overlay');

	// Initialize leveraging updated cache
	init();
}

function onToggleNav(e) {

	// Update flag
	isMenuOpen = !isMenuOpen;

	// Update toggles/classes
	$navMenuToggle.innerHTML = 'Chapter<br>Selection<br>' + (isMenuOpen ? '-' : '+');
	isMenuOpen ? $nav.classList.add('nav-open') :  $nav.classList.remove('nav-open');
	$navMenu.classList = isMenuOpen ? ['nav-menu-open'] : ['nav-menu-closed'];

	// Determine scroll
	// Update body height so simultanous menu expand animation and scroll animation don't conflict (full height isn't reached until expand animation completes)
	document.body.style.minHeight = isMenuOpen ? '1600px' : 'auto';
	var targetY = isMenuOpen ? $navMenuToggle.getBoundingClientRect().y : 0;
	window.scrollTo({ top: Math.ceil(targetY - 35), left: 0, behavior: 'smooth'});
}

function onToggleDarkMode(e) {
	isDarkMode = !isDarkMode;
	isDarkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
	$lightModeToggle.innerHTML = 'Light<br>' + (isDarkMode ? '+' : '-');
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