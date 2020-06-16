$(document).ready(function () {
    let appID = "2d52799f575e2efb8c494bcd1971726e";
    let weather = "";
    let city = "";
    let current_date = moment().format("L");
    let search_history = JSON.parse(localStorage.getItem("cities")) === null ? [] : JSON.parse(localStorage.getItem("cities"));

