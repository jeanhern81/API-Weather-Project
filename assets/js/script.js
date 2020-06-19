<<<<<<< HEAD
<<<<<<< HEAD
$( document ).ready(function() {
<<<<<<< HEAD:assets/js/script.js
    var appID = "2d52799f575e2efb8c494bcd1971726e";
=======
    var appID = "2d52799f575e2efb8c494bcd1971726ecd";
>>>>>>> b16cfc248a55d0894b6af7ca395e443ad7353e46:assets/js/tutorialcode.js

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
=======
=======
>>>>>>> refs/remotes/origin/master

//Variables
$(document).ready(function () {
    let appID = "2d52799f575e2efb8c494bcd1971726e";
    let weather = "";
    let city = "";
    let current_date = moment().format("L");
    let search_history = JSON.parse(localStorage.getItem("cities")) === null ? [] : JSON.parse(localStorage.getItem("cities"));


    console.log(search_history);
    console.log(current_date);
    
//Search History
    displaySearchHistory();
    function currentWeather() {


        if ($(this).attr("id") === "submit-city") {
            city = $("#city").val();
        } else {
            city = $(this).text();
        }

        weather = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + appID;
        console.log(search_history.indexOf(city));

        if (search_history.indexOf(city) === -1) {
            search_history.push(city);
        }
        //local storage for serach history
        console.log(search_history);
        localStorage.setItem("cities", JSON.stringify(search_history));

        // Pulling Data
        $.getJSON(weather, function (json) {
            let temp = (json.main.temp - 273.15) * (9 / 5) + 32;
            let windspeed = json.wind.speed * 2.237;

            var lon = json.coord.lon;
            var lat = json.coord.lat;
            uvIndex(lon, lat);


            $("#current-city").text(json.name + " " + current_date);
            $("#weather-img").attr("src", "https://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
            $("#temperature").text(temp.toFixed(2) + "°F");
            $("#humidity").text(json.main.humidity + "%");
            $("#windspeed").text(windspeed.toFixed(2) + " " + "mph");

            
            
        });
    }

//UV Index Function
    function uvIndex(lon, lat) {
        var indexURL =
            "https://api.openweathermap.org/data/2.5/uvi?appid=2d52799f575e2efb8c494bcd1971726e&lat=";
        var middle = "&lon=";
        var indexSearch = indexURL + lat + middle + lon;
        

        $.ajax({
            url: indexSearch,
            method: "GET",
        }).then(function(response) {
            $("#uvindex").text(response.value);
            //var uvFinal = response.value;
        })
        

    };


    //5-day forecast funciton
    function fiveDayForecast() {
        let five_day_forecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&APPID=" + appID;

        let day_counter = 1;

        //ajax call for 5-day forecast
        $.ajax({
            url: five_day_forecast,
            method: "GET",
        }).then(function (response) {


            for (let i = 0; i < response.list.length; i++) {
                //change each text area here
                let date_and_time = response.list[i].dt_txt;
                let date = date_and_time.split(" ")[0];
                let time = date_and_time.split(" ")[1];

                if (time === "15:00:00") {
                    let year = date.split("-")[0];
                    let month = date.split("-")[1];
                    let day = date.split("-")[2];
                    $("#day-" + day_counter).children(".card-date").text(month + "/" + day + "/" + year);
                    $("#day-" + day_counter).children(".weather-icon").attr("src", "https://api.openweathermap.org/img/w/" + response.list[i].weather[0].icon + ".png");
                    $("#day-" + day_counter).children(".weather-temp").text("Temp: " + ((response.list[i].main.temp - 273.15) * (9 / 5) + 32).toFixed(2) + "°F");
                    $("#day-" + day_counter).children(".weather-humidity").text("Humidity: " + response.list[i].main.humidity + "%");
                    day_counter++;
                }
            }
        });
    }

    //Searched History Left float display
    function displaySearchHistory() {

        $("#search-history").empty();
        search_history.forEach(function (city) {

            //check to see if an entry is already part of search history, and don't add a second version of it
            console.log(search_history);
            let history_item = $("<li>");

            history_item.addClass("list-group-item btn btn-light");
            history_item.text(city);

            $("#search-history").prepend(history_item);
        });
        $(".btn").click(currentWeather);
        $(".btn").click(fiveDayForecast);

        //local storage clear history fucntion
    }
    function clearHistory() {
        $("#search-history").empty();
        search_history = [];
        localStorage.setItem("cities", JSON.stringify(search_history));
    }
    //put the listener on btn class so that all buttons have listener
    $("#clear-history").click(clearHistory);
    $("#submit-city").click(displaySearchHistory);

    });
<<<<<<< HEAD
>>>>>>> b16cfc248a55d0894b6af7ca395e443ad7353e46
=======
>>>>>>> refs/remotes/origin/master
