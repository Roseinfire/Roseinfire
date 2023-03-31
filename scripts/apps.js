let apps = new Array()
   apps.push("../rcertificate.json") // "https://roseinfire.github.io/Paint")
   apps.push("../certificate.json") // "https://roseinfire.github.io/Graph-Editor")
   apps.push("certificate.json") // "https://roseinfire.github.io/CookieEat")
   overview(apps, document.getElementById("stats"), function() {
       console.log("exe")
       for(var i = 0; i < status.length; i++) {
           var p = document.createElement("p")
           p.innerHTML = status[i].name
           hand.append(p)
           }; dispatchEvent(new Event("resize"))
       })