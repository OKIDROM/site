/*
 Copyright (c) 2010 - 2016 JoomShaper
 @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or later
*/
jQuery(function(a){function f(){var a=document.getElementById("line-load"),d=1,c=setInterval(function(){100<=d?clearInterval(c):(d++,a.style.width=d+"%")},10)}if("undefined"===typeof sp_offanimation||""===sp_offanimation)sp_offanimation="default";"default"==sp_offanimation&&(a("#offcanvas-toggler").on("click",function(b){b.preventDefault();a(".off-canvas-menu-init").addClass("offcanvas")}),a('<div class="offcanvas-overlay"></div>').insertBefore(".offcanvas-menu"),a(".close-offcanvas, .offcanvas-overlay").on("click",
function(b){b.preventDefault();a(".off-canvas-menu-init").removeClass("offcanvas")}));"slidetop"==sp_offanimation&&(a("#offcanvas-toggler").on("click",function(b){b.preventDefault();a(".off-canvas-menu-init").addClass("slide-top-menu")}),a('<div class="offcanvas-overlay"></div>').insertBefore(".offcanvas-menu"),a(".close-offcanvas, .offcanvas-overlay").on("click",function(b){b.preventDefault();a(".off-canvas-menu-init").removeClass("slide-top-menu")}));"fullscreen"==sp_offanimation&&(a("#offcanvas-toggler").on("click",
function(b){b.preventDefault();a(".off-canvas-menu-init").addClass("full-screen-off-canvas")}),a(document).ready(function(){a(".off-canvas-menu-init").addClass("full-screen")}),a(".close-offcanvas, .offcanvas-overlay").on("click",function(b){b.preventDefault();a(".off-canvas-menu-init").removeClass("full-screen-off-canvas")}));"fullScreen-top"==sp_offanimation&&(a("#offcanvas-toggler").on("click",function(b){b.preventDefault();a(".off-canvas-menu-init").addClass("full-screen-off-canvas-ftop")}),a(document).ready(function(){a(".off-canvas-menu-init").addClass("full-screen-ftop")}),
a(".close-offcanvas, .offcanvas-overlay").on("click",function(b){b.preventDefault();a(".off-canvas-menu-init").removeClass("full-screen-off-canvas-ftop")}));"drarkplus"==sp_offanimation&&(a("#offcanvas-toggler").on("click",function(b){b.preventDefault();a(".off-canvas-menu-init").addClass("new-look-off-canvas")}),a('<div class="offcanvas-overlay"></div>').insertBefore(".offcanvas-menu"),a(document).ready(function(){a(".off-canvas-menu-init").addClass("new-look")}),a(".close-offcanvas,.offcanvas-overlay").on("click",
function(b){b.preventDefault();a(".off-canvas-menu-init").removeClass("new-look-off-canvas")}));if(0<a("body.sticky-header").length){var c=a("#sp-header"),g=c.outerHeight(),h=c.offset().top;c.addClass("animated");c.before('<div class="nav-placeholder"></div>');a(".nav-placeholder").height("inherit");c.addClass("menu-fixed-out");var e=function(){a(window).scrollTop()>h?(c.removeClass("menu-fixed-out").addClass("menu-fixed"),a(".nav-placeholder").height(g)):c.hasClass("menu-fixed")&&(c.removeClass("menu-fixed").addClass("menu-fixed-out"),
a(".nav-placeholder").height("inherit"))};e();a(window).scroll(function(){e()})}"undefined"===typeof sp_gotop&&(sp_gotop="");sp_gotop&&(a(window).scroll(function(){100<a(this).scrollTop()?a(".scrollup").fadeIn():a(".scrollup").fadeOut(400)}),a(".scrollup").click(function(){a("html, body").animate({scrollTop:0},600);return!1}));"undefined"===typeof sp_preloader&&(sp_preloader="");if(sp_preloader)a(window).on("load",function(){0<a(".sp-loader-with-logo").length&&f();setTimeout(function(){a(".sp-pre-loader").fadeOut()},
1E3)});a(".sp-megamenu-wrapper").parent().parent().css("position","static").parent().css("position","relative");a(".sp-menu-full").each(function(){a(this).parent().addClass("menu-justify")});if(0<a("body.layout-boxed").length){var k=a("#sp-header").parent().outerWidth();a("#sp-header").css({"max-width":k,left:"auto"})}a('[data-toggle="tooltip"]').tooltip();a(document).on("click",".sp-rating .star",function(b){b.preventDefault();b={option:"com_ajax",plugin:"helix3",data:{action:"voting",user_rating:a(this).data("number"),
id:a(this).closest(".post_rating").attr("id")},format:"json"};a.ajax({type:"POST",data:b,beforeSend:function(){a(".post_rating .ajax-loader").show()},success:function(b){b=a.parseJSON(b.data);a(".post_rating .ajax-loader").hide();if("invalid"==b.status)a(".post_rating .voting-result").text("You have already rated this entry!").fadeIn("fast");else if("false"==b.status)a(".post_rating .voting-result").text("Somethings wrong here, try again!").fadeIn("fast");else if("true"==b.status){var c=b.action;
a(".voting-symbol").find(".star").each(function(b){b<c&&a(".star").eq(-(b+1)).addClass("active")});a(".post_rating .voting-result").text("Thank You!").fadeIn("fast")}},error:function(){a(".post_rating .ajax-loader").hide();a(".post_rating .voting-result").text("Failed to rate, try again!").fadeIn("fast")}})})});