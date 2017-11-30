!function(){var t={},e=function(e){for(var r=t[e],o=r.deps,a=r.defn,i=o.length,u=new Array(i),f=0;f<i;++f)u[f]=n(o[f]);var s=a.apply(null,u);if(void 0===s)throw"module ["+e+"] returned undefined";r.instance=s},r=function(e,r,n){if("string"!=typeof e)throw"module id must be a string";if(void 0===r)throw"no dependencies for "+e;if(void 0===n)throw"no definition function for "+e;t[e]={deps:r,defn:n,instance:void 0}},n=function(r){var n=t[r];if(void 0===n)throw"module ["+r+"] was undefined";return void 0===n.instance&&e(r),n.instance},o=function(t,e){for(var r=t.length,o=new Array(r),a=0;a<r;++a)o[a]=n(t[a]);e.apply(null,o)};({}).bolt={module:{api:{define:r,require:o,demand:n}}};var a=r,i=function(t,e){a(t,[],function(){return e})};a("1",[],function(){var t=function(e){var r=e,n=function(){return r};return{get:n,set:function(t){r=t},clone:function(){return t(n())}}};return t}),i("6",tinymce.util.Tools.resolve),a("2",["6"],function(t){return t("tinymce.PluginManager")}),i("c",setInterval),a("d",["6"],function(t){return t("tinymce.util.LocalStorage")}),a("a",["6"],function(t){return t("tinymce.util.Tools")}),a("e",[],function(){return{fireRestoreDraft:function(t){return t.fire("RestoreDraft")},fireStoreDraft:function(t){return t.fire("StoreDraft")},fireRemoveDraft:function(t){return t.fire("RemoveDraft")}}}),i("f",document),a("g",[],function(){return{parse:function(t,e){var r={s:1e3,m:6e4};return t=/^(\d+)([ms]?)$/.exec(""+(t||e)),(t[2]?r[t[2]]:1)*parseInt(t,10)}}}),a("b",["f","g"],function(t,e){var r=function(t){return t.getParam("autosave_ask_before_unload",!0)},n=function(e){var r=e.getParam("autosave_prefix","tinymce-autosave-{path}{query}{hash}-{id}-");return r=r.replace(/\{path\}/g,t.location.pathname),r=r.replace(/\{query\}/g,t.location.search),r=r.replace(/\{hash\}/g,t.location.hash),r=r.replace(/\{id\}/g,e.id)};return{shouldAskBeforeUnload:r,getAutoSavePrefix:n,shouldRestoreWhenEmpty:function(t){return t.getParam("autosave_restore_when_empty",!1)},getAutoSaveInterval:function(t){return e.parse(t.settings.autosave_interval,"30s")},getAutoSaveRetention:function(t){return e.parse(t.settings.autosave_retention,"20m")}}}),a("7",["c","d","a","e","b"],function(t,e,r,n,o){var a=function(t,e){var n=t.settings.forced_root_block;return""===(e=r.trim(void 0===e?t.getBody().innerHTML:e))||new RegExp("^<"+n+"[^>]*>((\xa0|&nbsp;|[ \t]|<br[^>]*>)+?|)</"+n+">|<br>$","i").test(e)},i=function(t){var r=parseInt(e.getItem(o.getAutoSavePrefix(t)+"time"),10)||0;return!((new Date).getTime()-r>o.getAutoSaveRetention(t)&&(u(t,!1),1))},u=function(t,r){var a=o.getAutoSavePrefix(t);e.removeItem(a+"draft"),e.removeItem(a+"time"),!1!==r&&n.fireRemoveDraft(t)},f=function(t){var r=o.getAutoSavePrefix(t);!a(t)&&t.isDirty()&&(e.setItem(r+"draft",t.getContent({format:"raw",no_events:!0})),e.setItem(r+"time",(new Date).getTime()),n.fireStoreDraft(t))},s=function(t){var r=o.getAutoSavePrefix(t);i(t)&&(t.setContent(e.getItem(r+"draft"),{format:"raw"}),n.fireRestoreDraft(t))};return{isEmpty:a,hasDraft:i,removeDraft:u,storeDraft:f,restoreDraft:s,startStoreDraft:function(e,r){var n=o.getAutoSaveInterval(e);r.get()||(t(function(){e.removed||f(e)},n),r.set(!0))},restoreLastDraft:function(t){t.undoManager.transact(function(){s(t),u(t)}),t.focus()}}}),a("3",["7"],function(t){var e=function(t,e){return function(){var r=Array.prototype.slice.call(arguments);return t.apply(null,[e].concat(r))}};return{get:function(r){return{hasDraft:e(t.hasDraft,r),storeDraft:e(t.storeDraft,r),restoreDraft:e(t.restoreDraft,r),removeDraft:e(t.removeDraft,r),isEmpty:e(t.isEmpty,r)}}}}),i("8",window),a("9",["6"],function(t){return t("tinymce.EditorManager")}),a("4",["8","9","a","b"],function(t,e,r,n){return e._beforeUnloadHandler=function(){var t;return r.each(e.get(),function(e){e.plugins.autosave&&e.plugins.autosave.storeDraft(),!t&&e.isDirty()&&n.shouldAskBeforeUnload(e)&&(t=e.translate("You have unsaved changes are you sure you want to navigate away?"))}),t},{setup:function(){t.onbeforeunload=e._beforeUnloadHandler}}}),a("5",["7"],function(t){var e=function(e,r){return function(n){var o=n.control;o.disabled(!t.hasDraft(e)),e.on("StoreDraft RestoreDraft RemoveDraft",function(){o.disabled(!t.hasDraft(e))}),t.startStoreDraft(e,r)}};return{register:function(r,n){r.addButton("restoredraft",{title:"Restore last draft",onclick:function(){t.restoreLastDraft(r)},onPostRender:e(r,n)}),r.addMenuItem("restoredraft",{text:"Restore last draft",onclick:function(){t.restoreLastDraft(r)},onPostRender:e(r,n),context:"file"})}}}),a("0",["1","2","3","4","5"],function(t,e,r,n,o){return e.add("autosave",function(e){var a=t(!1);return n.setup(e),o.register(e,a),r.get(e)}),function(){}}),n("0")()}();