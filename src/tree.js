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