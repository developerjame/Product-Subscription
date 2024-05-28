
const monthlyPrice = document.querySelector("#price1-hide");
const yearlyPrice = document.querySelector("#price2-hide");
const monthlyPrice2 = document.querySelector(".price1-hide1");
const yearlyPrice2 = document.querySelector(".price2-hide2");
const monthlyPrice3 = document.querySelector(".price3-hide3");
const yearlyPrice3 = document.querySelector(".price4-hide4");
const billMsg = document.querySelector(".billing_msg");
const billMsg1 = document.querySelector("#billing_msg1");
const billMsg2 = document.querySelector("#billing_msg2");
const offer1 = document.querySelector("#offer1");
const offer2 = document.querySelector("#offer2");
const monthlyRadio = document.getElementById("monthly");
const yearlyRadio = document.getElementById("yearly");

console.log(billMsg);
//Hide/show prices based on radio button selection
monthlyRadio.addEventListener("change", () => {
	monthlyPrice.style.display = "block";
	yearlyPrice.style.display = "none";
});

yearlyRadio.addEventListener("change", () => {
	monthlyPrice.style.display = "none";
	yearlyPrice.style.display = "block";
});

monthlyRadio.addEventListener("change", () => {
	monthlyPrice2.style.display = "block";
	yearlyPrice2.style.display = "none";
});

yearlyRadio.addEventListener("change", () => {
	monthlyPrice2.style.display = "none";
	yearlyPrice2.style.display = "block";
});

monthlyRadio.addEventListener("change", () => {
	monthlyPrice3.style.display = "block";
	yearlyPrice3.style.display = "none";
});

yearlyRadio.addEventListener("change", () => {
	monthlyPrice3.style.display = "none";
	yearlyPrice3.style.display = "block";
});

monthlyRadio.addEventListener("change", () => {
	billMsg.style.display = "block";
	billMsg.style.display = "none";
});

yearlyRadio.addEventListener("change", () => {
	billMsg.style.display = "none";
	billMsg.style.display = "block";
});

monthlyRadio.addEventListener("change", () => {
	billMsg1.style.display = "block";
	billMsg1.style.display = "none";
});

yearlyRadio.addEventListener("change", () => {
	billMsg1.style.display = "none";
	billMsg1.style.display = "block";
});

monthlyRadio.addEventListener("change", () => {
	billMsg2.style.display = "block";
	billMsg2.style.display = "none";
});

yearlyRadio.addEventListener("change", () => {
	billMsg2.style.display = "none";
	billMsg2.style.display = "block";
});

monthlyRadio.addEventListener("change", () => {
	offer2.style.display = "block";
	offer1.style.display = "none";
});

yearlyRadio.addEventListener("change", () => {
	offer2.style.display = "none";
	offer1.style.display = "block";
});


function Product() {
	document.getElementsByClassName("mobile").classList.toggle("hide");
}

//Faq controls
class DisclosureButton {
	constructor(buttonNode) {
		this.buttonNode = buttonNode;
		this.controlledNode = false;

		var id = this.buttonNode.getAttribute("aria-controls");

		if (id) {
			this.controlledNode = document.getElementById(id);
		}

		this.buttonNode.setAttribute("aria-expanded", "false");
		this.hideContent();

		this.buttonNode.addEventListener("click", this.onClick.bind(this));
		this.buttonNode.addEventListener("focus", this.onFocus.bind(this));
		this.buttonNode.addEventListener("blur", this.onBlur.bind(this));
	}

	showContent() {
		if (this.controlledNode) {
			this.controlledNode.style.display = "block";
		}
	}

	hideContent() {
		if (this.controlledNode) {
			this.controlledNode.style.display = "none";
		}
	}

	toggleExpand() {
		if (this.buttonNode.getAttribute("aria-expanded") === "true") {
			this.buttonNode.setAttribute("aria-expanded", "false");
			this.hideContent();
		} else {
			this.buttonNode.setAttribute("aria-expanded", "true");
			this.showContent();
		}
	}

	/* EVENT HANDLERS */

	onClick() {
		this.toggleExpand();
	}

	onFocus() {
		this.buttonNode.classList.add("focus");
	}

	onBlur() {
		this.buttonNode.classList.remove("focus");
	}
}

/* Initialize Hide/Show Buttons */

window.addEventListener(
	"load",
	function () {
		var buttons = document.querySelectorAll(
			"button[aria-expanded][aria-controls]",
		);

		for (var i = 0; i < buttons.length; i++) {
			new DisclosureButton(buttons[i]);
		}
	},
	false,
);

function Mobile() {
	document.getElementById("mobile-dropdown1").classList.toggle("show1");
}

window.onclick = function (event) {
	if (!event.target.matches(".mobile-btn1")) {
		var dropdowns = document.getElementsByClassName(".mobile-dropdown1");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains("show1")) {
				openDropdown.classList.remove("show1");
			}
		}
	}
};

function mobileNav() {
	document
		.getElementById("mobile-container")
		.classList.toggle("show-mobile-nav");
}

function Mobile2() {
	document.getElementById("mobile-dropdown2").classList.toggle("show1");
}

window.onclick = function (event) {
	if (!event.target.matches(".mobile-btn2")) {
		var dropdowns = document.getElementsByClassName(".mobile-dropdown2");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains("show1")) {
				openDropdown.classList.remove("show1");
			}
		}
	}
};

function Click() {
	document.getElementById("btn-nav").classList.toggle("active");
}

function Click2() {
	document.getElementById("btn-nav2").classList.toggle("active");
}

function Btn() {
	document.getElementById("btn1").classList.toggle("list3-active");
}

function Comparison() {
	document.getElementById("w-dropdown-list3").classList.toggle("show");
}

window.onclick = function (event) {
	if (!event.target.matches(".btn1")) {
		var dropdowns = document.getElementsByClassName(
			"dropdown-toggle-container",
		);
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains("show")) {
				openDropdown.classList.remove("show");
			}
		}
	}
};

const mainNav = document.querySelector(".main-nav");
const navigation = document.querySelector(".navigation2");

const options = {
	rootMargin: "-100px 0px 0px 0px",
};

const changeNav = new IntersectionObserver(function (entries) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			mainNav.classList.add("scrolled");
		} else {
		}
	});
}, options);

changeNav.observe(navigation);
