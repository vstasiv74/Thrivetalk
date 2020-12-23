var open = document.getElementById("open")
var close = document.getElementById("close")
var links = document.getElementById("links")
		// console.log(close)
open.addEventListener("click", function () {
	this.style.display = "none"
	close.style.display = "block"
	links.style.display = "block"
})
close.addEventListener("click", function () {
	this.style.display = "none"
	open.style.display = "block"
	// links.style.display = "none"
	// links.setAttribute("style", "")
	links.style.display = ""
})