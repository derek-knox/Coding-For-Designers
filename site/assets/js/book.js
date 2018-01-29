// CACHE ---------------------------------------------------------------------------------------

var isMenuOpen = false,
	isDarkMode = false,
	isHomePage = window.location.pathname.toLowerCase().indexOf('home') !== -1,

	$wipContainer = null,
	$nav = null,
	$navMenuToggle = null,
	$navMenu = null,
	$lightModeToggle = null,
	$revealOverlay = null,
	
	materialFocus = new THREE.MeshBasicMaterial( { color: 0x99cc33, wireframe: false, side: THREE.DoubleSide } ),
	
	Settings = {
		DARK_MODE: 'settings.darkMode'
	};


// METHODS -------------------------------------------------------------------------------------	

function init() {

	// Settings	
	initLocalStorage();
	updateDarkMode();

	// 3D
	init3D();

	// 2D
	initReveal();
	initScroll();
}

function initLocalStorage() {
	if(window.localStorage) {
		var darkMode = window.localStorage.getItem(Settings.DARK_MODE);
		if(darkMode) {

			// Update flag
			isDarkMode = darkMode === 'true';
		}
	}
}

function initReveal() {
	// Transition in effects
	if($wipContainer) {
		$wipContainer.classList.add('reveal');
	}
	if($revealOverlay) {
		$revealOverlay.classList.add('show');
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

function init3D() {
	var camera, scene, renderer;
	var el3d = document.getElementById('three-d'), width = 520, height = 320, space = 45;
	var geometry, mesh, meshes = [], meshOscilatorY = 7,
	  	materialMain = new THREE.MeshBasicMaterial( { color: 0x999999, wireframe: false, side: THREE.DoubleSide } );
	var cells = [
		'-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-',
		'-', '0', '1', '0', '0', '0', '1', '0', '0', '-', '-', '-', '-',
		'-', '0', '1', '0', '0', '0', '1', '0', '1', '-', '-', '-', '-',
		'-', '0', '1', '0', '1', '0', '0', '1', '1', '-', '-', '-', '-',
		'-', '0', '1', '0', '0', '1', '0', '0', '1', '-', '-', '-', '-',
		'-', '0', '1', '0', '0', '0', '1', '1', '1', '-', '-', '-', '-',
		'-', '0', '1', '0', '0', '1', '1', '1', '0', '-', '-', '-', '-',
		'-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'
	];

	// Shared material update
	if(isDarkMode) {
		materialFocus = new THREE.MeshBasicMaterial( { color: isDarkMode || isHomePage ? 0x99cc33 : 0x272822, wireframe: false, side: THREE.DoubleSide } );
	}
	
	// 3D Setup
	initScene();
	animate();

	function initScene() {
		
		// Camera and Scene setup
		camera = new THREE.PerspectiveCamera( 9, width /height, 2, 6000 );
		camera.position.x = 1800;
        camera.position.y = 1200;
        camera.position.z = 1800;
        camera.lookAt(new THREE.Vector3(-180, -270, 0));
		scene = new THREE.Scene();
        
        // Geometry/Mesh setup
        var idx = 0, type;
        for(var i = 0; i < 8; i++) {
          for(var j = 13; j > 0; j--) {

          	// Geo Type
          	type = cells[idx];
            geometry = getGeometryByType(type);
            mesh = new THREE.Mesh( geometry, type !== '-' ? materialFocus : materialMain );
            mesh.position.set(i * space, 0, j * space);
        	mesh.rotation.x = Math.PI / 2;

            // Geo Type adjustments
            if(type === '1') {
            	mesh.position.y -= 3;
            }

            // Scene/Meshes/idx Updates
            scene.add(mesh);
            if(type === '1') {
            	meshes.push(mesh);
            }
            idx++;
          }
        }

		renderer = new THREE.CanvasRenderer();
		renderer.setSize( width, height );

		el3d.appendChild( renderer.domElement );
	}

	function getGeometryByType(type) {
		if(type === '-') return new THREE.PlaneGeometry( 3, 3 );
		else if(type === '0') return new THREE.PlaneGeometry( 7, 7 );
		else if (type === '1') return new THREE.PlaneGeometry( 14, 14 );
	}

	function animate() {

		// Render sync hook
		requestAnimationFrame( animate );

		// Update position
		meshes.forEach(function(mesh) {
			mesh.position.y += meshOscilatorY > 0 ? .07 : -.07;
		});

		// Oscilate trigger
		if(Math.abs(meshes[0].position.y) > Math.abs(meshOscilatorY)) {
			meshOscilatorY *= -1;
		}

		// Render
		renderer.render( scene, camera );

	}
}

function revealComplete() {
	$revealOverlay.classList.remove('show');
	$revealOverlay.classList.add('hide');
}

function updateLocalStorage(key, value) {
	window.localStorage.setItem(key, value.toString());
}

function updateDarkMode() {

	// Home page escape condition
	if(!$lightModeToggle) {
		
		// Update 3D UI
		materialFocus.color.setHex(0x99cc33);
		
		// Escape
		return;
	}

	// Update toggles/classes
	isDarkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');

	// Update UI
	$lightModeToggle.innerHTML = 'Light<br>' + (isDarkMode ? '+' : '-');

	// Update 3D UI
	materialFocus.color.setHex(isDarkMode ? 0x99cc33 : 0x272822);

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
	$navMenuToggle.innerHTML = 'Chapters<br>' + (isMenuOpen ? '-' : '+');
	isMenuOpen ? $nav.classList.add('nav-open') :  $nav.classList.remove('nav-open');
	if(isMenuOpen) {
		$navMenu.classList.add('nav-menu-open');
		$navMenu.classList.remove('nav-menu-closed');
	} else {
		$navMenu.classList.add('nav-menu-closed');
		$navMenu.classList.remove('nav-menu-open');
	}

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