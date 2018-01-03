let direction = 1;
let rotate = 9;
let count = 0;


cat.onclick = (event) => 
{
	let catInterval = setInterval(
	() =>
	{
		direction *= -1;
		rotate *= -1;
		tail.style.transform = "scaleY(" + direction + ")" + "rotate(" + rotate +"deg)";
		count++;
		if (count == 5)
		{
			count = 0;
			clearInterval(catInterval);
		}
	}
	,1000);
}