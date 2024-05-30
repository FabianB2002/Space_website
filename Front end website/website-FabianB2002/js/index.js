const clickables = document.querySelectorAll('.clickable');

for (const img of document.querySelectorAll("img")) {
        img.addEventListener('click', ev=> {
            img.classList.toggle("active");
        })
}

for (const clickable of clickables) {
	clickable.addEventListener('click', ev => {
		clickable.classList.add("clicked");
	});

	clickable.addEventListener('animationend', ev => {
		clickable.classList.remove("clicked");
	})	
}

