const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body");e.setAttribute("disabled","disabled"),t.addEventListener("click",(function(){r=setInterval((()=>{let r=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;d.style.backgroundColor=r,t.setAttribute("disabled","disabled"),e.removeAttribute("disabled")}),1e3)})),e.addEventListener("click",(function(){clearInterval(r),t.removeAttribute("disabled"),e.setAttribute("disabled","disabled")}));let r=null;
//# sourceMappingURL=01-color-switcher.12de663f.js.map
