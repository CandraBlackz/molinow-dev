function animasiintro(){
	$("#text span").velocity("transition.slideLeftIn",{
								stagger: 110,
								complete: function(){
									animasiButtonStart();
								}
							});
}

function animasiButtonStart(){
	$("#start").velocity("transition.bounceUpIn")
				.mouseenter(function(){
					$(this).velocity({width:65}); 
				})
				.mouseleave(function(){
					$(this).velocity({width:100}); 
				}); 
}

$(document).ready(function(){
	animasiintro();
});