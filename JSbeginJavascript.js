/*External JavaScript file. Makes overall maintenance of files and webpages easier. Also useful if multiple script are
needed across several files, php, html etc.*/

function dateChange() {
    document.getElementById('p1').innerHTML = Date();
}
function fontSizeChange() {
    document.getElementById('p1').style.fontSize = '25px';
}
function writeHTML(){
    document.write("document.write has been called");
}
//scripts not in a function will just run on the site regardless of anything else on the page.
// The script below will be called and inserted into the last possible spot in the HTML.
document.write(5 + 6);