$(document).ready(function () {
    let appID = "2d52799f575e2efb8c494bcd1971726e";
    let weather = "";
    let city = "";
    let currentUVIndex = "";
    let current_date = moment().format("L");
    let search_history = JSON.parse(localStorage.getItem("cities")) === null ? [] : JSON.parse(localStorage.getItem("cities"));

    console.log(search_history);
    console.log(current_date);
    

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
