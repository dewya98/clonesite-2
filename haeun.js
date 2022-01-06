$(function(){
    $(".menu>li").mouseover(function(){
        $(this).children(".submenu").stop().slideDown();
    })
    $(".menu>li").mouseout(function(){
        $(this).children(".submenu").stop().slideUp();
    });
    var cnt=2;
    var now=0;
    start();
    
    function start(){
    $(".slider>li").eq(0).siblings().css({"display":"none"});
       
      setInterval(function(){slide();},3000);
    };
    function slide(){
    if(now==cnt){
        now=0;
        }else{
            now++;
        }
    $(".slider>li").eq(now-1).css({"display":"none"});
    $(".slider>li").eq(now).css({"display":"block"});
    };

    $(".menu>li").mouseover(function(){
        if($(".ham").is(":visible")){
           $(this).children(".submenu").stop().slideDown();
        }else{
              $(".submenu_back").stop().slideDown();
              $(".submenu").stop().slideDown();        
        }
      })
      $(".menu>li").mouseleave(function(){    
         if($(".ham").is(":visible")){
           $(this).children(".submenu").stop().slideUp();
            }else{
              $(".submenu_back").stop().slideUp();
              $(".submenu").stop().slideUp();        
           }            
      })
      $(".ham").click(function(){
        $(".menu").css("display","block");
      })
      $(".btnClose").click(function(){
        $(".menu").css("display","none");
        window.location.reload();      
      })      
})