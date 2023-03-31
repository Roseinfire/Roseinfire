   var fl = document.getElementsByClassName("floating")[0].children[0]
   function explace(element, time=200, p=0, d={}) {
       var origin = new String(element.innerHTML)
       while(origin[p] && (origin[p] == "&" || origin[p] == "<")) {
           if(origin[p] && origin[p] == "&") { p = p+6 }
           if(origin[p] && origin[p] == "<") { p = p+4 }
           }
       if(origin[p]) {
           var str = `<span style="color: gold">${origin[p]}</span>`
           var res = ""
           while(res.length < p) { res = res + origin[res.length] }
           res += str;
           for(var i = p+1; i < origin.length; i++) { res += origin[i] }
           element.innerHTML = res;
           setTimeout(function() { explace(element, time, p+str.length) }, time-2 > 5 ? time-2 : 5)
           }
       };

   let ico = document.getElementsByTagName("img")[0]
   ico.addEventListener("dragstart", function(e) { ico.moving = true })
   ico.addEventListener("dragend", function(e) {
       ico.moving = false
       var x1 = Math.abs(e.x - fl.offsetLeft)
       var y1 = Math.abs(e.y - fl.offsetTop)
       var tg = x1/y1
       if( (0.1 < tg && tg < 0.3) && (700 < y1 && y1 < 800) && (120 < x1 && x1 < 190) ) {
           explace(fl, 100)
           } 
       })
   
    