var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
function includeHTML() {
  var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
        elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
          if (this.status === 200) {elmnt.innerHTML = this.responseText; }
          if (this.status === 404) {elmnt.innerHTML = "Page not found."; }
    /* Remove the attribute, and call this function once more: */
    elmnt.removeAttribute("w3-include-html");
    includeHTML();
  }
}
xhttp.open("GET", file, true);
xhttp.send();
/* Exit the function: */
return;
}
}
}

}

/*
     FILE ARCHIVED ON 06:44:18 Jan 16, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:59:08 Jan 22, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.704
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.012
  esindex: 0.013
  cdx.remote: 6.602
  LoadShardBlock: 77.931 (3)
  PetaboxLoader3.datanode: 80.774 (4)
  PetaboxLoader3.resolve: 63.824 (2)
  load_resource: 82.412
*/