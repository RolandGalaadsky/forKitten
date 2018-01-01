let direction = 1;

function toggle_cat() {
	direction *= -1;
	cat.style.transform = "scale(1," + direction + ")";
}

setInterval(toggle_cat, 1000);