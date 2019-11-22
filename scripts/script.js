function init(){for(initSVGAnimations(),controller=new ScrollMagic.Controller({container:"#usge-wrapper"}),navPin=new ScrollMagic.Scene({triggerElement:"#header",offset:-offset,triggerHook:"onLeave"}).setClassToggle("#nav","show").addTo(controller),curveDraw=new ScrollMagic.Scene({triggerElement:"#curve-holder",offset:offset/2,duration:document.getElementById("curve-holder").clientHeight,tweenChanges:!0}).setTween(curve).addTo(controller),usgeDraw=new ScrollMagic.Scene({triggerElement:"#usge-holder",offset:offset,duration:document.getElementById("usge-holder").clientHeight,tweenChanges:!0}).setTween(usge).addTo(controller),sixteenDraw=new ScrollMagic.Scene({triggerElement:"#sixteen-holder",offset:offset,duration:document.getElementById("sixteen-holder").clientHeight,tweenChanges:!0}).setTween(sixteen).addTo(controller),newheadlineDraw=new ScrollMagic.Scene({triggerElement:"#newheadline-holder",offset:offset,duration:document.getElementById("newheadline-holder").clientHeight,tweenChanges:!0}).setTween(newheadline).addTo(controller),chunkOutText(usgeCopy),chunkOutText(sixteenCopy),chunkOutText(newheadlineCopy),i=0;i<=16;i++)line=document.getElementById("rep"+i),new ScrollMagic.Scene({triggerElement:line,offset:offset}).setTween(TweenMax.from(line,.75,{ease:Quad.easeInOut,opacity:.08})).addTo(controller);window.addEventListener("resize",handleResize),delay=setTimeout(splitText,250),document.getElementById("burger").addEventListener("click",burgerClick)}function handleResize(){clearTimeout(delay),delay=setTimeout(splitText,250)}function splitText(){usgeDraw.duration(document.getElementById("usge-holder").clientHeight),curveDraw.duration(document.getElementById("curve-holder").clientHeight),sixteenDraw.duration(document.getElementById("sixteen-holder").clientHeight),newheadlineDraw.duration(document.getElementById("newheadline-holder").clientHeight),resetCopy(usgeCopy),resetCopy(sixteenCopy),resetCopy(newheadlineCopy)}function resetCopy(e){for(clearTimeout(delay),i=0;i<e.lines.length;i++)e.lines[i].destroy();e.split.revert(),chunkOutText(e)}function chunkOutText(e){for(e.split=new SplitText(e.div,{type:"lines"}),e.lines=[],i=0;i<e.split.lines.length;i++)line=e.split.lines[i],e.lines.push(new ScrollMagic.Scene({triggerElement:line,offset:offset}).setTween(TweenMax.from(line,.75,{ease:Quad.easeInOut,opacity:.08})).addTo(controller))}function burgerClick(e){toggleClass(document.getElementById("nav-menu"),"show")}function scrollPageTo(e){hasClass(document.getElementById("nav-menu"),"show")&&removeClass(document.getElementById("nav-menu"),"show"),document.getElementById("usge-wrapper").scrollTop=document.getElementById(e).offsetTop-52}function toggleClass(e,t){if(e.classList)e.classList.toggle(t);else{var n=e.className.split(" "),i=n.indexOf(t);i>=0?n.splice(i,1):n.push(t),e.className=n.join(" ")}}function hasClass(e,t){var n;return n=e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)}function removeClass(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}var controller,illuminating,usge,curve,sixteen,newheadline,nav,navPin,usgeDraw,usgeCopy={div:"#usge-copy"},curveDraw,sixteenDraw,sixteenCopy={div:"#sixteen-copy"},newheadlineDraw,newheadlineCopy={div:"#newheadline-copy"},svg_draw_fade={ease:Quad.easeInOut,opacity:0,drawSVG:"0%"},svg_draw={ease:Quad.easeInOut,drawSVG:"0%"},svg_draw_fade_reverse_from={opacity:0,drawSVG:"100% 100%"},svg_draw_fade_reverse_to={ease:Quad.easeInOut,opacity:1,drawSVG:"100% 0%"},svg_draw_reverse_from={drawSVG:"100% 100%"},svg_draw_reverse_to={ease:Quad.easeInOut,drawSVG:"100% 0%"},offset=-150,delay;"loading"!=document.readyState?init():document.addEventListener("DOMContentLoaded",init);