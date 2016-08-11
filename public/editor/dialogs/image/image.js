!function(){var utils=UM.utils,browser=UM.browser,Base={checkURL:function(e){return!!e&&(e=utils.trim(e),!(e.length<=0)&&(0!==e.search(/http:\/\/|https:\/\//)&&(e+="http://"),e=e.replace(/\?[\s\S]*$/,""),!!/(.gif|.jpg|.jpeg|.png)$/i.test(e)&&e))},getAllPic:function(e,i,a){var t=[],o=$(e,i);return $.each(o,function(e,i){return $(i).removeAttr("width").removeAttr("height"),t.push({_src:i.src,src:i.src})}),t},scale:function(e,i,a,t){var o,d=0,s=0,n=e.width||a,l=e.height||t;return(n>i||l>i)&&(n>=l?(d=n-i)&&(o=(d/n).toFixed(2),e.height=l-l*o,e.width=i):(s=l-i)&&(o=(s/l).toFixed(2),e.width=n-n*o,e.height=i)),this},close:function(e){return e.css({top:(e.parent().height()-e.height())/2,left:(e.parent().width()-e.width())/2}).prev().on("click",function(){$(this).parent().remove().hasClass("edui-image-upload-item")&&(Upload.showCount--,Upload.updateView())}),this},createImgBase64:function(e,i,a){if(browser.webkit)e.src=window.webkitURL.createObjectURL(i);else if(browser.gecko)e.src=window.URL.createObjectURL(i);else{var t=new FileReader;t.onload=function(i){e.src=this.result,a.append(e)},t.readAsDataURL(i)}},callback:function(e,i,a,t){if("SUCCESS"==t){Upload.showCount++;var o=$("<img src='"+e.options.imagePath+a+"' class='edui-image-pic' />"),d=$("<div class='edui-image-item edui-image-upload-item'><div class='edui-image-close'></div></div>").append(o);$(".edui-image-upload2",i).length<1?($(".edui-image-content",i).append(d),Upload.render(".edui-image-content",2).config(".edui-image-upload2")):$(".edui-image-upload2",i).before(d).show(),o.on("load",function(){Base.scale(this,120),Base.close($(this)),$(".edui-image-content",i).focus()})}else currentDialog.showTip(t),window.setTimeout(function(){currentDialog.hideTip()},3e3);Upload.toggleMask()}},Upload={showCount:0,uploadTpl:'<div class="edui-image-upload%%"><span class="edui-image-icon"></span><form class="edui-image-form" method="post" enctype="multipart/form-data" target="up"><input style="filter: alpha(opacity=0);" class="edui-image-file" type="file" hidefocus name="upfile" accept="image/gif,image/jpeg,image/png,image/jpg,image/bmp"/></form></div>',init:function(e,i){var a=this;return a.editor=e,a.dialog=i,a.render(".edui-image-local",1),a.config(".edui-image-upload1"),a.submit(),a.drag(),$(".edui-image-upload1").hover(function(){$(".edui-image-icon",this).toggleClass("hover")}),UM.browser.ie&&UM.browser.version<=9||$(".edui-image-dragTip",a.dialog).css("display","block"),a},render:function(e,i){var a=this;return $(e,a.dialog).append($(a.uploadTpl.replace(/%%/g,i))),a},config:function(e){var i=this,a=i.editor.options.imageUrl;return a=a+(a.indexOf("?")==-1?"?":"&")+"editorid="+i.editor.id,$("form",$(e,i.dialog)).attr("action",a),i},uploadComplete:function(r){var me=this;try{var json=eval("("+r+")");Base.callback(me.editor,me.dialog,json.url,json.state)}catch(e){var lang=me.editor.getLang("image");Base.callback(me.editor,me.dialog,"",lang&&lang.uploadError||"Error!")}},submit:function(e){var i=this,a=$('<input style="filter: alpha(opacity=0);" class="edui-image-file" type="file" hidefocus="" name="upfile" accept="image/gif,image/jpeg,image/png,image/jpg,image/bmp">'),a=a[0];return $(i.dialog).delegate(".edui-image-file","change",function(t){this.parentNode&&($('<iframe name="up"  style="display: none"></iframe>').insertBefore(i.dialog).on("load",function(){var e=this.contentWindow.document.body.innerHTML;""!=e&&(i.uploadComplete(e),$(this).unbind("load"),$(this).remove())}),$(this).parent()[0].submit(),Upload.updateInput(a),i.toggleMask("Loading...."),e&&e())}),i},updateInput:function(e){$(".edui-image-file",this.dialog).each(function(i,a){a.parentNode.replaceChild(e.cloneNode(!0),a)})},updateView:function(){0===Upload.showCount&&($(".edui-image-upload2",this.dialog).hide(),$(".edui-image-dragTip",this.dialog).show(),$(".edui-image-upload1",this.dialog).show())},drag:function(){var e=this;UM.browser.ie9below||e.dialog.find(".edui-image-content").on("drop",function(i){var a=i.originalEvent.dataTransfer.files,t=document.createElement("img"),o=!1;$.each(a,function(i,d){if(/^image/.test(d.type)){Base.createImgBase64(t,d,e.dialog);var s=new XMLHttpRequest;s.open("post",e.editor.getOpt("imageUrl")+"?type=ajax",!0),s.setRequestHeader("X-Requested-With","XMLHttpRequest");var n=new FormData;n.append(e.editor.getOpt("imageFieldName"),d),s.send(n),s.addEventListener("load",function(o){var d=o.target.response;e.uploadComplete(d),i==a.length-1&&$(t).remove()}),o=!0}}),o&&(i.preventDefault(),e.toggleMask("Loading...."))}).on("dragover",function(e){e.preventDefault()})},toggleMask:function(e){var i=this,a=$(".edui-image-mask",i.dialog);if(e)UM.browser.ie&&UM.browser.version<=9||$(".edui-image-dragTip",i.dialog).css("display","none"),$(".edui-image-upload1",i.dialog).css("display","none"),a.addClass("edui-active").html(e);else{if(a.removeClass("edui-active").html(),Upload.showCount>0)return i;UM.browser.ie&&UM.browser.version<=9||$(".edui-image-dragTip",i.dialog).css("display","block"),$(".edui-image-upload1",i.dialog).css("display","block")}return i}},NetWork={init:function(e,i){var a=this;a.editor=e,a.dialog=i,a.initEvt()},initEvt:function(){var e,i=this,a=$(".edui-image-searchTxt",i.dialog);$(".edui-image-searchAdd",i.dialog).on("click",function(){e=Base.checkURL(a.val()),e&&$("<img src='"+e+"' class='edui-image-pic' />").on("load",function(){var e=$("<div class='edui-image-item'><div class='edui-image-close'></div></div>").append(this);$(".edui-image-searchRes",i.dialog).append(e),Base.scale(this,120),e.width($(this).width()),Base.close($(this)),a.val("")})}).hover(function(){$(this).toggleClass("hover")})}},$tab=null,currentDialog=null;UM.registerWidget("image",{tpl:'<link rel="stylesheet" type="text/css" href="<%=image_url%>image.css"><div class="edui-image-wrapper"><ul class="edui-tab-nav"><li class="edui-tab-item edui-active"><a data-context=".edui-image-local" class="edui-tab-text"><%=lang_tab_local%></a></li><li  class="edui-tab-item"><a data-context=".edui-image-JimgSearch" class="edui-tab-text"><%=lang_tab_imgSearch%></a></li></ul><div class="edui-tab-content"><div class="edui-image-local edui-tab-pane edui-active"><div class="edui-image-content"></div><div class="edui-image-mask"></div><div class="edui-image-dragTip"><%=lang_input_dragTip%></div></div><div class="edui-image-JimgSearch edui-tab-pane"><div class="edui-image-searchBar"><table><tr><td><input class="edui-image-searchTxt" type="text"></td><td><div class="edui-image-searchAdd"><%=lang_btn_add%></div></td></tr></table></div><div class="edui-image-searchRes"></div></div></div></div>',initContent:function(e,i){var a=e.getLang("image")["static"],t=$.extend({},a,{image_url:UMEDITOR_CONFIG.UMEDITOR_HOME_URL+"dialogs/image/"});if(Upload.showCount=0,a)var o=$.parseTmpl(this.tpl,t);currentDialog=i.edui(),this.root().html(o)},initEvent:function(e,i){$tab=$.eduitab({selector:".edui-image-wrapper"}).edui().on("beforeshow",function(e){e.stopPropagation()}),Upload.init(e,i),NetWork.init(e,i)},buttons:{ok:{exec:function(e,i){var a="",t=$tab.activate();0==t?a=".edui-image-content .edui-image-pic":1==t&&(a=".edui-image-searchRes .edui-image-pic");var o=Base.getAllPic(a,i,e);t!=-1&&e.execCommand("insertimage",o)}},cancel:{}},width:700,height:408},function(e,i,a,t){Base.callback(e,i,a,t)})}();