let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let snowNumbers = 200
let TREEHEIGHT = 25;
let all = document.getElementById("bd");
let tree = document.getElementById("tree");
if (windowHeight < 800)
	TREEHEIGHT = 10;