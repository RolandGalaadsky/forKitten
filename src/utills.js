function random(max, min)
{
	return (Math.random() * max + min);
}

function randomInt(max, min)
{
	return (Math.floor(random(max, min)));
}

function randomColor()
{
	const COLORS = ['red', 'green', 'blue', 'darkblue', 'purple', 'violet', 'maroon']
	return (COLORS[randomInt(COLORS.length, 0)]);
}

function addSpaces(max, i)
{
	for (let k = max - i; k > 0; k--)
	{
		tree.innerHTML += '\u00A0';
	}
}

function outCondition(topPos, windowHeight, leftPos, windowWidth)
{
	return (topPos < 5 || topPos > windowHeight - 80 || leftPos > windowWidth - 50 || leftPos < 20);
}