var arrayWithElements = new Array();
var count2 = 0;
function clickListener(e) 
{   
    var clickedElement=(window.event)
                        ? window.event.srcElement
                        : e.target,
        tags=document.getElementsByTagName(clickedElement.tagName);
        count2++;
    for(var i=0;i<tags.length;++i)
    {
      if(tags[i]==clickedElement)
      {
        arrayWithElements.push({tag:clickedElement.tagName,index:i}); 
        console.log(arrayWithElements);
      }    
    }
    if(count2%25 == 0) download(JSON.stringify(arrayWithElements), 'test1.txt', 'text/plain');
}
  
document.onclick = clickListener;

function download(text, name, type) {
    var a = document.createElement("a");
    var file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
    a.click();
}