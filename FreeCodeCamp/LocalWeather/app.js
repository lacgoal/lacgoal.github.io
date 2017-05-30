

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);

    var lat =  position.coords.latitude;
    var long = position.coords.longitude;



//http://api.wunderground.com/api/b1243d069cc29296/forecast/geolookup/conditions/q/39.0561647,-94.6059386.json

    var apiWebsite = "http://api.wunderground.com/api/b1243d069cc29296/forecast/geolookup/conditions/q/" + lat + "," + long+ ".json";

    var weather = new XMLHttpRequest();
    weather.open("GET", apiWebsite, false);
    weather.send(null);

    var response = JSON.parse(weather.response);
    var weather = response.current_observation.display_location.full + "<br />";
    var tempFar = response.current_observation.temp_f + " F <br /";
    var tempCel = response.current_observation.temp_c + " C <br /";
    var forecastFar = response.forecast.txt_forecast.forecastday[0].fcttext + "<br />";
    var forecastCel = response.forecast.txt_forecast.forecastday[0].fcttext_metric + "<br />";
    var icon = response.current_observation.icon;
    var iconDisplay = "https://icons.wxug.com/i/c/k/" + icon + ".gif";


    document.getElementById("weather").innerHTML = weather;
    document.getElementById('myImage').src = iconDisplay;

    //document.getElementById("icon").innerHTML = icon;

      document.getElementById("forecast").innerHTML = forecastFar;
      document.getElementById("temp").innerHTML = tempFar;


    document.getElementById("farCel").onclick = function () {
        document.getElementById("forecast").innerHTML = forecastCel;
        document.getElementById("temp").innerHTML = tempCel;
     };


  });
}
