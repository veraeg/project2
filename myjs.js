$(document).ready(function() {
 function timing() { 
 	var el = $(".pc").eq(0);
el.detach();
$("#slider").append(el);


}
	
setInterval(timing,3000);

	$("img[alt='robot']").animate({
       
       left: "100px",
       
    }, 1000);

$("img[alt='robot']").queue(function() {
	$("#title1").removeAttr("hidden");
	$(this).dequeue();
})

$(document).scroll(function(){
$("#top").css({'backgroundColor': "#417496", "opacity": 0.9})

}) 

})

//tableSorter function 

$(document).ready(function() { 
    $("#tb").tablesorter({ 
        
        headers: { 
            
            0: { 
                 
                sorter: false 
            }, 
             
            1: { 
                 
                sorter: false 
            } 
        } 
    }); 
});