function openModalBurger() {
	document.getElementById("modal").style.top = "0px";	
}
function closeModalBurger() {
	document.getElementById("modal").style.top = "-500px";	
}

function openModalMarathon() {
	document.getElementById("modalApplicationMarathon").style.top = "15%";
	document.getElementById("modalApplicationVebinar2").style.top = "-700px";
	document.getElementById("modalApplicationVebinar1").style.top = "-700px";
}
function closeModalMarathon() {
	document.getElementById("modalApplicationMarathon").style.top = "-700px";
}

function openModalVebinar1() {
	document.getElementById("modalApplicationVebinar1").style.top = "15%";
	document.getElementById("modalApplicationMarathon").style.top = "-700px";
	document.getElementById("modalApplicationVebinar2").style.top = "-700px";
}
function closeModalVebinar1() {
	document.getElementById("modalApplicationVebinar1").style.top = "-700px";
}

function openModalVebinar2() {
	document.getElementById("modalApplicationVebinar2").style.top = "15%";
	document.getElementById("modalApplicationVebinar1").style.top = "-700px";
	document.getElementById("modalApplicationMarathon").style.top = "-700px";
}
function closeModalVebinar2() {
	document.getElementById("modalApplicationVebinar2").style.top = "-700px";
}

// Smooth Scroll

const links = document.querySelectorAll("a");

for (const link of links) {
	link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
	e.preventDefault();
	const href = this.getAttribute("href");

	document.querySelector(href).scrollIntoView({
		behavior: "smooth"
	});
}
