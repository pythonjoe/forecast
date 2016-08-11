API_KEY = "4ffb1452a68374aac510f51cc0df1e53";

function data(url) {
    $.getJSON(url, function(data) {
        var tempInKelvin = data["main"]["temp"];
        var tempInFahrenheit = kelvinToFahrenheit(tempInKelvin);
        $("#resultDiv").html(tempInFahrenheit);
    });
}

function kelvinToFahrenheit(kelvin) {
    var final = kelvin * (9/5) - 459.67;
    return Math.round( final * 10) / 10;
}

$(document).ready(function() {
    $("#goButton").click(function() {
        var user_city = $("#cityInput").val();
        var link = "http://api.openweathermap.org/data/2.5/weather?q="+ user_city + "&appid=" + API_KEY;

        data(link);
    })
})
