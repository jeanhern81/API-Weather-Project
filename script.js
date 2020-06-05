$( document ).ready(function() {
    var appID = "PUT YOUR API KEY HERE";

    $(".query_btn").click(function(){
        var query_param = $(this).prev().val();
    })
});

$( document ).ready(function() {
    var appID = "2d52799f575e2efb8c494bcd1971726e";

    $(".query_btn").click(function(){

        var query_param = $(this).prev().val();

        if ($(this).prev().attr("placeholder") == "City") {
            var weather = "http://api.openweathermap.org/data/2.5/weather?q=" + query_param + "&APPID=" + appID;
        } else if ($(this).prev().attr("placeholder") == "Zip Code") {
            var weather = "http://api.openweathermap.org/data/2.5/weather?zip=" + query_param + "&APPID=" + appID;
        }
        if (location.protocol === 'http:') {
            url = 'http://api.openweathermap.org/data/2.5/weather?lat=21.1682895&lon=-101.6723306&units=imperial&APPID=ec50a6072ac189dee111acdd3a38ab9f';
        } else {
        url = 'https://api.openweathermap.org/data/2.5/weather?lat=21.1682895&lon=-101.6723306&units=imperial&APPID=ec50a6072ac189dee111acdd3a38ab9f';
        }
    })
});

$( document ).ready(function() {
    var appID = "2d52799f575e2efb8c494bcd1971726e";

    $(".query_btn").click(function(){

        var query_param = $(this).prev().val();

        if ($(this).prev().attr("placeholder") == "City") {
            var weather = "http://api.openweathermap.org/data/2.5/weather?q=" + query_param + "&APPID=" + appID;
        } else if ($(this).prev().attr("placeholder") == "Zip Code") {
            var weather = "http://api.openweathermap.org/data/2.5/weather?zip=" + query_param + "&APPID=" + appID;
        }
        if (location.protocol === 'http:') {
            url = 'http://api.openweathermap.org/data/2.5/weather?lat=21.1682895&lon=-101.6723306&units=imperial&APPID=ec50a6072ac189dee111acdd3a38ab9f';
        } else {
        url = 'https://api.openweathermap.org/data/2.5/weather?lat=21.1682895&lon=-101.6723306&units=imperial&APPID=ec50a6072ac189dee111acdd3a38ab9f';
        }

        $.getJSON(weather,function(json){
            $("#city").html(json.name);
            $("#main_weather").html(json.weather[0].main);
            $("#description_weather").html(json.weather[0].description);
            $("#weather_image").attr("src", "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
            $("#temperature").html(json.main.temp);
            $("#pressure").html(json.main.pressure);
            $("#humidity").html(json.main.humidity);
        });
    })

    // Optional Code for temperature conversion
    var fahrenheit = true;

    $("#convertToCelsius").click(function() {
        if (fahrenheit) {
            $("#temperature").text(((($("#temperature").text() - 32) * 5) / 9));
        }
        fahrenheit = false;
    });

    $("#convertToFahrenheit").click(function() {
        if (fahrenheit == false) {
            $("#temperature").text((($("#temperature").text() * (9/5)) + 32));
        }
        fahrenheit = true;
    });
});