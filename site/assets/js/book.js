// CACHE ---------------------------------------------------------------------------------------

var isMenuOpen = false,
	isDarkMode = false,
	isHomePage = window.location.pathname.toLowerCase().indexOf('home') !== -1,
	hasWebGL = getHasWebGlSupport(),
	hasTouchSupport = getHasTouchSupport(),

	$wipContainer = null,
	$nav = null,
	$navMenuToggle = null,
	$navMenu = null,
	$lightModeToggle = null,
	$revealOverlay = null,
	
	materialFocus = new THREE.MeshBasicMaterial( { color: 0x99cc33, wireframe: false, side: THREE.DoubleSide } ),
	
	interactiveDropCap,
	
	Settings = {
		DARK_MODE: 'settings.darkMode'
	};


// METHODS -------------------------------------------------------------------------------------	

function init() {

	// Settings	
	initLocalStorage();
	updateDarkMode();

	// 3D
	if (hasWebGL) {
		initBoard3D();

		if (!hasTouchSupport) {
			initInteractiveDropCap3D();
		}
	}

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

function initBoard3D() {
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

		renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
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

function initInteractiveDropCap3D() {
	interactiveDropCap = (function () {
		var dropCapEl = document.getElementsByClassName('content-drop-cap')[0]

		if(!dropCapEl) { return; }

		var	canvasSize = 52,
			textMesh,
			mouse3D = new THREE.Vector3(0, 0, 0),
			pivot = new THREE.Object3D(),
			robotoFont = new THREE.Font({ "glyphs": { "A": { "ha": 946, "x_min": -2, "x_max": 949, "o": "m 635 184 l 309 184 l 252 0 l -2 0 l 360 987 l 584 987 l 949 0 l 693 0 l 635 184 m 366 368 l 578 368 l 472 711 l 366 368 z " }, "B": { "ha": 896, "x_min": 75, "x_max": 840, "o": "m 75 0 l 75 987 l 429 987 q 719 918 620 987 q 819 715 819 848 q 783 584 819 638 q 680 504 748 530 q 798 428 757 484 q 840 292 840 372 q 748 74 840 147 q 475 0 656 1 l 75 0 m 313 420 l 313 183 l 469 183 q 568 213 533 183 q 602 296 602 242 q 479 420 602 419 l 313 420 m 313 576 l 437 576 q 548 604 515 576 q 581 686 581 632 q 545 776 581 749 q 429 804 509 804 l 313 804 l 313 576 z " }, "C": { "ha": 911, "x_min": 47, "x_max": 876, "o": "m 873 334 q 818 152 869 231 q 675 30 767 73 q 465 -14 583 -14 q 159 113 271 -14 q 47 471 47 240 l 47 520 q 97 774 47 665 q 243 942 148 883 q 463 1002 338 1002 q 751 907 642 1002 q 876 646 861 812 l 638 646 q 593 776 635 736 q 463 815 550 815 q 332 749 374 815 q 289 536 291 682 l 289 467 q 329 241 289 309 q 465 173 368 173 q 591 212 547 173 q 637 334 634 250 l 873 334 z " }, "D": { "ha": 898, "x_min": 75, "x_max": 850, "o": "m 75 0 l 75 987 l 393 987 q 628 928 524 987 q 791 761 732 869 q 850 518 850 652 l 850 473 q 793 230 850 337 q 632 61 736 122 q 399 0 528 1 l 75 0 m 313 804 l 313 183 l 395 183 q 553 256 498 183 q 608 473 608 329 l 608 515 q 553 731 608 659 q 393 804 498 804 l 313 804 z " }, "E": { "ha": 777, "x_min": 75, "x_max": 756, "o": "m 687 418 l 313 418 l 313 183 l 755 183 l 755 0 l 75 0 l 75 987 l 756 987 l 756 804 l 313 804 l 313 595 l 687 595 l 687 418 z " }, "F": { "ha": 760, "x_min": 75, "x_max": 735, "o": "m 696 393 l 313 393 l 313 0 l 75 0 l 75 987 l 735 987 l 735 804 l 313 804 l 313 576 l 696 576 l 696 393 z " }, "G": { "ha": 947, "x_min": 56, "x_max": 883, "o": "m 883 122 q 722 24 828 61 q 490 -14 616 -14 q 180 105 296 -14 q 56 435 64 224 l 56 521 q 107 775 56 667 q 255 943 159 884 q 477 1002 351 1002 q 763 917 661 1002 q 882 665 865 833 l 653 665 q 600 783 641 748 q 485 819 559 819 q 347 743 395 819 q 297 526 298 667 l 297 466 q 348 244 297 318 q 507 170 398 170 q 645 211 600 170 l 645 364 l 479 364 l 479 528 l 883 528 l 883 122 z " }, "H": { "ha": 976, "x_min": 75, "x_max": 900, "o": "m 900 0 l 663 0 l 663 412 l 313 412 l 313 0 l 75 0 l 75 987 l 313 987 l 313 595 l 663 595 l 663 987 l 900 987 l 900 0 z " }, "I": { "ha": 419, "x_min": 91, "x_max": 328, "o": "m 328 0 l 91 0 l 91 987 l 328 987 l 328 0 z " }, "J": { "ha": 781, "x_min": 24, "x_max": 705, "o": "m 468 987 l 705 987 l 705 310 q 662 142 705 216 q 539 27 618 68 q 365 -14 461 -14 q 114 68 203 -14 q 24 298 24 149 l 263 298 q 287 200 263 231 q 365 170 310 170 q 441 207 414 170 q 468 310 468 243 l 468 987 z " }, "K": { "ha": 888, "x_min": 75, "x_max": 903, "o": "m 410 368 l 313 260 l 313 0 l 75 0 l 75 987 l 313 987 l 313 552 l 395 677 l 608 987 l 903 987 l 569 551 l 903 0 l 621 0 l 410 368 z " }, "L": { "ha": 753, "x_min": 75, "x_max": 727, "o": "m 313 183 l 727 183 l 727 0 l 75 0 l 75 987 l 313 987 l 313 183 z " }, "M": { "ha": 1217, "x_min": 75, "x_max": 1141, "o": "m 387 987 l 608 300 l 827 987 l 1141 987 l 1141 0 l 902 0 l 902 231 l 925 703 l 686 0 l 529 0 l 290 703 l 313 231 l 313 0 l 75 0 l 75 987 l 387 987 z " }, "N": { "ha": 975, "x_min": 75, "x_max": 899, "o": "m 899 0 l 663 0 l 313 614 l 313 0 l 75 0 l 75 987 l 313 987 l 662 373 l 662 987 l 899 987 l 899 0 z " }, "O": { "ha": 959, "x_min": 47, "x_max": 911, "o": "m 911 473 q 857 218 911 329 q 705 46 804 106 q 480 -14 606 -14 q 256 44 354 -14 q 104 210 159 102 q 47 458 50 318 l 47 513 q 100 769 47 659 q 253 941 153 880 q 479 1001 352 1001 q 703 941 604 1001 q 856 771 801 882 q 911 519 910 661 l 911 473 m 669 515 q 620 738 669 662 q 479 814 570 814 q 290 546 300 814 l 289 473 q 337 250 289 328 q 480 172 385 172 q 619 249 570 172 q 669 469 668 326 l 669 515 z " }, "P": { "ha": 904, "x_min": 75, "x_max": 852, "o": "m 313 335 l 313 0 l 75 0 l 75 987 l 469 987 q 669 946 582 987 q 804 827 756 904 q 852 652 852 750 q 748 421 852 508 q 465 335 645 335 l 313 335 m 313 519 l 469 519 q 574 553 538 519 q 610 651 610 588 q 573 762 610 720 q 471 804 536 803 l 313 804 l 313 519 z " }, "Q": { "ha": 959, "x_min": 49, "x_max": 912, "o": "m 912 473 q 867 234 912 336 q 741 71 821 132 l 901 -56 l 753 -180 l 541 -9 q 481 -14 511 -14 q 258 45 355 -14 q 105 212 160 103 q 49 461 51 320 l 49 513 q 102 770 49 659 q 254 941 155 880 q 480 1001 353 1001 q 704 941 606 1001 q 857 771 802 882 q 912 519 911 661 l 912 473 m 670 515 q 621 738 670 662 q 480 814 572 814 q 338 739 386 814 q 290 519 291 664 l 290 473 q 338 250 290 328 q 481 172 387 172 q 621 249 572 172 q 670 469 669 326 l 670 515 z " }, "R": { "ha": 906, "x_min": 75, "x_max": 871, "o": "m 441 349 l 313 349 l 313 0 l 75 0 l 75 987 l 463 987 q 738 909 639 987 q 837 689 837 831 q 795 518 837 586 q 665 408 753 450 l 871 10 l 871 0 l 616 0 l 441 349 m 313 532 l 463 532 q 565 568 531 532 q 600 667 600 604 q 565 767 600 731 q 463 804 530 804 l 313 804 l 313 532 z " }, "S": { "ha": 869, "x_min": 43, "x_max": 822, "o": "m 584 262 q 547 344 584 315 q 417 404 510 373 q 265 465 324 435 q 73 724 73 559 q 121 868 73 806 q 256 966 169 931 q 453 1001 344 1001 q 644 963 559 1001 q 775 855 728 925 q 822 694 822 785 l 585 694 q 548 788 585 755 q 448 821 511 821 q 347 793 384 821 q 310 722 310 765 q 351 653 310 684 q 494 589 391 622 q 662 518 596 556 q 822 264 822 426 q 724 60 822 134 q 456 -14 627 -14 q 239 30 336 -14 q 93 148 142 73 q 43 320 43 222 l 282 320 q 323 203 282 241 q 456 165 364 165 q 550 191 515 165 q 584 262 584 216 z " }, "T": { "ha": 876, "x_min": 24, "x_max": 850, "o": "m 850 804 l 553 804 l 553 0 l 315 0 l 315 804 l 24 804 l 24 987 l 850 987 l 850 804 z " }, "U": { "ha": 923, "x_min": 71, "x_max": 849, "o": "m 849 987 l 849 341 q 802 151 849 231 q 668 28 755 71 q 461 -14 581 -14 q 177 80 281 -14 q 71 336 73 174 l 71 987 l 311 987 l 311 332 q 461 170 315 170 q 573 210 535 170 q 611 342 611 251 l 611 987 l 849 987 z " }, "V": { "ha": 918, "x_min": -2, "x_max": 920, "o": "m 458 269 l 654 987 l 920 987 l 588 0 l 328 0 l -2 987 l 262 987 l 458 269 z " }, "W": { "ha": 1207, "x_min": 14, "x_max": 1189, "o": "m 840 368 l 953 987 l 1189 987 l 979 0 l 732 0 l 600 563 l 471 0 l 224 0 l 14 987 l 251 987 l 364 368 l 500 987 l 702 987 l 840 368 z " }, "X": { "ha": 886, "x_min": 3, "x_max": 884, "o": "m 443 659 l 604 987 l 876 987 l 600 498 l 884 0 l 609 0 l 443 334 l 277 0 l 3 0 l 286 498 l 10 987 l 281 987 l 443 659 z " }, "Y": { "ha": 872, "x_min": -2, "x_max": 875, "o": "m 436 559 l 618 987 l 875 987 l 557 355 l 557 0 l 315 0 l 315 355 l -2 987 l 254 987 l 436 559 z " }, "Z": { "ha": 847, "x_min": 42, "x_max": 814, "o": "m 342 183 l 814 183 l 814 0 l 45 0 l 45 125 l 515 804 l 42 804 l 42 987 l 809 987 l 809 865 l 342 183 z " } }, "familyName": "Roboto Black", "ascender": 1289, "descender": -339, "underlinePosition": -102, "underlineThickness": 68, "boundingBox": { "yMin": -376, "xMin": -1001, "yMax": 1467, "xMax": 1683 }, "resolution": 1000, "original_font_information": { "format": 0, "copyright": "Copyright 2011 Google Inc. All Rights Reserved.", "fontFamily": "Roboto Black", "fontSubfamily": "Regular", "uniqueID": "Roboto Black", "fullName": "Roboto Black", "version": "Version 2.137; 2017", "postScriptName": "Roboto-Black", "trademark": "Roboto is a trademark of Google.", "designer": "Google", "manufacturerURL": "Google.com", "designerURL": "Christian Robertson", "licence": "Licensed under the Apache License, Version 2.0", "licenceURL": "http://www.apache.org/licenses/LICENSE-2.0", "preferredFamily": "Roboto", "preferredSubfamily": "Black" }, "cssFontWeight": "normal", "cssFontStyle": "normal" }),
			scene = new THREE.Scene(),
			camera = new THREE.PerspectiveCamera(45, 1, 1, 1000),
			spotlight = new THREE.SpotLight(0xffffff),
			material = new THREE.MeshLambertMaterial({ color: 0x99cc33 }),
			renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

		initSceneSetup();
		initText();
		initScene();
		initListener();
		updateColor();
		render();

		function initSceneSetup() {
			camera.position.x = 0;
			camera.position.y = 0;
			camera.position.z = 20;

			spotlight.castShadow = true;
			spotlight.position.set(0, 0, 90);

			renderer.setSize(canvasSize, canvasSize);
			renderer.shadowMap.enabled = true;
			renderer.shadowMapSoft = true;

			document.getElementsByClassName('content-drop-cap-container')[0].appendChild(renderer.domElement);
		}

		function initText() {
			var height = 4,
				size = 12,
				letter = document.getElementsByClassName('content-drop-cap')[0].innerText,
				textGeo = new THREE.TextGeometry(letter, {
					font: robotoFont,
					size: size,
					height: height,
					curveSegments: 16,
					weight: "normal"
				});

			textMesh = new THREE.Mesh(textGeo, material);
			textMesh.receiveShadow = true;
			textMesh.position.x = -size / 2;
			textMesh.position.y = -size / 2;
			textMesh.position.z = -height / 2;

			dropCapEl.innerText = '';
		}

		function initScene() {
			scene.add(spotlight);
			scene.add(pivot);
			pivot.add(textMesh);
		}

		function initListener() {
			window.addEventListener('mousemove', onMouseMove);
		}

		function render() {
			requestAnimationFrame(render);
			renderer.render(scene, camera);
		}

		function updateColor() {
			material.color.setHex(isDarkMode ? 0x99cc33 : 0x272822);
		}

		function onMouseMove(e) {
			mouse3D.setX((event.clientX / window.innerWidth) * 2 - 1);
			mouse3D.setY(-(event.clientY / (window.innerHeight)) * 2 + 1);
			mouse3D.setZ(4);

			pivot.lookAt(mouse3D);
		}

		return {
			updateColor: updateColor
		};

	})();
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
	if (interactiveDropCap) {
		interactiveDropCap.updateColor();
	}

	// Update local storage
	updateLocalStorage(Settings.DARK_MODE, isDarkMode);
}

function getHasWebGlSupport() {
	try {
		var canvas = document.createElement('canvas');
		return !!(window.WebGLRenderingContext && (
			canvas.getContext('webgl') ||
			canvas.getContext('experimental-webgl'))
		);
	} catch (e) {
		return false;
	}
}

function getHasTouchSupport() {
	return (
		!!(typeof window !== 'undefined' &&
			('ontouchstart' in window ||
				(window.DocumentTouch &&
					typeof document !== 'undefined' &&
					document instanceof window.DocumentTouch))) ||
		!!(typeof navigator !== 'undefined' &&
			(navigator.maxTouchPoints || navigator.msMaxTouchPoints))
	);
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