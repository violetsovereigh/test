$(document).ready(function(){
    $('a.page-scroll').bind('click', function(event) {//將所有a標籤且擁有page-scroll class的元素綁上click(點擊)事件
        var $anchor = $(this);//將$anchor指向 觸發點擊的a元素(jquery物件型式)
        $('html, body').stop().animate({//對網頁進行scroll(捲動)
            scrollLeft: ($($anchor.attr('href')).offset().left)
        }, 3000, 'easeInOutQuart');
        event.preventDefault();//取消a元素原本的點擊事件(轉跳)
    });

});//滑動頁面(切換選單)
