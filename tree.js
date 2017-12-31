let tree = document.getElementById("tree");
const TREEHEIGHT = 25;
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

function createTreeElem(elemBody, color)
{
	newElem = document.createElement("SPAN");
	newElem.innerHTML = elemBody;
	newElem.style.color = color;
	tree.appendChild(newElem);
}

function buildTree(i)
{
	let rand;

	for (let j = i; j > 0; j--)
	{
		rand = randomInt(6, 2);
		if (!(j % rand))
		{
			createTreeElem('*', randomColor());
		}
		else
		{
			tree.innerHTML += '^';
		}
	}
}

function stem()
{
	let branch;

	addSpaces(TREEHEIGHT, 3);
	createTreeElem('|', 'brown');
	addSpaces(3, 0);
	createTreeElem('|', 'brown');
}

addSpaces(TREEHEIGHT,3)
tree.innerHTML += '<span id="star">&#9883;</span>';
for(let i = 0; i < TREEHEIGHT; i++)
{
	addSpaces(TREEHEIGHT, i);
	buildTree(i);
	tree.innerHTML += '<br>';
}
stem();