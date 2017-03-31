$(function(){
	var anim = function(){               
        $("#fly-img").animate({ count: 0.07}, { 
            duration: 130, 
            easing: "linear", 
            step: function(num){
                $(this).css({ 
                    top:  70*(num+1),
                });
            },
            complete: function(){
                anim();
                this.count = 0;
            }
        });
    };
    
    // 着火
    anim();

});
function stopstart(){
	$("#fly-img").css("display","none");
}
function fix(){
    $("#earth1").css("position","fixed");
}
function enter(){
	
	$("#enterclick").hide();
		$("#fly-img").animate({top:'-30vh',},1000,function(){stopstart();$("#earth1-img").animate(
			{width:'25vw',},1000,function(){$("#earth1").animate({
			top:'75vh',left:'85vw',
		},800);fix();}
			);});	
}
