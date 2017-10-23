document.addEventListener("click",getClickPosition, false);

var xPosition;
var yPosition;
var name;

function changeColor(newColor) {
  elem = document.elementFromPoint(xPosition, yPosition);
  elem.style.color = newColor;
  name = elem.id;
  console.log(name);
}

function getClickPosition(e) {
    xPosition = e.clientX;
    yPosition = e.clientY;
    console.log(xPosition + " " + yPosition);
    changeColor("blue");
};