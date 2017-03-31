
	function initialize(){
		
		var badmenhover=$("#badmen");
	badmenhover.mouseover(function(){
		var flag=1;
		badmen=new Array(9)
	if(flag) {
		for (var i = 0; i <= 9; ++i) {
		badmen[i]=new Image()
		badmen[i].src="images/bighero/badmen0"+i+".png"
		}delay=500
		nextImage=1
		startAnimation()
	};
	
	badmenhover.mouseout(function(){
		flag=0;
	});	
	});
	
}
function startAnimation(){
	interval=setInterval('animation()',delay)
}
function animation(){
	i=nextImage
	++nextImage
	nextImage%=9
	document.display.src=badmen[i].src
}



	
