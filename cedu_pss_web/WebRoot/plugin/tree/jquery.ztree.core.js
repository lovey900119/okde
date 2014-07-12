/*
 * JQuery zTree core 3.0 beta
 * http://code.google.com/p/jquerytree/
 *
 * Copyright (c) 2010 Hunter.z (baby666.cn)
 *
 * Licensed same as jquery - MIT License
 * http://www.opensource.org/licenses/mit-license.php
 *
 * email: hunter.z@263.net
 * Date: 2011-09-01
 */
(function(l){var D,E,F,G,H,I,o=[],J=[],q=[],M=0,K={treeId:"",treeObj:null,view:{autoCancelSelected:!0,showLine:!0,showIcon:!0,showTitle:!0,selectedMulti:!0,expandSpeed:"fast",addDiyDom:null,dblClickExpand:!0,fontCss:{}},data:{key:{name:"name",childs:"childs",title:"name"},simpleData:{enable:!1,idKey:"id",pIdKey:"pId",rootPId:null},keep:{parent:!1,leaf:!1}},async:{enable:!1,type:"post",dataType:"text",url:"",autoParam:[],otherParam:[],dataFilter:null},callback:{beforeAsync:null,beforeClick:null,beforeRightClick:null,
beforeMouseDown:null,beforeMouseUp:null,beforeExpand:null,beforeCollapse:null,onAsyncError:null,onAsyncSuccess:null,onNodeCreated:null,onClick:null,onRightClick:null,onMouseDown:null,onMouseUp:null,onExpand:null,onCollapse:null}},r=[function(b){var a=b.treeObj,c=f.event;a.unbind(c.NODECREATED);a.bind(c.NODECREATED,function(a,c,g){k.apply(b.callback.onNodeCreated,[a,c,g])});a.unbind(c.CLICK);a.bind(c.CLICK,function(a,c,g,i){k.apply(b.callback.onClick,[a,c,g,i])});a.unbind(c.EXPAND);a.bind(c.EXPAND,
function(a,c,g){k.apply(b.callback.onExpand,[a,c,g])});a.unbind(c.COLLAPSE);a.bind(c.COLLAPSE,function(a,c,g){k.apply(b.callback.onCollapse,[a,c,g])});a.unbind(c.ASYNC_SUCCESS);a.bind(c.ASYNC_SUCCESS,function(a,c,g,i){k.apply(b.callback.onAsyncSuccess,[a,c,g,i])});a.unbind(c.ASYNC_ERROR);a.bind(c.ASYNC_ERROR,function(a,c,g,i,h,f){k.apply(b.callback.onAsyncError,[a,c,g,i,h,f])})}],p=[function(b){var a=h.getCache(b);a||(a={},h.setCache(b,a));a.nodes=[];a.doms=[]}],v=[function(b,a,c,d,e,g){if(c){var i=
b.data.key.childs;c.level=a;c.tId=b.treeId+"_"+ ++M;c.parentTId=d?d.tId:null;if(c[i]&&c[i].length>0){if(typeof c.open=="string")c.open=k.eqs(c.open,"true");c.open=!!c.open;c.isParent=!0}else{c.open=!1;if(typeof c.isParent=="string")c.isParent=k.eqs(c.isParent,"true");c.isParent=!!c.isParent}c.isFirstNode=e;c.isLastNode=g;c.getParentNode=function(){return h.getNodeCache(b,c.parentTId)};c.getPreNode=function(){return h.getPreNode(b,c)};c.getNextNode=function(){return h.getNextNode(b,c)};c.isAjaxing=
!1;h.fixPIdKeyValue(b,c)}}],w=[function(b){var a=b.target,c=o[b.data.treeId],d="",e=null,g="",i="",j=null,l=null,m=null;if(k.eqs(b.type,"mousedown"))i="mousedown";else if(k.eqs(b.type,"mouseup"))i="mouseup";else if(k.eqs(b.type,"contextmenu"))i="contextmenu";else if(k.eqs(b.type,"click"))if(k.eqs(a.tagName,"button")&&a.blur(),k.eqs(a.tagName,"button")&&a.getAttribute("treeNode"+f.id.SWITCH)!==null)d=a.parentNode.id,g="switchNode";else{if(m=k.getMDom(c,a,[{tagName:"a",attrName:"treeNode"+f.id.A}]))d=
m.parentNode.id,g="clickNode"}else if(k.eqs(b.type,"dblclick")&&(i="dblclick",m=k.getMDom(c,a,[{tagName:"a",attrName:"treeNode"+f.id.A}])))d=m.parentNode.id,g="switchNode";if(i.length>0&&d.length==0&&(m=k.getMDom(c,a,[{tagName:"a",attrName:"treeNode"+f.id.A}])))d=m.parentNode.id;if(d.length>0)switch(e=h.getNodeCache(c,d),g){case "switchNode":k.eqs(b.type,"click")||k.eqs(b.type,"dblclick")&&k.apply(c.view.dblClickExpand,[c.treeId,e],c.view.dblClickExpand)?j=D:g="";break;case "clickNode":j=E}switch(i){case "mousedown":l=
F;break;case "mouseup":l=G;break;case "dblclick":l=H;break;case "contextmenu":l=I}return{stop:!1,node:e,nodeEventType:g,nodeEventCallback:j,treeEventType:i,treeEventCallback:l}}],x=[function(b){var a=h.getRoot(b);a||(a={},h.setRoot(b,a));a.childs=[];a.expandTriggerFlag=!1;a.curSelectedList=[];a.noSelection=!0;a.createdNodes=[]}],y=[],z=[],A=[],B=[],C=[],h={addNodeCache:function(b,a){h.getCache(b).nodes[a.tId]=a},addAfterA:function(b){z.push(b)},addBeforeA:function(b){y.push(b)},addInnerAfterA:function(b){B.push(b)},
addInnerBeforeA:function(b){A.push(b)},addInitBind:function(b){r.push(b)},addInitCache:function(b){p.push(b)},addInitNode:function(b){v.push(b)},addInitProxy:function(b){w.push(b)},addInitRoot:function(b){x.push(b)},addNodesData:function(b,a,c){var d=b.data.key.childs;a[d]||(a[d]=[]);if(a[d].length>0)a[d][a[d].length-1].isLastNode=!1,j.setNodeLineIcos(b,a[d][a[d].length-1]);a.isParent=!0;a[d]=a[d].concat(c)},addSelectedNode:function(b,a){var c=h.getRoot(b);h.isSelectedNode(b,a)||c.curSelectedList.push(a)},
addCreatedNode:function(b,a){(b.callback.onNodeCreated||b.view.addDiyDom)&&h.getRoot(b).createdNodes.push(a)},addZTreeTools:function(b){C.push(b)},exSetting:function(b){l.extend(!0,K,b)},fixPIdKeyValue:function(b,a){b.data.simpleData.enable&&(a[b.data.simpleData.pIdKey]=a.parentTId?a.getParentNode()[b.data.simpleData.idKey]:b.data.simpleData.rootPId)},getAfterA:function(b,a,c){for(var d=0,e=z.length;d<e;d++)z[d].apply(this,arguments)},getBeforeA:function(b,a,c){for(var d=0,e=y.length;d<e;d++)y[d].apply(this,
arguments)},getInnerAfterA:function(b,a,c){for(var d=0,e=B.length;d<e;d++)B[d].apply(this,arguments)},getInnerBeforeA:function(b,a,c){for(var d=0,e=A.length;d<e;d++)A[d].apply(this,arguments)},getCache:function(b){return q[b.treeId]},getNextNode:function(b,a){if(!a)return null;var c=b.data.key.childs,d=a.parentTId?a.getParentNode():h.getRoot(b);if(!a.isLastNode)if(a.isFirstNode)return d[c][1];else for(var e=1,g=d[c].length-1;e<g;e++)if(d[c][e]===a)return d[c][e+1];return null},getNodeByParam:function(b,
a,c,d){if(!a||!c)return null;for(var e=b.data.key.childs,g=0,i=a.length;g<i;g++){if(a[g][c]==d)return a[g];var f=h.getNodeByParam(b,a[g][e],c,d);if(f)return f}return null},getNodeCache:function(b,a){if(!a)return null;var c=q[b.treeId].nodes[a];return c?c:null},getNodes:function(b){return h.getRoot(b)[b.data.key.childs]},getNodesByParam:function(b,a,c,d){if(!a||!c)return[];for(var e=b.data.key.childs,g=[],i=0,f=a.length;i<f;i++)a[i][c]==d&&g.push(a[i]),g=g.concat(h.getNodesByParam(b,a[i][e],c,d));
return g},getNodesByParamFuzzy:function(b,a,c,d){if(!a||!c)return[];for(var e=b.data.key.childs,g=[],i=0,f=a.length;i<f;i++)typeof a[i][c]=="string"&&a[i][c].indexOf(d)>-1&&g.push(a[i]),g=g.concat(h.getNodesByParamFuzzy(b,a[i][e],c,d));return g},getPreNode:function(b,a){if(!a)return null;var c=b.data.key.childs,d=a.parentTId?a.getParentNode():h.getRoot(b);if(!a.isFirstNode)if(a.isLastNode)return d[c][d[c].length-2];else for(var e=1,g=d[c].length-1;e<g;e++)if(d[c][e]===a)return d[c][e-1];return null},
getRoot:function(b){return b?J[b.treeId]:null},getSetting:function(b){return o[b]},getSettings:function(){return o},getZTreeTools:function(b){return(b=this.getRoot(this.getSetting(b)))?b.treeTools:null},initCache:function(b){for(var a=0,c=p.length;a<c;a++)p[a].apply(this,arguments)},initNode:function(b,a,c,d,e,g){for(var i=0,f=v.length;i<f;i++)v[i].apply(this,arguments)},initRoot:function(b){for(var a=0,c=x.length;a<c;a++)x[a].apply(this,arguments)},isSelectedNode:function(b,a){for(var c=h.getRoot(b),
d=0,e=c.curSelectedList.length;d<e;d++)if(a===c.curSelectedList[d])return!0;return!1},removeNodeCache:function(b,a){var c=b.data.key.childs;if(a[c])for(var d=0,e=a[c].length;d<e;d++)arguments.callee(b,a[c][d]);delete h.getCache(b).nodes[a.tId]},removeSelectedNode:function(b,a){for(var c=h.getRoot(b),d=0,e=c.curSelectedList.length;d<e;d++)if(a===c.curSelectedList[d]||!h.getNodeCache(b,c.curSelectedList[d].tId))c.curSelectedList.splice(d,1),d--,e--},setCache:function(b,a){q[b.treeId]=a},setRoot:function(b,
a){J[b.treeId]=a},setZTreeTools:function(b,a){for(var c=0,d=C.length;c<d;c++)C[c].apply(this,arguments)},transformToArrayFormat:function(b,a){if(!a)return[];var c=b.data.key.childs,d=[];if(k.isArray(a))for(var e=0,g=a.length;e<g;e++)d.push(a[e]),a[e][c]&&(d=d.concat(h.transformToArrayFormat(b,a[e][c])));else d.push(a),a[c]&&(d=d.concat(h.transformToArrayFormat(b,a[c])));return d},transformTozTreeFormat:function(b,a){var c,d,e=b.data.simpleData.idKey,g=b.data.simpleData.pIdKey,i=b.data.key.childs;
if(!e||e==""||!a)return[];if(k.isArray(a)){var f=[],h=[];for(c=0,d=a.length;c<d;c++)h[a[c][e]]=a[c];for(c=0,d=a.length;c<d;c++)h[a[c][g]]?(h[a[c][g]][i]||(h[a[c][g]][i]=[]),h[a[c][g]][i].push(a[c])):f.push(a[c]);return f}else return[a]}},m={bindEvent:function(b){for(var a=0,c=r.length;a<c;a++)r[a].apply(this,arguments)},bindTree:function(b){var a={treeId:b.treeId},b=b.treeObj;b.unbind("click",m.proxy);b.bind("click",a,m.proxy);b.unbind("dblclick",m.proxy);b.bind("dblclick",a,m.proxy);b.unbind("mouseover",
m.proxy);b.bind("mouseover",a,m.proxy);b.unbind("mouseout",m.proxy);b.bind("mouseout",a,m.proxy);b.unbind("mousedown",m.proxy);b.bind("mousedown",a,m.proxy);b.unbind("mouseup",m.proxy);b.bind("mouseup",a,m.proxy);b.unbind("contextmenu",m.proxy);b.bind("contextmenu",a,m.proxy)},doProxy:function(b){for(var a=[],c=0,d=w.length;c<d;c++){var e=w[c].apply(this,arguments);a.push(e);if(e.stop)break}return a},proxy:function(b){var a=h.getSetting(b.data.treeId);if(!k.uCanDo(a,b))return!0;for(var c=m.doProxy(b),
d=!0,e=!1,g=0,i=c.length;g<i;g++){var f=c[g];f.nodeEventCallback&&(e=!0,d=f.nodeEventCallback.apply(f,[b,f.node])&&d);f.treeEventCallback&&(e=!0,d=f.treeEventCallback.apply(f,[b,f.node])&&d)}e&&k.noSel(a);return d}};D=function(b,a){var c=o[b.data.treeId];if(a.open){if(k.apply(c.callback.beforeCollapse,[c.treeId,a],!0)==!1)return!0}else if(k.apply(c.callback.beforeExpand,[c.treeId,a],!0)==!1)return!0;h.getRoot(c).expandTriggerFlag=!0;j.switchNode(c,a);return!0};E=function(b,a){var c=o[b.data.treeId],
d=c.view.autoCancelSelected&&b.ctrlKey&&h.isSelectedNode(c,a)?0:c.view.autoCancelSelected&&b.ctrlKey&&c.view.selectedMulti?2:1;if(k.apply(c.callback.beforeClick,[c.treeId,a,d],!0)==!1)return!0;d===0?j.cancelPreSelectedNode(c,a):j.selectNode(c,a,d===2);c.treeObj.trigger(f.event.CLICK,[c.treeId,a,d]);return!0};F=function(b,a){var c=o[b.data.treeId];k.apply(c.callback.beforeMouseDown,[c.treeId,a],!0)&&k.apply(c.callback.onMouseDown,[b,c.treeId,a]);return!0};G=function(b,a){var c=o[b.data.treeId];k.apply(c.callback.beforeMouseUp,
[c.treeId,a],!0)&&k.apply(c.callback.onMouseUp,[b,c.treeId,a]);return!0};H=function(b,a){var c=o[b.data.treeId];k.apply(c.callback.beforeDblClick,[c.treeId,a],!0)&&k.apply(c.callback.onDblClick,[b,c.treeId,a]);return!0};I=function(b,a){var c=o[b.data.treeId];k.apply(c.callback.beforeRightClick,[c.treeId,a],!0)&&k.apply(c.callback.onRightClick,[b,c.treeId,a]);return typeof c.callback.onRightClick!="function"};var k={apply:function(b,a,c){return typeof b=="function"?b.apply(L,a):c},clone:function(b){var a;
if(b instanceof Array){a=[];for(var c=b.length;c--;)a[c]=arguments.callee(b[c]);return a}else if(typeof b=="function")return b;else if(b instanceof Object){a={};for(c in b)a[c]=arguments.callee(b[c]);return a}else return b},eqs:function(b,a){return b.toLowerCase()===a.toLowerCase()},isArray:function(b){return Object.prototype.toString.apply(b)==="[object Array]"},getMDom:function(b,a,c){if(!a)return null;for(;a&&a.id!==b.treeId;){for(var d=0,e=c.length;a.tagName&&d<e;d++)if(k.eqs(a.tagName,c[d].tagName)&&
a.getAttribute(c[d].attrName)!==null)return a;a=a.parentNode}return null},noSel:function(b){if(h.getRoot(b).noSelection)try{window.getSelection?window.getSelection().removeAllRanges():document.selection.empty()}catch(a){}},uCanDo:function(){return!0}},j={addNodes:function(b,a,c,d){if(!b.data.keep.leaf||!a||a.isParent)if(k.isArray(c)||(c=[c]),b.data.simpleData.enable&&(c=h.transformTozTreeFormat(b,c)),a){var e=l("#"+a.tId+f.id.SWITCH),g=l("#"+a.tId+f.id.ICON),i=l("#"+a.tId+f.id.UL);if(!a.open)j.replaceSwitchClass(e,
f.folder.CLOSE),j.replaceIcoClass(a,g,f.folder.CLOSE),a.open=!1,i.css({display:"none"});h.addNodesData(b,a,c);j.createNodes(b,a.level+1,c,a);d||j.expandCollapseParentNode(b,a,!0)}else h.addNodesData(b,h.getRoot(b),c),j.createNodes(b,0,c,null)},appendNodes:function(b,a,c,d,e,g){if(!c)return[];for(var i=[],l=b.data.key.childs,m=b.data.key.name,o=b.data.key.title,s=0,N=c.length;s<N;s++){var n=c[s],u=(d?d:h.getRoot(b))[l].length==c.length&&s==0,t=s==c.length-1;e&&(h.initNode(b,a,n,d,u,t,g),h.addNodeCache(b,
n));u=[];n[l]&&n[l].length>0&&(u=j.appendNodes(b,a+1,n[l],n,e,g&&n.open));if(g){var t=j.makeNodeUrl(b,n),q=j.makeNodeFontCss(b,n),r=[],p;for(p in q)r.push(p,":",q[p],";");i.push("<li id='",n.tId,"' class='level",n.level,"' treenode>","<button type='button' id='",n.tId,f.id.SWITCH,"' title='' class='",j.makeNodeLineClass(b,n),"' treeNode",f.id.SWITCH,"></button>");h.getBeforeA(b,n,i);i.push("<a id='",n.tId,f.id.A,"' class='level",n.level,"' treeNode",f.id.A,' onclick="',n.click||"",'" ',t!=null&&t.length>
0?"href='"+t+"'":""," target='",j.makeNodeTarget(n),"' style='",r.join(""),"'");k.apply(b.view.showTitle,[b.treeId,n],b.view.showTitle)&&i.push("title='",n[o].replace(/'/g,"&#39;"),"'");i.push(">");h.getInnerBeforeA(b,n,i);i.push("<button type='button' id='",n.tId,f.id.ICON,"' title='' treeNode",f.id.ICON," class='",j.makeNodeIcoClass(b,n),"' style='",j.makeNodeIcoStyle(b,n),"'></button><span id='",n.tId,f.id.SPAN,"'>",n[m].replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),"</span>");
h.getInnerAfterA(b,n,i);i.push("</a>");h.getAfterA(b,n,i);n.isParent&&n.open&&j.makeUlHtml(b,n,i,u.join(""));i.push("</li>");h.addCreatedNode(b,n)}}return i},appendParentULDom:function(b,a){var c=[],d=l("#"+a.tId),e=l("#"+a.tId+f.id.UL),g=j.appendNodes(b,a.level+1,a[b.data.key.childs],a,!1,!0);j.makeUlHtml(b,a,c,g.join(""));!d.get(0)&&a.parentTId&&(j.appendParentULDom(b,a.getParentNode()),d=l("#"+a.tId));e.get(0)&&e.remove();d.append(c.join(""));j.createNodeCallback(b)},asyncNode:function(b,a,c,d){var e,
g;if(a&&!a.isParent)return k.apply(d),!1;else if(a&&a.isAjaxing)return!1;else if(k.apply(b.callback.beforeAsync,[b.treeId,a],!0)==!1)return k.apply(d),!1;if(a)a.isAjaxing=!0,l("#"+a.tId+f.id.ICON).attr({style:"","class":"ico_loading"});var i="";for(e=0,g=b.async.autoParam.length;a&&e<g;e++){var h=b.async.autoParam[e].split("="),m=h;h.length>1&&(m=h[1],h=h[0]);i+=(i.length>0?"&":"")+m+"="+a[h]}if(k.isArray(b.asyncParamOther))for(e=0,g=b.asyncParamOther.length;e<g;e+=2)i+=(i.length>0?"&":"")+b.async.otherParam[e]+
"="+b.async.otherParam[e+1];else for(var o in b.async.otherParam)i+=(i.length>0?"&":"")+o+"="+b.async.otherParam[o];l.ajax({type:b.async.type,url:k.apply(b.async.url,[b.treeId,a],b.async.url),data:i,dataType:b.async.dataType,success:function(e){var g=[];try{g=!e||e.length==0?[]:typeof e=="string"?eval("("+e+")"):e}catch(i){}if(a)a.isAjaxing=null;j.setNodeLineIcos(b,a);g&&g!=""?(g=k.apply(b.async.dataFilter,[b.treeId,a,g],g),j.addNodes(b,a,k.clone(g),!!c)):j.addNodes(b,a,[],!!c);b.treeObj.trigger(f.event.ASYNC_SUCCESS,
[b.treeId,a,e]);k.apply(d)},error:function(c,d,e){j.setNodeLineIcos(b,a);if(a)a.isAjaxing=null;b.treeObj.trigger(f.event.ASYNC_ERROR,[b.treeId,a,c,d,e])}});return!0},cancelPreSelectedNode:function(b,a){for(var c=h.getRoot(b).curSelectedList,d=c.length-1;d>=0;d--)if(!a||a===c[d])if(l("#"+c[d].tId+f.id.A).removeClass(f.node.CURSELECTED),j.setNodeName(b,c[d]),a){h.removeSelectedNode(b,a);break}if(!a)h.getRoot(b).curSelectedList=[]},createNodeCallback:function(b){if(b.callback.onNodeCreated||b.view.addDiyDom)for(var a=
h.getRoot(b);a.createdNodes.length>0;){var c=a.createdNodes.shift();k.apply(b.view.addDiyDom,[b.treeId,c]);b.callback.onNodeCreated&&b.treeObj.trigger(f.event.NODECREATED,[b.treeId,c])}},createNodes:function(b,a,c,d){if(c&&c.length!=0){var e=h.getRoot(b),g=b.data.key.childs,g=!d||d.open||!!l("#"+d[g][0].tId).get(0);e.createdNodes=[];a=j.appendNodes(b,a,c,d,!0,g);d?(d=l("#"+d.tId+f.id.UL),d.get(0)&&d.append(a.join(""))):b.treeObj.append(a.join(""));j.createNodeCallback(b)}},expandCollapseNode:function(b,
a,c,d,e){var g=h.getRoot(b),i=b.data.key.childs;if(a){if(g.expandTriggerFlag){var m=e,e=function(){m&&m();a.open?b.treeObj.trigger(f.event.EXPAND,[b.treeId,a]):b.treeObj.trigger(f.event.COLLAPSE,[b.treeId,a])};g.expandTriggerFlag=!1}if(a.open==c)k.apply(e,[]);else{!a.open&&a.isParent&&(!l("#"+a.tId+f.id.UL).get(0)||a[i]&&a[i].length>0&&!l("#"+a[i][0].tId).get(0))&&j.appendParentULDom(b,a);var c=l("#"+a.tId+f.id.UL),g=l("#"+a.tId+f.id.SWITCH),o=l("#"+a.tId+f.id.ICON);a.isParent?(a.open=!a.open,a.iconOpen&&
a.iconClose&&o.attr("style",j.makeNodeIcoStyle(b,a)),a.open?(j.replaceSwitchClass(g,f.folder.OPEN),j.replaceIcoClass(a,o,f.folder.OPEN),d==!1||b.view.expandSpeed==""?(c.show(),k.apply(e,[])):a[i]&&a[i].length>0?c.slideDown(b.view.expandSpeed,e):(c.show(),k.apply(e,[]))):(j.replaceSwitchClass(g,f.folder.CLOSE),j.replaceIcoClass(a,o,f.folder.CLOSE),d==!1||b.view.expandSpeed==""?(c.hide(),k.apply(e,[])):c.slideUp(b.view.expandSpeed,e))):k.apply(e,[])}}else k.apply(e,[])},expandCollapseParentNode:function(b,
a,c,d,e){a&&(a.parentTId?(j.expandCollapseNode(b,a,c,d),a.parentTId&&j.expandCollapseParentNode(b,a.getParentNode(),c,d,e)):j.expandCollapseNode(b,a,c,d,e))},expandCollapseSonNode:function(b,a,c,d,e){var g=h.getRoot(b),i=b.data.key.childs,g=a?a[i]:g[i],i=a?!1:d,f=h.getRoot(b).expandTriggerFlag;h.getRoot(b).expandTriggerFlag=!1;if(g)for(var k=0,l=g.length;k<l;k++)g[k]&&j.expandCollapseSonNode(b,g[k],c,i);h.getRoot(b).expandTriggerFlag=f;j.expandCollapseNode(b,a,c,d,e)},makeNodeFontCss:function(b,a){var c=
k.apply(b.view.fontCss,[b.treeId,a],b.view.fontCss);return c&&typeof c!="function"?c:{}},makeNodeIcoClass:function(b,a){var c=["ico"];a.isAjaxing||(c[0]=(a.iconSkin?a.iconSkin+"_":"")+c[0],a.isParent?c.push(a.open?f.folder.OPEN:f.folder.CLOSE):c.push(f.folder.DOCU));return c.join("_")},makeNodeIcoStyle:function(b,a){var c=[];if(!a.isAjaxing){var d=a.isParent&&a.iconOpen&&a.iconClose?a.open?a.iconOpen:a.iconClose:a.icon;d&&c.push("background:url(",d,") 0 0 no-repeat;");(b.view.showIcon==!1||!k.apply(b.view.showIcon,
[b.treeId,a],!0))&&c.push("width:0px;height:0px;")}return c.join("")},makeNodeLineClass:function(b,a){var c=[];b.view.showLine?a.level==0&&a.isFirstNode&&a.isLastNode?c.push(f.line.ROOT):a.level==0&&a.isFirstNode?c.push(f.line.ROOTS):a.isLastNode?c.push(f.line.BOTTOM):c.push(f.line.CENTER):c.push(f.line.NOLINE);a.isParent?c.push(a.open?f.folder.OPEN:f.folder.CLOSE):c.push(f.folder.DOCU);return"level"+a.level+" switch "+c.join("_")},makeNodeTarget:function(b){return b.target||"_blank"},makeNodeUrl:function(b,
a){return a.url?a.url:null},makeUlHtml:function(b,a,c,d){c.push("<ul id='",a.tId,f.id.UL,"' class='level",a.level," ",j.makeUlLineClass(b,a),"' style='display:",a.open?"block":"none","'>");c.push(d);c.push("</ul>")},makeUlLineClass:function(b,a){return b.view.showLine&&!a.isLastNode?f.line.LINE:""},replaceIcoClass:function(b,a,c){if(a&&!b.isAjaxing&&(b=a.attr("class"),b!=void 0)){b=b.split("_");switch(c){case f.folder.OPEN:case f.folder.CLOSE:case f.folder.DOCU:b[b.length-1]=c}a.attr("class",b.join("_"))}},
replaceSwitchClass:function(b,a){if(b){var c=b.attr("class");if(c!=void 0){c=c.split("_");switch(a){case f.line.ROOT:case f.line.ROOTS:case f.line.CENTER:case f.line.BOTTOM:case f.line.NOLINE:c[0]=a;break;case f.folder.OPEN:case f.folder.CLOSE:case f.folder.DOCU:c[1]=a}b.attr("class",c.join("_"))}}},selectNode:function(b,a,c){c||j.cancelPreSelectedNode(b);l("#"+a.tId+f.id.A).addClass(f.node.CURSELECTED);h.addSelectedNode(b,a)},setNodeFontCss:function(b,a){var c=l("#"+a.tId+f.id.A),d=j.makeNodeFontCss(b,
a);d&&c.css(d)},setNodeLineIcos:function(b,a){if(a){var c=l("#"+a.tId+f.id.SWITCH),d=l("#"+a.tId+f.id.UL),e=l("#"+a.tId+f.id.ICON),g=j.makeUlLineClass(b,a);g.length==0?d.removeClass(f.line.LINE):d.addClass(g);c.attr("class",j.makeNodeLineClass(b,a));e.removeAttr("style");e.attr("style",j.makeNodeIcoStyle(b,a));e.attr("class",j.makeNodeIcoClass(b,a))}},setNodeName:function(b,a){var c=b.data.key.name,d=b.data.key.title,e=l("#"+a.tId+f.id.SPAN);e.empty();e.text(a[c]);k.apply(b.view.showTitle,[b.treeId,
a],b.view.showTitle)&&l("#"+a.tId+f.id.A).attr("title",a[d])},setNodeTarget:function(b){l("#"+b.tId+f.id.A).attr("target",j.makeNodeTarget(b))},setNodeUrl:function(b,a){var c=l("#"+a.tId+f.id.A),d=j.makeNodeUrl(b,a);d==null||d.length==0?c.removeAttr("href"):c.attr("href",d)},switchNode:function(b,a){var c=b.data.key.childs;a.open||a&&a[c]&&a[c].length>0?j.expandCollapseNode(b,a,!a.open):b.async.enable?j.asyncNode(b,a)||j.expandCollapseNode(b,a,!a.open):a&&j.expandCollapseNode(b,a,!a.open)}};l.fn.zTree=
{consts:{event:{NODECREATED:"ztree_nodeCreated",CLICK:"ztree_click",EXPAND:"ztree_expand",COLLAPSE:"ztree_collapse",ASYNC_SUCCESS:"ztree_async_success",ASYNC_ERROR:"ztree_async_error"},id:{A:"_a",ICON:"_ico",SPAN:"_span",SWITCH:"_switch",UL:"_ul"},line:{ROOT:"root",ROOTS:"roots",CENTER:"center",BOTTOM:"bottom",NOLINE:"noline",LINE:"line"},folder:{OPEN:"open",CLOSE:"close",DOCU:"docu"},node:{CURSELECTED:"curSelectedNode"}},_z:{tools:k,view:j,event:m,data:h},getZTreeObj:function(b){return(b=h.getZTreeTools(b))?
b:null},init:function(b,a,c){var d=k.clone(K);l.extend(!0,d,a);d.treeId=b.attr("id");d.treeObj=b;d.treeObj.empty();o[d.treeId]=d;if(l.browser.msie&&parseInt(l.browser.version)<7)d.view.expandSpeed="";h.initRoot(d);b=h.getRoot(d);a=d.data.key.childs;c=c?k.clone(k.isArray(c)?c:[c]):[];b[a]=d.data.simpleData.enable?h.transformTozTreeFormat(d,c):c;h.initCache(d);m.bindTree(d);m.bindEvent(d);b[a]&&b[a].length>0?j.createNodes(d,0,b[a]):d.async.enable&&d.async.url&&d.async.url!==""&&j.asyncNode(d);c={setting:d,
cancelSelectedNode:function(a){j.cancelPreSelectedNode(this.setting,a)},expandAll:function(a){if(a!==!0&&a!==!1){for(var a=null,b=h.getNodes(this.setting),c=0,d=b.length;c<d;c++)if(b[c].isParent){a=!b[c].open;break}if(a==null)return a}j.expandCollapseSonNode(this.setting,null,a,!0);return a},expandNode:function(a,b,c,m){if(!a||!a.isParent)return null;b!==!0&&b!==!1&&(b=!a.open);if(b&&k.apply(d.callback.beforeExpand,[d.treeId,a],!0)==!1)return null;else if(!b&&k.apply(d.callback.beforeCollapse,[d.treeId,
a],!0)==!1)return null;b&&a.parentTId&&j.expandCollapseParentNode(this.setting,a.getParentNode(),b,!1);if(b===a.open&&!c)return null;h.getRoot(d).expandTriggerFlag=!0;c?j.expandCollapseSonNode(this.setting,a,b,!0,function(){m!==!1&&l("#"+a.tId+f.id.ICON).focus().blur()}):(a.open=!b,j.switchNode(this.setting,a),m!==!1&&l("#"+a.tId+f.id.ICON).focus().blur());return b},getNodes:function(){return h.getNodes(this.setting)},getNodeByParam:function(a,b,c){return!a?null:h.getNodeByParam(this.setting,c?c[this.setting.data.key.childs]:
h.getNodes(this.setting),a,b)},getNodeByTId:function(a){return h.getNodeCache(this.setting,a)},getNodesByParam:function(a,b,c){return!a?null:h.getNodesByParam(this.setting,c?c[this.setting.data.key.childs]:h.getNodes(this.setting),a,b)},getNodesByParamFuzzy:function(a,b,c){return!a?null:h.getNodesByParamFuzzy(this.setting,c?c[this.setting.data.key.childs]:h.getNodes(this.setting),a,b)},getNodeIndex:function(a){if(!a)return null;for(var b=d.data.key.childs,c=a.parentTId?a.getParentNode():h.getRoot(this.setting),
f=0,j=c[b].length;f<j;f++)if(c[b][f]==a)return f;return-1},getSelectedNodes:function(){for(var a=[],b=h.getRoot(this.setting).curSelectedList,c=0,d=b.length;c<d;c++)a.push(b[c]);return a},isSelectedNode:function(a){return h.isSelectedNode(this.setting,a)},reAsyncChildNodes:function(a,b,c){if(this.setting.async.enable){var d=!a;d&&(a=h.getRoot(this.setting));b=="refresh"&&(a[this.setting.data.key.childs]=[],d?this.setting.treeObj.empty():l("#"+a.tId+f.id.UL).empty());j.asyncNode(this.setting,d?null:
a,!!c)}},refresh:function(){this.setting.treeObj.empty();var a=h.getRoot(this.setting),b=a[this.setting.data.key.childs];h.initRoot(this.setting);a[this.setting.data.key.childs]=b;h.initCache(this.setting);j.createNodes(this.setting,0,a[this.setting.data.key.childs])},selectNode:function(a,b){a&&k.uCanDo(this.setting)&&(b=d.view.selectedMulti&&b,a.parentTId?j.expandCollapseParentNode(this.setting,a.getParentNode(),!0,!1,function(){l("#"+a.tId+f.id.ICON).focus().blur()}):l("#"+a.tId+f.id.ICON).focus().blur(),
j.selectNode(this.setting,a,b))},transformTozTreeNodes:function(a){return h.transformTozTreeFormat(this.setting,a)},transformToArray:function(a){return h.transformToArrayFormat(this.setting,a)},updateNode:function(a){a&&l("#"+a.tId).get(0)&&k.uCanDo(this.setting)&&(j.setNodeName(this.setting,a),j.setNodeTarget(a),j.setNodeUrl(this.setting,a),j.setNodeLineIcos(this.setting,a),j.setNodeFontCss(this.setting,a))}};b.treeTools=c;h.setZTreeTools(d,c);return c}};var L=l.fn.zTree,f=L.consts})(jQuery);