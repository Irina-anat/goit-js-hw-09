!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body");e.setAttribute("disabled","disabled"),t.addEventListener("click",(function(){a=setInterval((function(){var a="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));d.style.backgroundColor=a,t.setAttribute("disabled","disabled"),e.removeAttribute("disabled")}),1e3)})),e.addEventListener("click",(function(){clearInterval(a),t.removeAttribute("disabled"),e.setAttribute("disabled","disabled")}));var a=null}();
//# sourceMappingURL=01-color-switcher.7c7be897.js.map