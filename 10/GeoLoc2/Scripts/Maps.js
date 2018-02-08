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

        var url = "ws://sockets.itfactory.hu/demo/chat.ashx?username=" + username;

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


    $("#users").text(messageObject.users);
}

//map.setCenter(new google.maps.LatLng(47.2, 18));
//map.setZoom(8);



//var marker = new google.maps.Marker({ position: latlon, map: map, title: "hurrá", icon: markImg });

//var info = new google.maps.InfoWindow({ content: "Hello Leo!" });
//info.open(map, marker);


function enableConnect() {
    $("#connectdiv").show("slow", function () { $("#nickname").focus(); } );
}

$(document).ready(
    function () {
        enableConnect();
    }
    )