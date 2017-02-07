$(document).ready(function () {
    $.getJSON("topspots.json", function (json) {
        // Read a text file with three variables
        // name, description, and location (lat and lon coordinates) and
        // outputs to a table format

        var tr;

        for (var i = 0; i < json.length; i++) {
            tr = $('<tr/>');
            tr.append("<td>" + json[i].name + "</td>");
            tr.append("<td>" + json[i].description + "</td>");
            tr.append("<td><a href=" + "http://maps.google.com/?q=" + json[i].location +
            "><button id='mapButton' class='mapButton'>Open in Google Maps</button>" + "</td>");

            $('table').append(tr);
        }
    });
});
