(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

!function(){if("Promise"in window&&void 0!==window.performance){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||"?preload=no"==e.search.substr(-11)||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},p=function(e){return e.target.closest("a")},f=function(t){var r=t.relatedTarget;r&&p(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},d={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=p(e);c(r)&&u(r.href)},d),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=p(r);c(n)&&(n.addEventListener("mouseout",f,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},d)}}();

$(function(){
!function(){var e=document.querySelectorAll('a[href^="#"]');[].forEach.call(e,function(e){e.addEventListener("click",function(t){var o=0;if(e.hash.length>1){var l=parseFloat(getComputedStyle(document.body).getPropertyValue("zoom"));l||(l=1);var n=document.querySelectorAll('[name="'+e.hash.slice(1)+'"]')[0];o=(n.getBoundingClientRect().top+pageYOffset)*l}if("scrollBehavior"in document.documentElement.style)scroll({top:o,left:0,behavior:"smooth"});else if("requestAnimationFrame"in window){var r=pageYOffset,a=null;requestAnimationFrame(function e(t){a||(a=t);var l=t-a;scrollTo(0,r<o?(o-r)*l/400+r:r-(r-o)*l/400),l<400?requestAnimationFrame(e):scrollTo(0,o)})}else scrollTo(0,o);t.preventDefault()},!1)})}();
un3=new Plyr('.un3 video',{iconUrl:'css/plyr.svg',blankUrl: 'css/blank.mp4',controls:['play-large','play','progress','current-time','mute','volume','fullscreen'],storage:{enabled:false}});
un3.volume=0.0;
un3.play();
un4=new Plyr('.un4 video',{iconUrl:'css/plyr.svg',blankUrl: 'css/blank.mp4',controls:['play-large','play','progress','current-time','mute','volume','fullscreen'],storage:{enabled:false}});
un4.volume=0.0;
un4.play();
un5=new Plyr('.un5 video',{iconUrl:'css/plyr.svg',blankUrl: 'css/blank.mp4',controls:['play-large','play','progress','current-time','mute','volume','fullscreen'],storage:{enabled:false}});
un5.volume=0.0;
un5.play();
un6=new Plyr('.un6 video',{iconUrl:'css/plyr.svg',blankUrl: 'css/blank.mp4',controls:['play-large','play','progress','current-time','mute','volume','fullscreen'],storage:{enabled:false}});
un6.volume=0.0;
un6.play();
un7=new Plyr('.un7 video',{iconUrl:'css/plyr.svg',blankUrl: 'css/blank.mp4',controls:['play-large','play','progress','current-time','mute','volume','fullscreen'],storage:{enabled:false}});
un7.volume=0.0;
un7.play();
un8=new Plyr('.un8 video',{iconUrl:'css/plyr.svg',blankUrl: 'css/blank.mp4',controls:['play-large','play','progress','current-time','mute','volume','fullscreen'],storage:{enabled:false}});
un8.volume=0.0;
un8.play();
if(location.hash){var e=location.hash.replace("#",""),o=function(){var t=document.querySelectorAll('[name="'+e+'"]')[0];t&&t.scrollIntoView(),"complete"!=document.readyState&&setTimeout(o,100)};o()}

});