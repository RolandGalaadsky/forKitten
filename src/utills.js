function random(max, min)
{
	return (Math.random() * max + min);
}

function randomInt(max, min)
{
	return (Math.floor(random(max, min)));
}

function randomColor(colors)
{
	return (colors[randomInt(colors.length, 0)]);
}

function outCondition(topPos, windowHeight, leftPos, windowWidth)
{
	return (topPos < 5 || topPos > windowHeight - 80 || leftPos > windowWidth - 50 || leftPos < 20);
}