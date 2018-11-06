let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let snowNumbers = 200
let TREEHEIGHT = 22;
let all = document.getElementById("bd");
let tree = document.getElementById("tree");
let tail = document.getElementById("tail");
let cat = document.getElementById("cat_container");
let music = document.getElementById("music");
music.play();
if (windowHeight < 596)
	TREEHEIGHT = 10;
