

if (!window.WebSocket)
    alert("websocket elérhetetlen");

$('#openbutton').live('click', openClick);
$('#closebutton').live('click', closeClick);
$('#sendbutton').live('click', sendClick);

$('#canvas').live("mousedown", canvasMouseDown);
$('#canvas').live("mousemove", canvasMouseMove);
$('#canvas').live("mouseup", canvasMouseUp);

$('#messagearea').live("keydown", function (e) {
    if (e.keyCode == 13 && e.ctrlKey)
        sendClick();
    return false;
});

$('#nickname').live("keydown", function (e) {
    if (e.keyCode == 13)
        sendClick();
    return false;
});

function chatViewModel() {
    this.messages = ko.observableArray([]);

}


var mainVM = new chatViewModel();
var socket;
var ctx;

function openClick() {

    var username = $('nickname').val();
    if (username) {

        //wss SSL
        var url = 'ws://socket.itfactory.hu/demo/chat.ashx?username=' + username;
        socket = new WebSocket(url);

        socket.onopen = socketOpened;
        socket.onerror = socketError;
        socket.onclose = socketClosed;
        socket.onmessage = messageRecevied;
    }
    else {
        alert('nevet kell megadni');
    }
}

function closeClick() {
    socket.close();
}

function sendClick() {
    socket.send($('#messagearea').val());
    $('#messagearea').val("");
}

function socketOpened(e) {
    $('#status').text('csatlakozva');

    $('#connectpanel').hide();
    $('#inputpanel').show();
    $('#users').show();
    $('#messages').show();
}

function socketClosed(e) {
    $('#status').text('bezárva');

    $('#inputpanel').hide();
    $('#connectpanel').show();
    $('#users').hide();
    $('#messages').hide();

    var canv = $('canvas')[0];
    canv.width = canv.width;
    mainVM.messages.removeAll();
}

function socketError() {
    $('#status').text('hiba a csatlakozás során');
}

function messageRecevied(e) {

    if (e.data.toString() == "[object Blob]") {

        var r = new FileReader();
        r.onloadend = function () {
            var dataUrl = r.result.replace("data:", "data:image/jpeg;");
            var myObject = {
                picture: dataUrl,
                color: {r:0,g:0,b:0}, name: "valaki", message:"",time:"",ip:""};
            mainVM.messages.push(myObject);
        }

        //var img = new Image();
        //img.src = link;
        //document.body.appendChild(img);
    }

    r.readAsDataURL(e.data);

    return;
}

var messageObject = JSON.parse(e.data);

if (messageObject.json) {
    ctx.beginPath();
    ctx.strokeStyle = "rgb(" + messageObject.color.r + "," + messageObject.color.g + "," + messageObject.color.b + ")";


    ctx.lineWidth = 2;

    ctx.moveTo(messageObject.message[0].x, messageObject.message[0].y);
    for (var i = 1; i < messageObject.message.length; i++) {
        ctx.lineTo(messageObject.message[i].x, messageObject.message[i].y);
        ctx.stroke();
    }
}
else {

    mainVM.messages.push(messageObject);
}

$('#users').text = messageObject.users;

}


var isMouseDown = false;
var drawPoints = [];
function canvasMouseDown(e) {
    e.cancelBubble = true;
    isMouseDown = true;

    var pos = { x: e.clientX - $(this).offset().left, y: e.clientY - $(this).offset().top };
    drawPoints = [];
    drawPoints.push(pos);

    return false;
}


function canvasMouseMove(e) {
    if (!isMouseDown)
        return;

    e.cancelBubble = true;

    var pos = { x: e.clientX - $(this).offset().left, y: e.clientY - $(this).offset().top };
    var prev = drawPoints[drawPoints.length - 1];
    drawPoints.push(pos);

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 0.5;
    ctx.moveTo(prev.x, prev.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();

    return false;
}

function canvasMouseUp() {
    if (!isMouseDown)
        return;

    isMouseDown = false;

    socket.send("JSON" + JSON.stringify(drawPoints));

    return false;
}

$(document).ready(
    function () {
        ctx = $('#canvas')[0].getContext('2d');
        ko.applyBindings(mainVM);
    });