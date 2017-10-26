document.addEventListener("click",getClickPosition, false);

var xPosition;
var yPosition;
var name;
//var count = 0;

/*var clicks = {
    xy: []
};*/

//var filename = 'data.json';

/*function storeJson(x,y,id) {
    clicks.xy.push({
        "id" : id,
        "x"  : x,
        "y"  : y
    });
}*/

var Xx,Yy,Idd;
var arrayList = [];

var count = 0;

function clicks2(xx, yy, idd) {
    this.Xx = xx;
    this.Yy = yy;
    this.Idd = idd;
}

function changeColor(newColor) {
  elem = document.elementFromPoint(xPosition, yPosition);
  elem.style.color = newColor;
  name = elem.id;
  console.log(name);
  //storeJson(xPosition,yPosition,name);
  //console.log(xy);
  var stuff = new clicks2(xPosition,yPosition,name);
  arrayList.push(stuff);
  console.log(JSON.stringify(arrayList));
  count++;
  if(count%3 == 0) download(JSON.stringify(arrayList), 'test.txt', 'text/plain');
}

/*chrome.tabs.onHighlighted.addListener(function storee(tabId) {
	//var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(clicks));
	var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(JSON.stringify(arrayList)));
	var a = document.createElement('a');
	a.href = 'data:' + data;
	a.download = 'data.json';
	a.click();

	//saveJSON();

});*/

/*chrome.tabs.onHighlighted.addListener(function storee(tabId) {

	download(JSON.stringify(arrayList), 'test.txt', 'text/plain');

});*/

function download(text, name, type) {
    var a = document.createElement("a");
    var file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
    a.click();
}

/*function saveJSON(){

    if(!clicks) {
        console.error('No data')
        return;
    }

    if(!filename) filename = 'console.json'

    if(typeof clicks === "object"){
        clicks = JSON.stringify(clicks, undefined, 4)
    }

    var blob = new Blob([clicks], {type: 'text/json'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
}*/

/*chrome.storage.sync.set({ stor : name }, function() {
  alert('Successful Save!');
});*/

function getClickPosition(e) {
    xPosition = e.clientX;
    yPosition = e.clientY;
    console.log(xPosition + " " + yPosition);
    changeColor("blue");
};