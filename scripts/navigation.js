function linkto(code) {
   var link = undefined
   switch(code) {
       case "apps": link = "Apps.html"; break
       case "docs": link = "Docs.html"
   }
   var a = document.createElement("a")
   link ? (a.href = link) : alert("Page does not exists *?*")
   a.click()
   }