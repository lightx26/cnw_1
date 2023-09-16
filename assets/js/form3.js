window.onload = function() {
    var tableIframe = document.getElementById("table");
    var contentIframe = document.getElementById("content");
    var innerDoc = tableIframe.contentDocument || tableIframe.contentWindow.document;

    var links = innerDoc.querySelectorAll("a");

    links.forEach(atag => {
        atag.addEventListener('click', (event) => {
            event.preventDefault();
            contentIframe.src = atag.href;
        })
    });
}