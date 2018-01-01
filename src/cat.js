let direction = 1;
let rotate = 9;

function toggle_tail() {
	direction *= -1;
	rotate *= -1;
	tail.style.transform = "scaleY(" + direction + ")" + "rotate(" + rotate +"deg)";
}

setInterval(toggle_tail, 1000);