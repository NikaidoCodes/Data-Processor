

function myHeading()
{
	var x = 2;
	for (let i = 0; i < x; i++) {
		var f = document.getElementById("writecode");
		var t = document.getElementById("fInfo");
		if(t.innerHTML=="")
		{
			t.innerHTML="<p class='para'>Heading: &lt;h1&gt;Heading&lt;/h1&gt;</p>";
			f.innerHTML = f.innerHTML + "&lt;h1&gt;Heading&lt;/h1&gt;";	
		}
		else
		{
			t.innerHTML="";
		}
	}
}

function myParagraph()
{		
	var c = 2;
	for (let i = 0; i < c; i++) {
		var d = document.getElementById("writecode");
		var a = document.getElementById("sInfo");	
		if(a.innerHTML=="")
		{
			a.innerHTML="<p class='para'>Paragraph: &lt;p&gt;Paragraph&lt;/p&gt;</p>";
			d.innerHTML = d.innerHTML + "&lt;p&gt;Paragraph&lt;/p&gt;";
		}
		else
		{
			a.innerHTML="";
		}
	}
}

