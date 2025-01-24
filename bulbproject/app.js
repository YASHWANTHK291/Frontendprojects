const light = document.querySelector('#bulb');

light.addEventListener('click', function(e){

    e.target.classList.toggle('bulb-on');
    alert("bulb on");

})
var output = document.getElementsByTagName("p");
for(var x=0;x<output.length;x++){
    output[x].onmouseover = function(){
        this.style.backgroundColor="red";
    }
output[x].onmouseout= function(){
    this.style.backgroundColor="white";
}
}

var imgList = document.getElementsByTagName("img");
for(var y=0;y<imgList.length;y++){
    imgList[y].onclick = function(){
        window.open(this.src,'My Image','resizable=yes,scrollbars=yes,width=800,height=600');
    }
}