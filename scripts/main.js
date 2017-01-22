$(document).ready(function()
{


	
	var $slideArray = $(".slide-images");	
	
	var slideCounter = 0;
	
	$(document).click(function()
	{
		slideCounter ++;
		if(slideCounter > $slideArray.length)
		{
			slideCounter = 0;
		}
		var showSlide = "#";
		var s = $slideArray.eq(slideCounter).attr("id");
		console.log(typeof(s));
		console.log(s);
		$("#slide").attr("src", showSlide);
	});
});

