!function(){var t={body:document.querySelector("body"),btnStart:document.querySelector(".js-btnStart"),btnStop:document.querySelector(".js-btnStop")};t.body.addEventListener("click",(function(r){var e=r.target,a=e.classList.contains("js-btnStart"),o=e.classList.contains("js-btnStop");if(!a&&!o)return;if(a)return e.disabled=!0,t.btnStop.disabled=!1,n=setInterval((function(){return t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3);return t.btnStart.disabled=!1,e.disabled=!0,clearInterval(n)}));var n=null;t.btnStop.disabled=!0}();
//# sourceMappingURL=01-color-switcher.4f9a3504.js.map