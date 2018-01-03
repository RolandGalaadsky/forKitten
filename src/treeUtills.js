let gColors = ['red', 'blue', 'lightgreen', 'yellow'];
let tColors = [...gColors, ...['#FF851B', '#F012BE', '#85144b', '#001f3f']];

function createTreeElem(type, elemBody, color)
{
	let newElem;

	if (type == 'text')
	{
		newElem = document.createTextNode(elemBody);
	}
	else
	{
		newElem = document.createElement(type);
		newElem.style.color = color;
	}
	newElem.innerHTML = elemBody;
	tree.appendChild(newElem);
	return (newElem);
}
function createToy(elemBody, color)
{
	return (createTreeElem('span', elemBody, color));
}
function createText(elemBody)
{
	return (createTreeElem('text', elemBody, null));
}
function addSpaces(max, i)
{
	for (let k = max - i; k > 0; k--)
	{
		createText('\u00A0');
	}
}
function disco(fire)
{
	setInterval(()=>
	{
		fire.style.color = randomColor(gColors);
	}, 500 + randomInt(100, -100))
}
function isFire(j)
{
	if (TREEHEIGHT == 10 )
		return (!(j % 2))
	else
		return (!(j % 5) || j == 2);
}
function buildTree(i)
{
	let rand;
	let newElem;
	
	for (let j = i; j > 0; j--)
	{
		rand = randomInt(6, 2);
		if (isFire(j))
		{
			newElem = createToy("&#9679;", randomColor(gColors));
			disco(newElem);
		}
		else if (!(j % rand))
		{
			createToy('*', randomColor(tColors));
		}
		else
		{
			createToy('^', 'green');
		}
	}
}
function stem()
{
	addSpaces(TREEHEIGHT, 3);
	createToy('|', 'brown');
	addSpaces(3, 0);
	createToy('|', 'brown');
}
