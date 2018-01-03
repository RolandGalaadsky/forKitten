addSpaces(TREEHEIGHT,3)
tree.innerHTML += '<span id="star">&#9733</span>';
for(let i = 0; i < TREEHEIGHT; i++)
{
	addSpaces(TREEHEIGHT, i);
	buildTree(i);
	createTreeElem('br', '', null)
}
stem();