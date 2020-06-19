$( document ).ready(function() {
<<<<<<< HEAD:assets/js/tutorialcode.js
<<<<<<< HEAD:assets/js/script.js
    var appID = "2d52799f575e2efb8c494bcd1971726e";
=======
    var appID = "2d52799f575e2efb8c494bcd1971726ecd";
>>>>>>> b16cfc248a55d0894b6af7ca395e443ad7353e46:assets/js/tutorialcode.js
=======
    var appID = "2d52799f575e2efb8c494bcd1971726ecd";
>>>>>>> refs/remotes/origin/master:script.js

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

        $.getJSON(weather,function(json){
            $("#city").html(json.name);
            $("#main_weather").html(json.weather[0].main);
            $("#description_weather").html(json.weather[0].description);
            $("#weather_image").attr("src", "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
            $("#temperature").html(json.main.temp);
            $("#pressure").html(json.main.pressure);
            $("#humidity").html(json.main.humidity);
            $("#wind").html(json.main.wind);
            $("#uv").html(json.main.uv);
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