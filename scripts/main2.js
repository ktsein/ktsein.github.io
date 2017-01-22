$(document).ready(function()
{


	
	var $slideArray = $(".slide-images");	
	
	var slideCounter = 0;
	
	$(document).click(function()
	{
		slideCounter ++;
		if(slideCounter >= $slideArray.length)
		{
			slideCounter = 0;
		}
		var hash = "#";
		var showSlide = hash.concat($slideArray.eq(slideCounter).attr("id"));
		$("#slide").attr("src", showSlide);
	});
});

