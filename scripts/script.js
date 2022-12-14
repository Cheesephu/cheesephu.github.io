const menubaby = document.querySelector(".menu-baby")
const navLinks = document.querySelector(".nav-links")

menubaby.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
});
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
 button.addEventListener("click", () => {
const currentState = button.getAttribute("data-state");

if (!currentState || currentState === "closed") {
  button.setAttribute("data-state", "opened");
  button.setAttribute("aria-expanded", "true");
} else {
  button.setAttribute("data-state", "closed");
  button.setAttribute("aria-expanded", "false");
}
});
});

if ('WebSocket' in window) {
    (function() {
        function refreshCSS() {
            var sheets = [].slice.call(document.getElementsByTagName("link"));
            var head = document.getElementsByTagName("head")[0];
            for (var i = 0; i < sheets.length; ++i) {
                var elem = sheets[i];
                var parent = elem.parentElement || head;
                parent.removeChild(elem);
                var rel = elem.rel;
                if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                    var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                    elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
                }
                parent.appendChild(elem);
            }
        }
        var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
        var address = protocol + window.location.host + window.location.pathname + '/ws';
        var socket = new WebSocket(address);
        socket.onmessage = function(msg) {
            if (msg.data == 'reload') window.location.reload();
            else if (msg.data == 'refreshcss') refreshCSS();
        };
        if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
            console.log('Live reload enabled.');
            sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
        }
    })();
} else {
    console.error('N??ng c???p tr??nh duy???t c???a b???n. Tr??nh duy???t n??y KH??NG ???????c h??? tr??? WebSocket ????? t???i l???i tr???c ti???p.');
};



