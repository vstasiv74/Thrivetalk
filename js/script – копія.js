let open = document.getElementById("open")
let close = document.getElementById("close")
let links = document.getElementById("links")
let scrolllinks = document.querySelectorAll(".scroll-link")
// var linksbuttons = document.querySelectorAll(".menu_link")
// var aboutsect = document.querySelector(".about-us__row")
// var service = document.querySelector(".section-picture-block")
// var blog = document.querySelector(".section-text-block")
// var contactus = document.querySelector(".contact-us-block")
// var mobcontactus = document.querySelector(".contact-us-text")
// var contactbtn = document.querySelector(".header__navbar_button .button_btn")
// var mobcontactbtn = document.querySelector(".header__navbar_button_mob")
		// console.log(close)

function openMenu() {
	open.style.display = "none"
	close.style.display = "block"
	links.style.display = "block"
}

function closeMenu() {
	close.style.display = "none"
	open.style.display = "block"
	links.style.display = ""
}

open.addEventListener("click", function () {
	openMenu();
})
close.addEventListener("click", function () {
	closeMenu();
})

for (let i = 0; i < scrolllinks.length; i++) {
	scrolllinks[i].addEventListener("click", function (e) {
		console.log("clicked")
		e.preventDefault();
		let element = document.querySelector(this.getAttribute("href"));
		let offset = element.getBoundingClientRect().top + window.pageYOffset - element.clientTop - 30;
		window.scrollTo({top: offset, behavior: "smooth"});
		closeMenu();
	})
}

// console.log(aboutsect)
// console.log(service)
// console.log(contactus)

// linksbuttons[0].addEventListener("click", function () {
// 	window.scrollTo({top: 0, behavior: "smooth"});
// 	closeMenu();
// })

// linksbuttons[1].addEventListener("click", function () {
// 	aboutsect.scrollIntoView({block: "start", behavior: "smooth"});
// 	closeMenu();
	
// 	// console.log(window.scrollY)
// })

// linksbuttons[2].addEventListener("click", function () {
// 	service.scrollIntoView({block: "start", behavior: "smooth"});
// 	closeMenu();
// })

// linksbuttons[3].addEventListener("click", function () {
// 	blog.scrollIntoView({block: "start", behavior: "smooth"});
// 	closeMenu();
// // 	console.log(window.scrollY)
// })

// contactbtn.addEventListener("click", function () {
// 	contactus.scrollIntoView({block: "start", behavior: "smooth"});
// 	closeMenu();
// // 	console.log(window.scrollY)
// })

// mobcontactbtn.addEventListener("click", function () {
// 	// window.scrollTo({top: 8065.60009765625, behavior: "smooth"})
// 	mobcontactus.scrollIntoView({block: "start", behavior: "smooth"});
// 	closeMenu();
// 	// console.log(window.scrollY);
// 	// var offset = window.scrollY + 10;
// 	// window.scrollTo({top: offset, behavior: "smooth"})
// 	// console.log(offset);
// 	// window.scrollTo({top: offset, behavior: "smooth"});
// 	// console.log(windowY.scrollY)
// })