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
		var sections = child.parentNode.getElementsByTagName("section");

		if(child == sections[0]){
			var nav_el = document.createElement("ul");
	        nav_el.setAttribute('id','nav');
	        nav_el.style.height = "16px";
	        nav_el.style.paddingBottom = "0px";
	        document.body.appendChild(nav_el);
		}

		var el_title = document.createElement("li");
		el_title.innerText = child.children[0].innerText;
		el_title.style.float = "left";
		el_title.onclick = function(){
			for(var i = 0; i < this.parentNode.getElementsByTagName("li").length; i++){
				if(this.parentNode.getElementsByTagName("li")[i]==this){
					this.style.background = "#eee";
					document.getElementsByTagName("div")[i].style.display = "";
				}else{
					this.parentNode.getElementsByTagName("li")[i].style.background = "#fff";
					document.getElementsByTagName("div")[i].style.display = "none";
				}
			}
			
		}
		if(document.getElementById("nav").getElementsByTagName("li").length==0){
			el_title.style.background = "#eee";
		}
		el_title.style.padding = "5px";
		el_title.style.cursor = "pointer";
		el_title.style.fontSize = "18px";
		document.getElementById("nav").appendChild(el_title);

		var content_el = document.createElement("div");
		if(child != sections[0]){
			content_el.style.display = "none";
		}
        content_el.style.background = "#eee";
        content_el.style.width = "300px";
        content_el.style.height = "200px";
        content_el.style.textAlign = "center";
        document.body.appendChild(content_el);

        var sub_nav = document.createElement("ul");
        sub_nav.style.paddingTop = "20px";
        sub_nav.style.height = "12px";
        content_el.appendChild(sub_nav);

        var articles = child.getElementsByTagName("article");
        for(var i = 0; i < articles.length; i++){
        	var sub_title = document.createElement("li");
        	sub_title.style.float = "left";
        	sub_title.onclick = function(){
				for(var i = 0; i < this.parentNode.getElementsByTagName("li").length; i++){
					if(this.parentNode.getElementsByTagName("li")[i]==this){
						this.style.background = "#ddd";
						this.parentNode.parentNode.getElementsByTagName("p")[i].style.display = "";
					}else{
						this.parentNode.getElementsByTagName("li")[i].style.background = "#eee";
						this.parentNode.parentNode.getElementsByTagName("p")[i].style.display = "none";
					}
				}
			}
        	sub_title.style.padding = "5px";
			sub_title.style.cursor = "pointer";
			if(sub_nav.getElementsByTagName("li").length==0){
				sub_title.style.background = "#ddd";
			}
        	sub_title.innerText = articles[i].children[0].innerText;
        	sub_nav.appendChild(sub_title);

        	var sub_content = document.createElement("p");
			if(i > 0){
				sub_content.style.display = "none";
			}
	        sub_content.style.background = "#ddd";
	        sub_content.style.width = "200px";
	        sub_content.style.height = "80px";
	        sub_content.style.textAlign = "center";
	        sub_content.style.marginLeft = "20px";
	        sub_content.style.paddingTop = "20px";
	        sub_content.style.fontSize = "14px";
	        sub_content.innerText = articles[i].children[1].innerText;
	        content_el.appendChild(sub_content);
        }

		if(child == sections[sections.length-1]){
			while(sections.length>0){
				sections[0].remove();
			}
		}

	};
}