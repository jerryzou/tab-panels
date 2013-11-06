var tabDemo = function() {
	for(var i = 0; i < document.body.children.length; i++) {
		child = document.body.children[i];
		if(child.tagName.toLowerCase() != 'section') continue;

		t = new TabPanel();
		t.init(child);
		window.panels.push(t);
	}
};
var panels = [];
window.onload = tabDemo;

function TabPanel(){
	this.init = function(child){
		child.getElementsByTagName("h2")[0].onclick = function(e){
			for(var i = 0; i < e.target.parentNode.parentNode.getElementsByTagName("article").length; i++){
				e.target.parentNode.parentNode.getElementsByTagName("article")[i].style.display = "none";
			}
			for(var i = 0; i < e.target.parentNode.getElementsByTagName("article").length; i++){
				e.target.parentNode.getElementsByTagName("article")[i].style.display = "";
			}
		}
		for(var i = 0; i < child.getElementsByTagName("article").length; i++){
			if(child != child.parentNode.getElementsByTagName("section")[0]){
				child.getElementsByTagName("article")[i].style.display = "none";
			}
			if(i>0){
				child.getElementsByTagName("article")[i].getElementsByTagName("p")[0].style.display="none";
			}
			child.getElementsByTagName("article")[i].getElementsByTagName("h3")[0].onclick = function(e){
				for(var i = 0; i < e.target.parentNode.parentNode.getElementsByTagName("p").length; i++){
					e.target.parentNode.parentNode.getElementsByTagName("p")[i].style.display = "none";
				}
				e.target.parentNode.getElementsByTagName("p")[0].style.display = "";
			}
		}
	};
}