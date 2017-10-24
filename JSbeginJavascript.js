/*External JavaScript file. Makes overall maintenance of files and webpages easier. Also useful if multiple script are
needed across several files, php, html etc.*/

function dateChange() {
    document.getElementById('p1').innerHTML = Date();
}
function fontSizeChange() {
    document.getElementById('p1').style.fontSize = '25px';
}