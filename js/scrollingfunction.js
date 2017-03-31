$(document).ready(function(){
	var $B=$(".B").scrollLeft();//B的最左邊
	var $win=$(window).scroll(function(){   //WINDOW的最左邊		
        $scrollVer=$(this).scrollLeft();   


        
        $(".sc_left").text($scrollVer);   
        $scrollHor=$(this).scrollTop();   
        $(".sc_top").text($scrollHor); 



        if($scrollVer>=($B+300)){$(".menu").css("display","block");}
        else {$(".menu").css("display","none");}
    });  
});
