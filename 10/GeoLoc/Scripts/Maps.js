var map;
var lat;
var lon;
var socket;

var kliensek = {};

var markImg = new google.maps.MarkerImage("/star.png");
markImg.anchor = new google.maps.Point(8, 8);



$("#openbutton").live("click", openClick);
$("#sendbutton").live("click", sendClick);

$("#messagearea").live("keydown", function (e) {
    if (e.keyCode == 13 && e.ctrlKey) {
        sendClick();
        return false;
    }
});

$("#nickname").live("keydown", function (e) {
    if (e.keyCode == 13) {
        openClick();
        return false;
    }
});


function sendClick() {
    socket.send($("#messagearea").val());
    $("#messagearea").val("");
}


function openClick() {
    var username = $("#nickname").val();
    if (username) {

        var url = "ws://sockets.itfactory.hu/demo/chat.ashx?username=" + username + "&lat=" + lat + "&lon=" + lon;

        socket = new WebSocket(url);

        socket.onopen = socketOpened;
        socket.onmessage = messageReceived;
    }
    else {
        alert("Kell a név!");
    }
}


function socketOpened() {

    var latlon = new google.maps.LatLng(47, 19);
    var opciok = { center: latlon, zoom: 15, mapTypeId: google.maps.MapTypeId.ROADMAP };
    map = new google.maps.Map(document.getElementById("map_canvas"), opciok);

    $("#connectdiv").hide();
    $("#chatdiv").show("slow", function () { $("#messagearea").focus(); });
}

function messageReceived(e) {

    var messageObject = JSON.parse(e.data);

    if (!kliensek[messageObject.id]) {
        kliensek[messageObject.id] = new kliens(messageObject.lat, messageObject.lon, messageObject.message, messageObject.name);
    }
    else {
        kliensek[messageObject.id].SetMessage(messageObject.message);
    }


    var bounds = new google.maps.LatLngBounds();
    for (var id in kliensek) {
        bounds.extend(kliensek[id].LatLng);
    }
    map.fitBounds(bounds);
     

    $("#users").text(messageObject.users);
}


function kliens(lat, lon, message, name) {

    this.Name = name;
    this.LatLng = new google.maps.LatLng(lat, lon);
    this.Marker = new google.maps.Marker({ position: this.LatLng, map: map, title: name, icon: markImg });
    this.InfoWindow = new google.maps.InfoWindow();

    var timeout;

    this.SetMessage = function (message) {
        this.InfoWindow.setContent("<div class='name'>" + this.Name + "</div><div class='message'>" + message + "</div>");
        this.InfoWindow.open(map, this.Marker);

        var info = this.InfoWindow;

        if (timeout)
            window.clearTimeout(timeout);

        timeout = window.setTimeout(function () { timeout = 0; info.close(); }, 4000);

    }

    this.SetMessage(message);
}


//map.setCenter(new google.maps.LatLng(47.2, 18));
//map.setZoom(8);



//var marker = new google.maps.Marker({ position: latlon, map: map, title: "hurrá", icon: markImg });

//var info = new google.maps.InfoWindow({ content: "Hello Leo!" });
//info.open(map, marker);


function enableConnect(pos) {
    $("#connectdiv").show("slow", function () { $("#nickname").focus(); });

    lat = pos.coords.latitude;
    lon = pos.coords.longitude;
}

$(document).ready(
    function () {
        navigator.geolocation.getCurrentPosition(enableConnect, hiba, { enableHighAccuracy: true, timeout: 20000, maximumAge: 60000 });
    }
    )


function hiba(h) {
    alert(h.code + ", " + h.message)
}