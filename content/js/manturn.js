
	function initialize(){
		
		var man1hover=$("#man1");
		var man2hover=$("#man2");
		var flag1=1;
		var flag2=1;
		
		man1=new Array(7)
		man2=new Array(7)
	man1hover.mouseover(function(){
		
		
	if(flag1) {
		for (var i = 1; i <= 7; ++i) {
		man1[i]=new Image()
		man1[i].src="images/lee"+i+".png"
		}delay=200
		nextImage=1
		startAnimation1()
	};
	
	
	});
	man2hover.mouseover(function(){
		
		
	if(flag2) {
		for (var i = 1; i <= 7; ++i) {
		man2[i]=new Image()
		man2[i].src="images/chun"+i+".png"
		}delay=200
		nextImage=1
		startAnimation2()
	};
	
	
	});
	man1hover.mouseout(function(){
		flag1=0;
	});	
	man2hover.mouseout(function(){
		flag2=0;
	});	
	
}
function startAnimation1(){
	interval=setInterval('animation1()',delay)
}
function startAnimation2(){
	interval=setInterval('animation2()',delay)
}
function animation1(){
	i=nextImage
	++nextImage
	nextImage%=7
	document.display.src=man1[i].src
}
function animation2(){
	i=nextImage
	++nextImage
	nextImage%=7
	document.display.src=man2[i].src
}



	
