

let val=document.getElementById('s-value').value;
let nam=document.getElementById('name');
let temp=document.getElementById('p1');
let hum=document.getElementById('p2');
let pct=document.getElementById('p3');




async function fetchData() {
    val=document.getElementById('s-value').value;
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+val
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4e0b2f753bmshf557b5cef58ab47p17c72cjsn81bb25a526d3',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};



    try {
        const response = await fetch(url, options);
        const result = await response.text();

     
     
        const jsonString = result;
// Parse the JSON string into a JavaScript object
const weatherObject = JSON.parse(jsonString);

// Now you can access properties of the object

nam.innerHTML=val;
pct.innerHTML=weatherObject.cloud_pct; // 0
temp.innerHTML=weatherObject.temp; // 5
hum.innerHTML=weatherObject.humidity; // 90
// ... and so on




    
    } catch (error) {
        console.error(error);
    }


    // Construct the URL for the weather icon
    


    let imageUrl = '';

    if (parseFloat(temp.innerHTML) <= 10) {
      imageUrl ='th.jpeg'
    } else if (parseFloat(temp.innerHTML)  < 25) {
      imageUrl = "https://tse2.mm.bing.net/th?id=OIP.IKelLMj_GRtFvD7CPlIk-QHaHD&pid=Api&P=0&h=180";
    } else {
      imageUrl = 'https://markj82.github.io/images/sunny-day.jpg';
    }

    // Set the image source to the chosen URL
    document.getElementById("weatherImage").src = imageUrl;
  }




// Call the async function
fetchData();
