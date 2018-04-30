$(document).ready(function(){

var long;
var lat;
var temp;
var fTemp;
var cTemp;
var kTemp;

if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position){
    long = position.coords.longitude;
    lat = position.coords.latitude;

        var api = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&APPID=1abfd909476b3ac936e6702bc908b388';

        $.getJSON(api, function(data){
        var weatherType = data.weather[0].description;
        kTemp = data.main.temp;
        var windSpeed = data.wind.speed;
        var city = data.name;

        var tempSwap;

          fTemp = Math.round((kTemp) * (9/5) - 459.67);
          cTemp = Math.round(kTemp - 273);

          $('#city').html(city);
          $('#weatherType').html(weatherType);
          $('#fTemp').html(fTemp + " &#8457;");

          windSpeed = (2.237*(windSpeed)).toFixed(1);
          $('#windSpeed').html(windSpeed + " mph");
          if(fTemp > 80) {
            $('body').css('background-image',
            'url(https://image.ibb.co/mXE5SS/horizon_mountain_cloud_sky_sunlight_atmosphere_946256_pxhere_com.jpg)');
          } else {
            $('body').css('background-image',
            'url(https://image.ibb.co/ntuau7/landscape_nature_rock_horizon_wilderness_mountain_499011_pxhere_com.jpg)');
          }
              
          $('#fTemp').on('click', function(){

          if(tempSwap === false) {
              $('#fTemp').html(cTemp + " &#8451;");
              tempSwap = true;
          } else {
              $('#fTemp').html(fTemp + " &#8457;");
              tempSwap = false;
          }

          });

    });
    });
}   //API URL with geolocation

});