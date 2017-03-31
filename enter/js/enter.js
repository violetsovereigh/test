/*$(document).ready(function(){   
	$('#star').animate({
			left:'1000px',
			
		},3000);
		$('#star').click(function(){
		
			$('#star').animate({left:'0px',},3000);
			$('#star').css("z-index","11");
		});
		var star_left=$('#star').offset().left;
		var $win=$(window).scroll(function(){
			if ((star_left-$win.scrollLeft())>=1000) {
				$('#star').animate({left:'0px',bottom:'-10px'},3000);
				$('#star').css("z-index","11");
		};
		});

});*/
var font;
    var left;
    var back;
    var right;
var duration=1500;
$(function setlocate(){
    var storystarw=$("#container .storystar #storyimg").width();
    var storystarh=$("#container .storystar #storyimg").height();
    var createstarw=$("#container .createstar #createimg").width();
    var createstarh=$("#container .createstar #createimg").height();
    turn($("#container .storystar"),1.5);
        turn($("#container .characterstar"),2);
        turn($("#container .createstar"),0.5);
        turn($("#container .contactstar"),1);
        $("#container .storystar #storyimg").animate({width:'+='+storystarw/4+'',height:'+='+storystarh/4+'',left:'0px'},1000);
        $("#container .createstar #createimg").animate({width:'-='+createstarw/4+'',height:'-='+createstarh/4+'',left:'0px'},1000);
});     

function turn(motion,num){
    // 動かす物体
    // 半径をコンテナの中央に設定。物体の幅及び高さを引く。
    var stara = ($("#container").width() - motion.width()) / 2;
    var starb = ($("#container").height() - motion.height()) / 2;
    var con=num;
    // 再帰関数
    var anim = function(){               
        motion.animate({ count: num}, { 
            duration: duration, 
            easing: "linear", 
            step: function(num){
                $(this).css({
                    left: stara - stara * Math.cos(num * Math.PI), 
                    top:  starb -    starb * Math.sin(num * Math.PI),
                });
            },
            
        });
    };
    
    // 着火
    anim();
}
function bigger(motion){
    var starw=motion.width();
    var starh=motion.height();
    motion.animate({width:'400px',height:'400px',},1000);

   motion.css("z-index","3");
}
function normal(motion){
    var starw=motion.width();
    var starh=motion.height();
     motion.animate({width:'200px',height:'200px',},1000);
   motion.css("z-index","2");
}
function smaller(motion){
    var starw=motion.width();
    var starh=motion.height();
     motion.animate({width:'100px',height:'100px',},1000);
   motion.css("z-index","1");
}

$(function lighting(){
    $("#container .storystar #storyimg").mouseover(function(){
        $("#container .storystar #storyimg").attr("src", "images/story(L).png");
    });
    $("#container .storystar #storyimg").mouseout(function(){
        $("#container .storystar #storyimg").attr("src", "images/story.png");
    });

    $("#container .characterstar #characterimg").mouseover(function(){
        $("#container .characterstar #characterimg").attr("src", "images/character(L).png");
    });
    $("#container .characterstar #characterimg").mouseout(function(){
        $("#container .characterstar #characterimg").attr("src", "images/character.png");
    });

    $("#container .createstar #createimg").mouseover(function(){
        $("#container .createstar #createimg").attr("src", "images/create(L).png");
    });
   $("#container .createstar #createimg").mouseout(function(){
        $("#container .createstar #createimg").attr("src", "images/create.png");
    });

    $("#container .contactstar #contactimg").mouseover(function(){
        $("#container .contactstar #contactimg").attr("src", "images/contact(L).png");
    });
    $("#container .contactstar #contactimg").mouseout(function(){
        $("#container .contactstar #contactimg").attr("src", "images/contact.png");
    });
});

function setid(starname)
{
    var x=1;
    x=starname;
    switch(x)
    {
        case 1:
        font=$("#container .storystar #storyimg");left=$("#container .contactstar #contactimg");back=$("#container .createstar #createimg");right=$("#container .characterstar #characterimg");
        bigger(font);smaller(back);normal(right);normal(left);
        turn($("#container .storystar"),-0.5);
        turn($("#container .characterstar"),0);
        turn($("#container .createstar"),-1.5);
        turn($("#container .contactstar"),-1);
        break;
        case 2:
        font=$("#container .characterstar #characterimg");left=$("#container .storystar #storyimg");back=$("#container .contactstar #contactimg");right=$("#container .createstar #createimg");
        bigger(font);smaller(back);normal(right);normal(left);
        turn($("#container .storystar"),1);
        turn($("#container .characterstar"),1.5);
        turn($("#container .createstar"),0);
        turn($("#container .contactstar"),0.5);
        break;
        case 3:
        font=$("#container .createstar #createimg");left=$("#container .characterstar #characterimg");back=$("#container .storystar #storyimg");right=$("#container .contactstar #contactimg");
        bigger(font);smaller(back);normal(right);normal(left);
        turn($("#container .storystar"),0.5);
        turn($("#container .characterstar"),1);
        turn($("#container .createstar"),-0.5);
        turn($("#container .contactstar"),0);
        break;
        case 4:
        font=$("#container .contactstar #contactimg");left=$("#container .createstar #createimg");back=$("#container .characterstar #characterimg");right=$("#container .storystar #storyimg");
        bigger(font);smaller(back);normal(right);normal(left);
        turn($("#container .storystar"),0);
        turn($("#container .characterstar"),0.5);
        turn($("#container .createstar"),-1);
        turn($("#container .contactstar"),-0.5);
        break;
    }
}     





