// CACHE ---------------------------------------------------------------------------------------

var isMenuOpen = false,
	isDarkMode = false,
	$wipContainer = null,
	$nav = null,
	$navMenuToggle = null,
	$navMenu = null,
	$lightModeToggle = null,
	$revealOverlay = null,
	Settings = {
		DARK_MODE: 'settings.darkMode'
	};

// METHODS -------------------------------------------------------------------------------------	

function init() {
	initLocalStorage();
	initReveal();
	initScroll();
}

function initLocalStorage() {
	if(window.localStorage) {
		var darkMode = window.localStorage.getItem(Settings.DARK_MODE);
		if(darkMode) {

			// Update flag
			isDarkMode = darkMode === 'true';
			isHomePage = window.location.pathname.toLowerCase().indexOf('home') !== -1;

			// Update UI
			if(isDarkMode && !isHomePage) {
				updateDarkMode(isDarkMode);
			}
		}
	}
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
		
		// Check against hash
		var hashEl = document.getElementById(hash.substr(1));
		if(hashEl) {

			// Reset pos in prep for scroll
			setTimeout(function(){
				window.scroll(0, 0);
			}, 0);

			// Scroll
			setTimeout(function(){
				var top = document.documentElement.scrollTop + hashEl.getBoundingClientRect().top,
					targetY = Math.max(Math.ceil(top) - 30, 0);
				if(targetY !== 0) {
					window.scrollTo({ top: targetY, left: 0, behavior: 'smooth'});
				}
			}, 50);

		}
	}
}

function revealComplete() {
	$revealOverlay.classList = ['hide'];
}

function updateLocalStorage(key, value) {
	window.localStorage.setItem(key, value.toString());
}

function updateDarkMode() {

	// Home page escape condition
	if(!$lightModeToggle) return;

	// Update toggles/classes
	isDarkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');

	// Update UI
	$lightModeToggle.innerHTML = 'Light<br>' + (isDarkMode ? '+' : '-');

	// Update local storage
	updateLocalStorage(Settings.DARK_MODE, isDarkMode);
}

// HANDLERS ------------------------------------------------------------------------------------

function onReady() {

	// Clean
	document.removeEventListener('DOMContentLoaded', onReady);

	// Update cache
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

	// Update flag
	isDarkMode = !isDarkMode;

	// Update dark mode
	updateDarkMode();
}

function onAnchorJump(e) {

	// Scroll
	e.scrollIntoView({ 'behavior': 'smooth', 'block': 'start' })

	// Delay hash update to prevent "jumpy" behavior
	setTimeout(function() {
		window.location.hash = e.hash.substr(1);
	}, 500);

	// Prevent default hash link "jump" behavior
	return false;
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