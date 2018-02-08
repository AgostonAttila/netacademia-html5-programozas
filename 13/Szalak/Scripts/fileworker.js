self.onmessage = function (e) {

    var reader = new FileReaderSnyc();
    var tartalom = reader.readAsText(e.data);
    self.postMessage(tartalom);
}