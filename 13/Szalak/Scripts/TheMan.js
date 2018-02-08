
//importScripts('lali.js'); //scriptsor uaz mint HTML lap elején
//importScripts('lali.js','mari.js');
self.onmessage = function (e) {

    //tömb amit átküldtem e.data


    var total = 0;

    for (var i = e.data[0]; i < e.data[1]; i++) {
        total += Math.sqrt(i) * Math.sqrt(i);
    }


    self.postMessage(total);

}