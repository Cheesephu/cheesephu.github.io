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
    console.error('Nâng cấp trình duyệt của bạn. Trình duyệt này KHÔNG được hỗ trợ WebSocket để tải lại trực tiếp.');
};

function resizeContent() {
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    let contentHeight = document.getElementById("content").clientHeight;
    let contentWidth = document.getElementById("content").clientWidth;

    if (contentHeight > windowHeight) {
      document.getElementById("content").style.transform = "scale(" + windowHeight / contentHeight + ")";
    }
    if (contentWidth > windowWidth) {
      document.getElementById("content").style.transform = "scale(" + windowWidth / contentWidth + ")";
    }
  }

//   window.addEventListener("resize", resizeContent);


