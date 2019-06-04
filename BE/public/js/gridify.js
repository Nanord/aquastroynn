/*  GRIDIFY.JS ------------------------------------------------------*
  Author:         Simon Sturgess
                  @dahliacreative
                  simon@dahliacreative.com
                  http://www.dahliacreative.com

  Documentation:  http://www.dahliacreative.com/gridifyjs

  Release date:   29/04/2013
  Version:        v.1.0
  Licensing:      © Copyright 2012 DahliaCreative.
                  Free to use under the GPLv2 license.
                  http://www.gnu.org/licenses/gpl-2.0.html

*--------------------------------------------------------------------*/(function(e){e.fn.extend({gridify:function(t){var n={gridItem:".gridItem",waitForImages:!1,ajaxId:"#page",errorMsg:"The requested content could not be loaded.",initialize:function(){},contentLoaded:function(){}},r="state"in window.history&&window.history.state!==null,i=location.href,s=e.extend(n,t),o=e(s.gridItem),u=e(this),a=0,f=0,l=!0,c=!1;o.not("[href^=http], [href^=https], [href^=#]").on("click",function(t){t.preventDefault();var n=e(this),r=n.attr("href"),s=e(".gridify-active");if(c===!1&&!n.hasClass("gridify-active")){c=!0;s.removeClass("gridify-active");n.addClass("gridify-loading");history.pushState(null,null,r);h.calcPosition(n)}else if(n.hasClass("gridify-active")){n.removeClass("gridify-active");history.pushState(null,null,i);h.closeViewport()}});e(window).resize(function(){if(c!==!0){c=!0;e(".gridify-loading").removeClass("gridify-loading");e(".gridify-active").removeClass("gridify-active");history.pushState(null,null,i);h.closeViewport()}});var h={innit:function(){h.generateGridItems();h.checkViewport();h.browserNav();s.initialize();h.findLink()},checkViewport:function(){var t=e(".gridify-viewport");t.length>0&&(l=!1)},generateGridItems:function(){o.each(function(){if(!e(this).attr("data-gridify-id")){a++;e(this).attr("data-gridify-id",a)}})},browserNav:function(){e(window).bind("popstate",function(){if(!!r||location.href!==i)location.href===i?h.closeViewport():h.findLink();r=!0})},generateViewport:function(){return'<section class="gridify-viewport new" stlye="display: none;"><div class="gridify-content"></div></section>'},generateError:function(){return'<section id="'+s.ajaxId.replace("#","")+'"><p class="error">'+s.errorMsg+"</p></section>"},closeViewport:function(){var t=e(".gridify-viewport");f=0;l=!0;t.slideUp(function(){t.remove()});c=!1},findLink:function(){var t=window.location.pathname,n=e('.gridItem[href="'+t+'"]');if(n.length>0){c=!0;n.addClass("gridify-loading");h.calcPosition(n)}},calcPosition:function(t){var n=e(".gridify-viewport"),r=u.width(),i=t.width(),s=Math.round(r/i),o=parseInt(t.attr("data-gridify-id"),10),a=Math.round((t.offset().left-u.offset().left)/i+1),l=Math.round(o+(s-a)),c;l>f?c="down":c="up";if(l!==f){f=l;n.addClass("old").removeClass("new");e('.gridItem[data-gridify-id="'+l+'"]').after(h.generateViewport())}h.loadContent(t,c)},loadContent:function(t,n){var r=window.location.pathname+" "+s.ajaxId,i=e(".gridify-viewport.new .gridify-content");i.parent().css("height",i.parent().height());i.fadeOut(function(){i.load(r,function(e,r){if(r==="success")s.waitForImages===!0?i.waitForImages(function(){h.displayContent(t,n)}):h.displayContent(t,n);else{i.html(h.generateError());h.displayContent(t,n)}})})},displayContent:function(t,n){var r=e(".gridify-viewport.new .gridify-content"),i=e(".gridify-viewport.old"),o=e(".gridify-viewport.new"),u=e(".gridItem.gridify-loading"),a=0;u.removeClass("gridify-loading").addClass("gridify-active");n==="down"?a=t.offset().top-i.height():a=t.offset().top;if(i.length>0){r.show();e("html, body").animate({scrollTop:a});i.slideUp(function(){i.remove()});o.css("height","auto");o.slideDown(function(){s.contentLoaded(o)})}else if(l===!0){l=!1;r.show();e("html, body").animate({scrollTop:a});o.css("height","auto");o.slideDown(function(){s.contentLoaded(o)})}else{o.animate({height:r.outerHeight(!0)});r.fadeIn(function(){s.contentLoaded(o)})}c=!1}};h.innit()}})})(jQuery);