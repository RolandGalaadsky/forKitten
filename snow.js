let all = document.getElementById("bd");
let snowNumbers = 200;
let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

function createSnowBall()
{
	let snowball = document.createElement("div");

	snowball.classList.add("snowball");
	snowball.style.width = randomInt(10, 2) + "px";
	snowball.style.height = snowball.style.width;
	snowball.style.backgroundColor = "rgba(255, 255, 255, " + Math.random() + ")";
	snowball.style.top = random(windowHeight - 50, 0) + "px";
	snowball.style.left = random(windowWidth -50, 0) + "px";
	snowball.v = 1.5;
	snowball.onmouseover = (event) =>
	{
			snowball.v *= -1;
	}
	all.appendChild(snowball);
	return (snowball);
}

function letItSnow()
{
	for (let i = 0; i < snowNumbers; i++)
	{
	 (() =>
	 	{
	 		let snowball = createSnowBall();
	 		let angle = random(Math.PI / 2, 0);
	 		let topPos = parseInt(snowball.style.top);
			let leftPos = parseInt(snowball.style.left);
	 		if (!(i % 2))
	 			angle *= Math.random() > 0.5 ? -1 : 1;
	 		let interval = setInterval(() => 
	 									{
	 										if (topPos < 5 || topPos > windowHeight - 80 || leftPos > windowWidth - 50 || leftPos < 20)
											{
												clearInterval(interval);
												snowball.remove();
											}
											else
											{
												leftPos += snowball.v * Math.sin(angle);
												topPos +=  snowball.v * Math.cos(angle);
												snowball.style.top = topPos + 'px';
												snowball.style.left = leftPos + 'px';
											}

	 									}
	 		, 60)
	 })();
	}
}
letItSnow();
setInterval(letItSnow, 10000);