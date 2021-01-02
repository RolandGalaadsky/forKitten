let direction = 1;
let rotate = 9;
let count = 0;
let flag = false;

cat.onclick = (event) => 
{
	music.play();
	if (!flag)
	{
		flag = true;
		moveTail();
		let catInterval = setInterval(moveTail,625);
		function moveTail()
		{
			direction *= -1;
			rotate *= -1;
			tail.style.transform = "scaleY(" + direction + ")" + "rotate(" + rotate +"deg)";
			count++;
			if (count == 6)
			{
				flag = false;
				count = 0;
				clearInterval(catInterval);
			}
		}
	}
}
