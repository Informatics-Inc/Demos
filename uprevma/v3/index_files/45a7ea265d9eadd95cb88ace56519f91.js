  jQueryHuraApps_FacebookMessenger = function($){
		var isHMAKMobile=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i);		if(!isHMAKMobile){    var appendCSS  = '';
        appendCSS += '<style>';
        appendCSS += ".fb-livechat,.fb-widget{display:none}.huraaaps-fbmessenger.fb-button,.huraaaps-fbmessenger.fb-close{position:fixed;left:24px;cursor:pointer}.huraaaps-fbmessenger.fb-button{z-index:1;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyOCAxMjgiIGhlaWdodD0iMTI4cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB3aWR0aD0iMTI4cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxyZWN0IGZpbGw9IiMwMDg0RkYiIGhlaWdodD0iMTI4IiB3aWR0aD0iMTI4Ii8+PC9nPjxwYXRoIGQ9Ik02NCwxNy41MzFjLTI1LjQwNSwwLTQ2LDE5LjI1OS00Niw0My4wMTVjMCwxMy41MTUsNi42NjUsMjUuNTc0LDE3LjA4OSwzMy40NnYxNi40NjIgIGwxNS42OTgtOC43MDdjNC4xODYsMS4xNzEsOC42MjEsMS44LDEzLjIxMywxLjhjMjUuNDA1LDAsNDYtMTkuMjU4LDQ2LTQzLjAxNUMxMTAsMzYuNzksODkuNDA1LDE3LjUzMSw2NCwxNy41MzF6IE02OC44NDUsNzUuMjE0ICBMNTYuOTQ3LDYyLjg1NUwzNC4wMzUsNzUuNTI0bDI1LjEyLTI2LjY1N2wxMS44OTgsMTIuMzU5bDIyLjkxLTEyLjY3TDY4Ljg0NSw3NS4yMTR6IiBmaWxsPSIjRkZGRkZGIiBpZD0iQnViYmxlX1NoYXBlIi8+PC9zdmc+) center no-repeat #0084ff;width:60px;height:60px;text-align:center;bottom:90px;border:0;outline:0;border-radius:60px;-webkit-border-radius:60px;-moz-border-radius:60px;-ms-border-radius:60px;-o-border-radius:60px;box-shadow:0 1px 6px rgba(0,0,0,.06),0 2px 32px rgba(0,0,0,.16);-webkit-transition:box-shadow .2s ease;background-size:80%;transition:all .2s ease-in-out}.huraaaps-fbmessenger.fb-button:focus,.huraaaps-fbmessenger.fb-button:hover{transform:scale(1.1);box-shadow:0 2px 8px rgba(0,0,0,.09),0 4px 40px rgba(0,0,0,.24)}.fb-widget{background:#fff;z-index:997;position:fixed;width:360px;height:435px;overflow:hidden;opacity:0;bottom:0;left:24px;border-radius:6px;-o-border-radius:6px;-webkit-border-radius:6px;box-shadow:0 5px 40px rgba(0,0,0,.16);-webkit-box-shadow:0 5px 40px rgba(0,0,0,.16);-moz-box-shadow:0 5px 40px rgba(0,0,0,.16);-o-box-shadow:0 5px 40px rgba(0,0,0,.16)}.fb-credit{text-align:center;margin-top:8px}.fb-credit a{transition:none;color:#bec2c9;font-family:Helvetica,Arial,sans-serif;font-size:12px;text-decoration:none;border:0;font-weight:400}.huraaaps-fbmessenger.fb-overlay{z-index:0;position:fixed;height:100vh;width:100vw;-webkit-transition:opacity .4s,visibility .4s;transition:opacity .4s,visibility .4s;top:0;left:0;background:rgba(0,0,0,.05);display:none}.huraaaps-fbmessenger.fb-close{z-index:4;padding:0 6px;background:#365899;font-weight:700;font-size:11px;color:#fff;margin:8px;border-radius:3px}.huraaaps-fbmessenger.fb-close::after{content:'x';font-family:sans-serif}";
        appendCSS += '</style>';
    $('head').append(appendCSS);
    var appendHTML  = '';
        appendHTML  += '<div class="fb-livechat">';
        appendHTML  += '<div class="huraaaps-fbmessenger fb-overlay"></div>';
        appendHTML  += '<div class="fb-widget">';
        appendHTML  += '<div class="huraaaps-fbmessenger fb-close"></div>';
        appendHTML  += '<div class="fb-page" data-href="https://www.facebook.com/zemezlab" data-tabs="messages" data-width="360" data-height="400" data-small-header="true" data-hide-cover="false" data-show-facepile="false">';
        appendHTML  += '<blockquote cite="https://www.facebook.com/zemezlab" class="fb-xfbml-parse-ignore"> </blockquote>';
        appendHTML  += '</div>';
        appendHTML  += '<div class="fb-credit">';
        appendHTML  += '<a href="https://apps.shopify.com/partners/hura?ref=hura" target="_blank">Facebook Chat Widget by Hura Apps</a>';
        appendHTML  += '</div>';
                appendHTML  += '</div>';
        appendHTML  += '<a href="https://m.me/zemezlab" title="Send us a message on Facebook" class="huraaaps-fbmessenger fb-button"></a>';
        appendHTML  += '</div>';
		$('body').append(appendHTML);
		var t={delay:125,overlay:$(".fb-overlay"),widget:$(".fb-widget"),button:$(".fb-button")};
    setTimeout(function(){$("div.fb-livechat").fadeIn()},8*t.delay),$(".huraaaps-fbmessenger").on("click",function(e){e.preventDefault(),t.overlay.is(":visible")?(t.overlay.fadeOut(t.delay),t.widget.stop().animate({bottom:0,opacity:0},2*t.delay,function(){$(this).hide("slow"),t.button.show()})):t.button.fadeOut("medium",function(){t.widget.stop().show().animate({bottom:"30px",opacity:1},2*t.delay),t.overlay.fadeIn(t.delay)})});

											if (!document.getElementById("fb-root")) {
				  const fbDiv = document.createElement("div");
				  fbDiv.id = "fb-root";
				  document.body.appendChild(fbDiv);
				}
				$.ajaxSetup({ cache: true });
			  $.getScript('https://connect.facebook.net/en_US/sdk.js', function(){
			    FB.init({
			      appId: '364831677646201',
			      version: 'v3.3'
			    });
			    FB.XFBML.parse();
			  });
			
		}	}
  if (window.jQuery === undefined) {
    var jqScriptHFBM = document.createElement('script');
    jqScriptHFBM.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js");
    jqScriptHFBM.setAttribute("type", "text/javascript");

    if (jqScriptHFBM.readyState) {
      jqScriptHFBM.onreadystatechange = function () {
        if (this.readyState == 'loaded' || this.readyState == 'complete') {
          jQueryHuraApps_FacebookMessenger(jQuery.noConflict(true));
        }
      };
    } else {
      jqScriptHFBM.onload = function () {
        jQueryHuraApps_FacebookMessenger(jQuery.noConflict(true));
      };
    }
    var d = document.getElementsByTagName("head")[0] || document.documentElement;
    d.appendChild(jqScriptHFBM);
  } else {
    jQueryHuraApps_FacebookMessenger(jQuery);
  }
