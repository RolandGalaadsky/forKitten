let direction = 1;
let rotate = 9;
let count = 0;


cat.onclick = (event) => 
{
	moveTail();
	let catInterval = setInterval(moveTail,1000);
	function moveTail()
	{
		direction *= -1;
		rotate *= -1;
		tail.style.transform = "scaleY(" + direction + ")" + "rotate(" + rotate +"deg)";
		count++;
		if (count == 6)
		{
			count = 0;
			clearInterval(catInterval);
		}
	}
}