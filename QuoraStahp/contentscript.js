
blurrerlength=0;

//hides the sign up modal window

	if(document.getElementsByClassName('modal_signup_background')[0]!=null)
{
	if(document.getElementsByClassName('modal_signup_background')[0].parentNode!=null)
	{
		document.getElementsByClassName('modal_signup_background')[0].parentNode.style.display="none";
		console.log("modal sign up hidden");
	}
}

//hides the blurring div that appears on top of content.

setInterval(function(){



if(document.getElementsByClassName('blurred_answer')[0]!=null)
{
	var blurrers=document.getElementsByClassName('blurred_answer');

if(blurrers.length>blurrerlength)
{	
	for(var i=blurrerlength;i<blurrers.length;i++)
	{
		console.log(blurrers[i].style.display="none");
	}
	blurrerlength=blurrers.length;	
	console.log("answer blurring removed");
}

}
}, 500);






