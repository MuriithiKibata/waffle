document.addEventListener('DOMContentLoaded', function() {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '80c250efd6msh99ea6bafa8bc554p1c5354jsna30f74e88924',
			'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
		}
	};
	
	fetch('https://apidojo-booking-v1.p.rapidapi.com/properties/get-featured-reviews?hotel_id=1528418&languagecode=en-us', options)
		.then(response => response.json())
		.then(response =>response.vpm_featured_reviews)
		.then(renderComments1)
		.catch(err => console.error(err));
	
		let text1 = document.getElementById("txt2");
		let text2 = document.getElementById("txt1");
		let text3 = document.getElementById("txt3");
	function renderComments1 (data) {
		text1.innerHTML = data[4].pros;
		text2.innerHTML = data[3].pros;
		text3.innerHTML = data[1].pros;
		}
		

document.querySelector(".btn1").addEventListener("click", myFunction);

function myFunction () {
alert("Redirect Not Available");
}
document.querySelector(".btn2").addEventListener("click", myFunction);

function myFunction () {
alert("Redirect Not Available");
}
document.querySelector(".btn").addEventListener("click", myFunction);

function myFunction () {
alert("Redirect Not Available");
}
document.getElementById("like-button").addEventListener("click",  incrementLikes)
  
function incrementLikes() {
  let y =  document.getElementById("like-count").innerText.replace('likes', '');
  let m = parseInt(y,10) ; 
   m++
  document.getElementById("like-count").textContent = `${m} likes`
}
document.getElementById("like-button").addEventListener("click",  incrementLikes)
})

	document.addEventListener("dblclick", function(){
		document.documentElement.requestFullscreen().catch ((e) => {
			console.log (e);
		})
	 
	})