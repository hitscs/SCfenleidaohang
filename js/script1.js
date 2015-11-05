window.onload = function(){
	var Lis = document.getElementsByTagName("li");
	for (var i = 0; i < Lis.length; i++) {
		Lis[i].onmouseover = function(){
		this.className = "lihover";//动态为li添加class属性

		//当二级菜单里的分类很少的时候，让悬浮层菜单的大小依旧等于最初设定的大小
		var divHeight = this.getElementsByTagName("div")[0].offsetHeight,//获取每个li下，二级菜单最外层包裹层的div容器自身的宽度
			lisHeight = Lis.length*30;//一级菜单的高度
		if (divHeight < lisHeight) {
			this.getElementsByTagName("div")[0].style.height = lisHeight+"px";
		}
		
		} 
		Lis[i].onmouseout = function(){
			this.className = "";
		}
	}
}