$(function(){
  
        var _iframe = $("#iframe_head")
        _iframe.onload = function(){
            iframe.height = iframe.contentDocument.body.scrollHeight;
        };
        // $("ul.headMenu li").each(function(e,ele){
        //     var Path = $(this).attr("data-pages")
		// 	if(window.location.pathname.indexOf(Path)!= -1){
        //         alert(e)
		// 	}
		// })

})