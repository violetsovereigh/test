var motion1=$("#shinestar1")
var motion2=$("#shinestar2")
var motion3=$("#shinestar3")
var motion4=$("#shinestar4")
var motion5=$("#shinestar5")
var motion6=$("#shinestar6")
var motion7=$("#shinestar7")
  $(function shadow() {
   var t;var i;
  t=Math.floor(Math.random()*50)+20;
  i=Math.floor(Math.random()*7)+1;
  anim(i,t);

  setTimeout(shadow(),1000)
  
});

 
 function anim(i,t){
    switch(i){
      case 1:
        starmove(motion1,t);
      break;
      case 2:
        starmove(motion2,t);
      break;
      case 3:
        starmove(motion3,t);
      break;
      case 4:
        starmove(motion4,t);
      break;
      case 5:
        starmove(motion5,t);
      break;
      case 6:
        starmove(motion6,t);
      break;
      case 7:
        starmove(motion7,t);
      break;
    }
    
     
  }
 function starmove(motion,t){
  var add0=Math.random()*20;
  var addl=Math.random()*100;
  var addt=Math.random()*100;
  var add2=Math.random()*50;
  var product=Math.random()*50+20;
  var anim = function(){ 
        motion.animate({count:t},{
    
    duration:1000,
    easing:"linear",
    step:function(num){
      $(this).css({
        left:(num+add0)*product+addl,
        top:(num+add2)*(num+add2)+addt,
      });
    },
    complete: function(){
                anim();
                this.count = 0;
            }

         });
        };
        anim();
    }


 		
  	

