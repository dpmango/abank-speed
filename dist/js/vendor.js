/*! Typograf | © 2018 Denis Seleznev | MIT License | https://github.com/typograf/typograf/ */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Typograf=t()}(this,function(){"use strict";var e=["a","abbr","acronym","b","bdo","big","br","button","cite","code","dfn","em","i","img","input","kbd","label","map","object","q","samp","script","select","small","span","strong","sub","sup","textarea","time","tt","var"],t=[["iexcl",161],["cent",162],["pound",163],["curren",164],["yen",165],["brvbar",166],["sect",167],["uml",168],["copy",169],["ordf",170],["laquo",171],["not",172],["reg",174],["macr",175],["deg",176],["plusmn",177],["sup2",178],["sup3",179],["acute",180],["micro",181],["para",182],["middot",183],["cedil",184],["sup1",185],["ordm",186],["raquo",187],["frac14",188],["frac12",189],["frac34",190],["iquest",191],["Agrave",192],["Aacute",193],["Acirc",194],["Atilde",195],["Auml",196],["Aring",197],["AElig",198],["Ccedil",199],["Egrave",200],["Eacute",201],["Ecirc",202],["Euml",203],["Igrave",204],["Iacute",205],["Icirc",206],["Iuml",207],["ETH",208],["Ntilde",209],["Ograve",210],["Oacute",211],["Ocirc",212],["Otilde",213],["Ouml",214],["times",215],["Oslash",216],["Ugrave",217],["Uacute",218],["Ucirc",219],["Uuml",220],["Yacute",221],["THORN",222],["szlig",223],["agrave",224],["aacute",225],["acirc",226],["atilde",227],["auml",228],["aring",229],["aelig",230],["ccedil",231],["egrave",232],["eacute",233],["ecirc",234],["euml",235],["igrave",236],["iacute",237],["icirc",238],["iuml",239],["eth",240],["ntilde",241],["ograve",242],["oacute",243],["ocirc",244],["otilde",245],["ouml",246],["divide",247],["oslash",248],["ugrave",249],["uacute",250],["ucirc",251],["uuml",252],["yacute",253],["thorn",254],["yuml",255],["fnof",402],["Alpha",913],["Beta",914],["Gamma",915],["Delta",916],["Epsilon",917],["Zeta",918],["Eta",919],["Theta",920],["Iota",921],["Kappa",922],["Lambda",923],["Mu",924],["Nu",925],["Xi",926],["Omicron",927],["Pi",928],["Rho",929],["Sigma",931],["Tau",932],["Upsilon",933],["Phi",934],["Chi",935],["Psi",936],["Omega",937],["alpha",945],["beta",946],["gamma",947],["delta",948],["epsilon",949],["zeta",950],["eta",951],["theta",952],["iota",953],["kappa",954],["lambda",955],["mu",956],["nu",957],["xi",958],["omicron",959],["pi",960],["rho",961],["sigmaf",962],["sigma",963],["tau",964],["upsilon",965],["phi",966],["chi",967],["psi",968],["omega",969],["thetasym",977],["upsih",978],["piv",982],["bull",8226],["hellip",8230],["prime",8242],["Prime",8243],["oline",8254],["frasl",8260],["weierp",8472],["image",8465],["real",8476],["trade",8482],["alefsym",8501],["larr",8592],["uarr",8593],["rarr",8594],["darr",8595],["harr",8596],["crarr",8629],["lArr",8656],["uArr",8657],["rArr",8658],["dArr",8659],["hArr",8660],["forall",8704],["part",8706],["exist",8707],["empty",8709],["nabla",8711],["isin",8712],["notin",8713],["ni",8715],["prod",8719],["sum",8721],["minus",8722],["lowast",8727],["radic",8730],["prop",8733],["infin",8734],["ang",8736],["and",8743],["or",8744],["cap",8745],["cup",8746],["int",8747],["there4",8756],["sim",8764],["cong",8773],["asymp",8776],["ne",8800],["equiv",8801],["le",8804],["ge",8805],["sub",8834],["sup",8835],["nsub",8836],["sube",8838],["supe",8839],["oplus",8853],["otimes",8855],["perp",8869],["sdot",8901],["lceil",8968],["rceil",8969],["lfloor",8970],["rfloor",8971],["lang",9001],["rang",9002],["spades",9824],["clubs",9827],["hearts",9829],["diams",9830],["loz",9674],["OElig",338],["oelig",339],["Scaron",352],["scaron",353],["Yuml",376],["circ",710],["tilde",732],["ndash",8211],["mdash",8212],["lsquo",8216],["rsquo",8217],["sbquo",8218],["ldquo",8220],["rdquo",8221],["bdquo",8222],["dagger",8224],["Dagger",8225],["permil",8240],["lsaquo",8249],["rsaquo",8250],["euro",8364],["NestedGreaterGreater",8811],["NestedLessLess",8810]],a=[["nbsp",160],["thinsp",8201],["ensp",8194],["emsp",8195],["shy",173],["zwnj",8204],["zwj",8205],["lrm",8206],["rlm",8207]],n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,i=void 0;try{for(var s,u=e[Symbol.iterator]();!(n=(s=u.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(r)throw i}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=new(function(){function e(){r(this,e),this._entities=this._prepareEntities([].concat(t,a)),this._entitiesByName={},this._entitiesByNameEntity={},this._entitiesByDigitEntity={},this._entitiesByUtf={},this._entities.forEach(function(e){this._entitiesByName[e.name]=e,this._entitiesByNameEntity[e.nameEntity]=e,this._entitiesByDigitEntity[e.digitEntity]=e,this._entitiesByUtf[e.utf]=e},this),this._invisibleEntities=this._prepareEntities(a)}return i(e,[{key:"toUtf",value:function(e){var t=this;-1!==e.text.search(/&#/)&&(e.text=this.decHexToUtf(e.text)),-1!==e.text.search(/&[a-z]/i)&&(e.text=e.text.replace(/&[a-z\d]{2,31};/gi,function(e){var a=t._entitiesByNameEntity[e];return a?a.utf:e}))}},{key:"decHexToUtf",value:function(e){return e.replace(/&#(\d{1,6});/gi,function(e,t){return String.fromCharCode(parseInt(t,10))}).replace(/&#x([\da-f]{1,6});/gi,function(e,t){return String.fromCharCode(parseInt(t,16))})}},{key:"restore",value:function(e){var t=e.prefs.htmlEntity,a=t.type,n=this._entities;"name"!==a&&"digit"!==a||((t.onlyInvisible||t.list)&&(n=[],t.onlyInvisible&&(n=n.concat(this._invisibleEntities)),t.list&&(n=n.concat(this._prepareListParam(t.list)))),e.text=this._restoreEntitiesByIndex(e.text,a+"Entity",n))}},{key:"getByUtf",value:function(e,t){var a="";switch(t){case"digit":a=this._entitiesByDigitEntity[e];break;case"name":a=this._entitiesByNameEntity[e];break;default:a=e}return a}},{key:"_prepareEntities",value:function(e){var t=[];return e.forEach(function(e){var a=s(e,2),n=a[0],r=a[1],i=String.fromCharCode(r);t.push({name:n,nameEntity:"&"+n+";",digitEntity:"&#"+r+";",utf:i,reName:new RegExp("&"+n+";","g"),reUtf:new RegExp(i,"g")})},this),t}},{key:"_prepareListParam",value:function(e){var t=[];return e.forEach(function(e){var a=this._entitiesByName[e];a&&t.push(a)},this),t}},{key:"_restoreEntitiesByIndex",value:function(e,t,a){return a.forEach(function(a){e=e.replace(a.reUtf,a[t])}),e}}]),e}()),l=function(){function t(){r(this,t);var e=[["\x3c!--","--\x3e"],["<!ENTITY",">"],["<!DOCTYPE",">"],["<\\?xml","\\?>"],["<!\\[CDATA\\[","\\]\\]>"]];["code","kbd","object","pre","samp","script","style","var"].forEach(function(t){e.push(["<"+t+"(\\s[^>]*?)?>","</"+t+">"])},this),this._tags={own:[],html:e.map(this._prepareRegExp),url:[o._reUrl]},this._groups=["own","html","url"]}return i(t,[{key:"add",value:function(e){this._tags.own.push(this._prepareRegExp(e))}},{key:"show",value:function(e,t){for(var a=o._privateLabel,n=new RegExp(a+"tf\\d+"+a,"g"),r=new RegExp(a+"tf\\d"),i=function(a){return e.safeTags.hidden[t][a]||a},s=0,u=this._tags[t].length;s<u&&(e.text=e.text.replace(n,i),-1!==e.text.search(r));s++);}},{key:"hide",value:function(e,t){e.safeTags=e.safeTags||{hidden:{},i:0},e.safeTags.hidden[t]={};var a=this._pasteLabel.bind(this,e,t);this._tags[t].forEach(function(t){e.text=e.text.replace(this._prepareRegExp(t),a)},this)}},{key:"hideHTMLTags",value:function(e){if(e.isHTML){var t=this._pasteLabel.bind(this,e,"html");e.text=e.text.replace(/<\/?[a-z][^]*?>/gi,t).replace(/&lt;\/?[a-z][^]*?&gt;/gi,t).replace(/&[gl]t;/gi,t)}}},{key:"getPrevLabel",value:function(e,t){for(var a=t-1;a>=0;a--)if(e[a]===o._privateLabel)return e.slice(a,t+1);return!1}},{key:"getNextLabel",value:function(e,t){for(var a=t+1;a<e.length;a++)if(e[a]===o._privateLabel)return e.slice(t,a+1);return!1}},{key:"getTagByLabel",value:function(e,t){var a=!1;return this._groups.some(function(n){var r=e.safeTags.hidden[n][t];return void 0!==r&&(a={group:n,value:r}),a}),a}},{key:"getTagInfo",value:function(t){if(t){var a={group:t.group};switch(t.group){case"html":a.name=t.value.split(/[<\s>]/)[1],a.isInline=e.indexOf(a.name)>-1,a.isClosing=t.value.search(/^<\//)>-1;break;case"url":a.isInline=!0;break;case"own":a.isInline=!1}return a}}},{key:"_pasteLabel",value:function(e,t,a){var n=e.safeTags,r=o._privateLabel+"tf"+n.i+o._privateLabel;return n.hidden[t][r]=a,n.i++,r}},{key:"_prepareRegExp",value:function(e){var t=void 0;if(e instanceof RegExp)t=e;else{var a=s(e,3),n=a[0],r=a[1],i=a[2];void 0===i&&(i="[^]*?"),t=new RegExp(n+i+r,"gi")}return t}}]),t}(),o=function(){function e(t){r(this,e),this._prefs="object"===(void 0===t?"undefined":n(t))?t:{},this._prefs.locale=e._prepareLocale(this._prefs.locale),this._prefs.live=this._prefs.live||!1,this._safeTags=new l,this._settings={},this._enabledRules={},this._innerRulesByQueues={},this._innerRules=[].concat(this._innerRules),this._innerRules.forEach(function(e){var t=e.queue||"default";this._innerRulesByQueues[t]=this._innerRulesByQueues[t]||[],this._innerRulesByQueues[t].push(e)},this),this._rulesByQueues={},this._rules=[].concat(this._rules),this._rules.forEach(function(e){var t=e.queue||"default";this._prepareRule(e),this._rulesByQueues[t]=this._rulesByQueues[t]||[],this._rulesByQueues[t].push(e)},this),this._prefs.disableRule&&this.disableRule(this._prefs.disableRule),this._prefs.enableRule&&this.enableRule(this._prefs.enableRule),this._separatePartsTags=["title","p","h[1-6]","select","legend"]}return i(e,[{key:"execute",value:function(e,t){if(!(e=""+e))return"";var a=this._prepareContext(e);return this._preparePrefs(a,t),this._process(a)}},{key:"_prepareContext",value:function(t){return{text:t,isHTML:this._isHTML(t),prefs:e.deepCopy(this._prefs),getData:function(t){return"char"===t?this.prefs.locale.map(function(a){return e.getData(a+"/"+t)}).join(""):e.getData(this.prefs.locale[0]+"/"+t)}}}},{key:"_preparePrefs",value:function(t,a){a=a||{};for(var n=t.prefs,r=["htmlEntity","lineEnding","processingSeparateParts","ruleFilter"],i=0;i<r.length;i++){var s=r[i];s in a?n[s]=a[s]:s in this._prefs&&(n[s]=this._prefs[s])}n.htmlEntity=n.htmlEntity||{},n.locale=e._prepareLocale(a.locale,this._prefs.locale);var u=n.locale,l=u[0];if(!u.length||!l)throw Error('Not defined the property "locale".');if(!e.hasLocale(l))throw Error('"'+l+'" is not supported locale.')}},{key:"_isHTML",value:function(e){return-1!==e.search(/(<\/?[a-z]|<!|&[lg]t;)/i)}},{key:"_splitBySeparateParts",value:function(t){if(!t.isHTML||!1===t.prefs.processingSeparateParts)return[t.text];var a=[],n=e._privateSeparateLabel,r=new RegExp("<("+this._separatePartsTags.join("|")+")(\\s[^>]*?)?>[^]*?</\\1>","gi"),i=0;return t.text.replace(r,function(e,r,s,u){return i!==u&&a.push((i?n:"")+t.text.slice(i,u)+n),a.push(e),i=u+e.length,e}),a.push(i?n+t.text.slice(i,t.text.length):t.text),a}},{key:"_process",value:function(t){t.text=this._removeCR(t.text),this._executeRules(t,"start"),this._safeTags.hide(t,"own"),this._executeRules(t,"hide-safe-tags-own"),this._safeTags.hide(t,"html"),this._executeRules(t,"hide-safe-tags-html");var a=t.isHTML,n=new RegExp(e._privateSeparateLabel,"g");return t.text=this._splitBySeparateParts(t).map(function(a){return t.text=a,t.isHTML=this._isHTML(a),this._safeTags.hideHTMLTags(t),this._safeTags.hide(t,"url"),this._executeRules(t,"hide-safe-tags-url"),this._executeRules(t,"hide-safe-tags"),e.HtmlEntities.toUtf(t),this._prefs.live&&(t.text=e._replaceNbsp(t.text)),this._executeRules(t,"utf"),this._executeRules(t),e.HtmlEntities.restore(t),this._executeRules(t,"html-entities"),this._safeTags.show(t,"url"),this._executeRules(t,"show-safe-tags-url"),t.text.replace(n,"")},this).join(""),t.isHTML=a,this._safeTags.show(t,"html"),this._executeRules(t,"show-safe-tags-html"),this._safeTags.show(t,"own"),this._executeRules(t,"show-safe-tags-own"),this._executeRules(t,"end"),this._fixLineEnding(t.text,t.prefs.lineEnding)}},{key:"getSetting",value:function(e,t){return this._settings[e]&&this._settings[e][t]}},{key:"setSetting",value:function(e,t,a){return this._settings[e]=this._settings[e]||{},this._settings[e][t]=a,this}},{key:"isEnabledRule",value:function(e){return this._enabledRules[e]}},{key:"isDisabledRule",value:function(e){return!this._enabledRules[e]}},{key:"enableRule",value:function(e){return this._enable(e,!0)}},{key:"disableRule",value:function(e){return this._enable(e,!1)}},{key:"addSafeTag",value:function(e,t,a){var n=e instanceof RegExp?e:[e,t,a];return this._safeTags.add(n),this}},{key:"_executeRules",value:function(e,t){t=t||"default";var a=this._rulesByQueues[t],n=this._innerRulesByQueues[t];n&&n.forEach(function(t){this._ruleIterator(e,t)},this),a&&a.forEach(function(t){this._ruleIterator(e,t)},this)}},{key:"_ruleIterator",value:function(e,t){var a=t._locale,n=this._prefs.live;if(!(!0===n&&!1===t.live||!1===n&&!0===t.live)&&("common"===a||a===e.prefs.locale[0])&&this.isEnabledRule(t.name)){if(e.prefs.ruleFilter&&!e.prefs.ruleFilter(t))return;this._onBeforeRule&&this._onBeforeRule(t.name,e.text,e),e.text=t.handler.call(this,e.text,this._settings[t.name],e),this._onAfterRule&&this._onAfterRule(t.name,e.text,e)}}},{key:"_removeCR",value:function(e){return e.replace(/\r\n?/g,"\n")}},{key:"_fixLineEnding",value:function(e,t){return"CRLF"===t?e.replace(/\n/g,"\r\n"):"CR"===t?e.replace(/\n/g,"\r"):e}},{key:"_prepareRule",value:function(t){var a=t.name,r=n(t.settings),i={};"object"===r?i=e.deepCopy(t.settings):"function"===r&&(i=t.settings(t)),this._settings[a]=i,this._enabledRules[a]=t._enabled}},{key:"_enable",value:function(e,t){return Array.isArray(e)?e.forEach(function(e){this._enableByMask(e,t)},this):this._enableByMask(e,t),this}},{key:"_enableByMask",value:function(e,t){if(e)if(-1!==e.search(/\*/)){var a=new RegExp(e.replace(/\//g,"\\/").replace(/\*/g,".*"));this._rules.forEach(function(e){var n=e.name;a.test(n)&&(this._enabledRules[n]=t)},this)}else this._enabledRules[e]=t}},{key:"_getRule",value:function(e){var t=null;return this._rules.some(function(a){return a.name===e&&(t=a,!0)}),t}}],[{key:"addRule",value:function(e){var t=e.name.split("/"),a=s(t,3),n=a[0],r=a[1],i=a[2];return e._enabled=!0!==e.disabled,e._locale=n,e._group=r,e._name=i,this.addLocale(e._locale),this._setIndex(e),this.prototype._rules.push(e),this._sortRules(this.prototype._rules),this}},{key:"addInnerRule",value:function(e){return this.prototype._innerRules.push(e),e._locale=e.name.split("/")[0],this}},{key:"deepCopy",value:function(e){return"object"===(void 0===e?"undefined":n(e))?JSON.parse(JSON.stringify(e)):e}},{key:"_repeat",value:function(e,t){for(var a="";1==(1&t)&&(a+=e),0!==(t>>>=1);)e+=e;return a}},{key:"_replace",value:function(e,t){for(var a=0;a<t.length;a++)e=e.replace(t[a][0],t[a][1]);return e}},{key:"_replaceNbsp",value:function(e){return e.replace(/\u00A0/g," ")}},{key:"_setIndex",value:function(e){var t=e.index,a=void 0===t?"undefined":n(t),r=this.groupIndexes[e._group];"undefined"===a?t=r:"string"===a&&(t=r+parseInt(e.index,10)),e._index=t}},{key:"_sortRules",value:function(e){e.sort(function(e,t){return e._index>t._index?1:-1})}},{key:"_mix",value:function(e,t){Object.keys(t).forEach(function(a){e[a]=t[a]})}}]),e}();o._mix(o,{version:"6.7.2",inlineElements:e,blockElements:["address","article","aside","blockquote","canvas","dd","div","dl","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","section","table","tfoot","ul","video"],groupIndexes:{symbols:110,space:210,dash:310,punctuation:410,nbsp:510,number:610,money:710,date:810,other:910,optalign:1010,typo:1110,html:1210},HtmlEntities:u,_reUrl:new RegExp("(https?|file|ftp)://([a-zA-Z0-9/+-=%&:_.~?]+[a-zA-Z0-9#+]*)","g"),_privateLabel:"\uf000",_privateSeparateLabel:"\uf001"}),o._mix(o.prototype,{_rules:[],_innerRules:[]}),o._mix(o,{getData:function(e){return this._data[e]},setData:function(e,t){"string"==typeof e?(this.addLocale(e),this._data[e]=t):"object"===(void 0===e?"undefined":n(e))&&Object.keys(e).forEach(function(t){this.addLocale(t),this._data[t]=e[t]},this)},_data:{}}),o._mix(o,{addLocale:function(e){var t=(e||"").split("/")[0];t&&"common"!==t&&!this.hasLocale(t)&&(this._locales.push(t),this._locales.sort())},getLocales:function(){return this._locales},hasLocale:function(e){return"common"===e||-1!==this._locales.indexOf(e)},_prepareLocale:function(e,t){var a=e||t,n=a;return Array.isArray(a)||(n=[a]),n},_locales:[]}),o.setData("be/char","\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u044b\u044c\u044d\u044e\u044f\u0451\u0456\u045e\u0491"),o.setData("be/quote",{left:"\xab\u201c",right:"\xbb\u201d"}),o.setData("bg/char","\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0438\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044a\u044c\u044e\u044f"),o.setData("bg/quote",{left:"\u201e\u2019",right:"\u201c\u2019"}),o.setData("ca/char","abcdefghijlmnopqrstuvxyz\xe0\xe7\xe8\xe9\xed\xef\xf2\xf3\xfa\xfc"),o.setData("ca/quote",{left:"\xab\u201c",right:"\xbb\u201d"}),o.setData("common/char","a-z"),o.setData("common/dash","--?|\u2012|\u2013|\u2014"),o.setData("common/quote",'\xab\u2039\xbb\u203a\u201e\u201c\u201f\u201d"'),o.setData("cs/char","a-z\xe1\xe9\xed\xf3\xfa\xfd\u010d\u010f\u011b\u0148\u0159\u0161\u0165\u016f\u017e"),o.setData("cs/quote",{left:"\u201e\u201a",right:"\u201c\u2018"}),o.setData("da/char","a-z\xe5\xe6\xf8"),o.setData("da/quote",{left:"\xbb\u203a",right:"\xab\u2039"}),o.setData("de/char","a-z\xdf\xe4\xf6\xfc"),o.setData("de/quote",{left:"\u201e\u201a",right:"\u201c\u2018"}),o.setData("el/char","\u0390\u03ac\u03ad\u03ae\u03af\u03b0\u03b1\u03b2\u03b3\u03b4\u03b5\u03b6\u03b7\u03b8\u03b9\u03ba\u03bb\u03bc\u03bd\u03be\u03bf\u03c0\u03c1\u03c2\u03c3\u03c4\u03c5\u03c6\u03c7\u03c8\u03c9\u03ca\u03cb\u03cc\u03cd\u03ce\u03f2\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d"),o.setData("el/quote",{left:"\xab\u201c",right:"\xbb\u201d"}),o.setData("en-GB/char","a-z"),o.setData("en-GB/quote",{left:"\u2018\u201c",right:"\u2019\u201d"}),o.setData("en-US/char","a-z"),o.setData("en-US/quote",{left:"\u201c\u2018",right:"\u201d\u2019"}),o.setData("eo/char","abcdefghijklmnoprstuvz\u0109\u011d\u0125\u0135\u015d\u016d"),o.setData("eo/quote",{left:"\u201c\u2018",right:"\u201d\u2019"}),o.setData("es/char","a-z\xe1\xe9\xed\xf1\xf3\xfa\xfc"),o.setData("es/quote",{left:"\xab\u201c",right:"\xbb\u201d"}),o.setData("et/char","abdefghijklmnoprstuvz\xe4\xf5\xf6\xfc\u0161\u017e"),o.setData("et/quote",{left:"\u201e\xab",right:"\u201c\xbb"}),o.setData("fi/char","abcdefghijklmnopqrstuvy\xf6\xe4\xe5"),o.setData("fi/quote",{left:"\u201d\u2019",right:"\u201d\u2019"}),o.setData("fr/char","a-z\xe0\xe2\xe7\xe8\xe9\xea\xeb\xee\xef\xf4\xfb\xfc\u0153\xe6"),o.setData("fr/quote",{left:"\xab\u2039",right:"\xbb\u203a",spacing:!0}),o.setData("hu/char","a-z\xe1\xe4\xe9\xed\xf3\xf6\xfa\xfc\u0151\u0171"),o.setData("hu/quote",{left:"\u201e\xbb",right:"\u201d\xab"}),o.setData("ga/char","abcdefghilmnoprstuvwxyz\xe1\xe9\xed\xf3\xfa"),o.setData("ga/quote",{left:"\u201c\u2018",right:"\u201d\u2019"}),o.setData("it/char","a-z\xe0\xe9\xe8\xec\xf2\xf9"),o.setData("it/quote",{left:"\xab\u201c",right:"\xbb\u201d"}),o.setData("nl/char","a-z\xe4\xe7\xe8\xe9\xea\xeb\xee\xef\xf1\xf6\xfb\xfc"),o.setData("nl/quote",{left:"\u2018\u201c",right:"\u2019\u201d"}),o.setData("lv/char","abcdefghijklmnopqrstuvxz\xe6\u0153"),o.setData("lv/quote",{left:"\xab\u201e",right:"\xbb\u201c"}),o.setData("pl/char","abcdefghijklmnoprstuvwxyz\xf3\u0105\u0107\u0119\u0142\u0144\u015b\u017a\u017c"),o.setData("pl/quote",{left:"\u201e\xab",right:"\u201d\xbb"}),o.setData("no/char","a-z\xe5\xe6\xe8\xe9\xea\xf2\xf3\xf4\xf8"),o.setData("no/quote",{left:"\xab\u2019",right:"\xbb\u2019"}),o.setData("ro/char","abcdefghijklmnoprstuvxz\xee\u0103\u0219\u021b"),o.setData("ro/quote",{left:"\u201e\xab",right:"\u201d\xbb"}),o.setData("sk/char","abcdefghijklmnoprstuvwxyz\xe1\xe4\xe9\xed\xf3\xf4\xfa\xfd\u010d\u010f\u013e\u0148\u0155\u0161\u0165\u017e"),o.setData("sk/quote",{left:"\u201e\u201a",right:"\u201c\u2018"}),o.setData("ru/char","\u0430-\u044f\u0451"),o.setData({"ru/dashBefore":"(^| |\\n)","ru/dashAfter":"(?=[\xa0 ,.?:!]|$)","ru/dashAfterDe":"(?=[,.?:!]|[\xa0 ][^\u0410-\u042f\u0401]|$)"}),o.setData({"ru/l":"\u0430-\u044f\u0451a-z","ru/L":"\u0410-\u042f\u0401A-Z"}),o.setData({"ru/month":"\u044f\u043d\u0432\u0430\u0440\u044c|\u0444\u0435\u0432\u0440\u0430\u043b\u044c|\u043c\u0430\u0440\u0442|\u0430\u043f\u0440\u0435\u043b\u044c|\u043c\u0430\u0439|\u0438\u044e\u043d\u044c|\u0438\u044e\u043b\u044c|\u0430\u0432\u0433\u0443\u0441\u0442|\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c|\u043e\u043a\u0442\u044f\u0431\u0440\u044c|\u043d\u043e\u044f\u0431\u0440\u044c|\u0434\u0435\u043a\u0430\u0431\u0440\u044c","ru/monthGenCase":"\u044f\u043d\u0432\u0430\u0440\u044f|\u0444\u0435\u0432\u0440\u0430\u043b\u044f|\u043c\u0430\u0440\u0442\u0430|\u0430\u043f\u0440\u0435\u043b\u044f|\u043c\u0430\u044f|\u0438\u044e\u043d\u044f|\u0438\u044e\u043b\u044f|\u0430\u0432\u0433\u0443\u0441\u0442\u0430|\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f|\u043e\u043a\u0442\u044f\u0431\u0440\u044f|\u043d\u043e\u044f\u0431\u0440\u044f|\u0434\u0435\u043a\u0430\u0431\u0440\u044f","ru/monthPreCase":"\u044f\u043d\u0432\u0430\u0440\u0435|\u0444\u0435\u0432\u0440\u0430\u043b\u0435|\u043c\u0430\u0440\u0442\u0435|\u0430\u043f\u0440\u0435\u043b\u0435|\u043c\u0430\u0435|\u0438\u044e\u043d\u0435|\u0438\u044e\u043b\u0435|\u0430\u0432\u0433\u0443\u0441\u0442\u0435|\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u0435|\u043e\u043a\u0442\u044f\u0431\u0440\u0435|\u043d\u043e\u044f\u0431\u0440\u0435|\u0434\u0435\u043a\u0430\u0431\u0440\u0435","ru/shortMonth":"\u044f\u043d\u0432|\u0444\u0435\u0432|\u043c\u0430\u0440|\u0430\u043f\u0440|\u043c\u0430[\u0435\u0439\u044f]|\u0438\u044e\u043d|\u0438\u044e\u043b|\u0430\u0432\u0433|\u0441\u0435\u043d|\u043e\u043a\u0442|\u043d\u043e\u044f|\u0434\u0435\u043a"}),o.setData("ru/quote",{left:"\xab\u201e\u201a",right:"\xbb\u201c\u2018",removeDuplicateQuotes:!0}),o.setData("ru/weekday","\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a|\u0432\u0442\u043e\u0440\u043d\u0438\u043a|\u0441\u0440\u0435\u0434\u0430|\u0447\u0435\u0442\u0432\u0435\u0440\u0433|\u043f\u044f\u0442\u043d\u0438\u0446\u0430|\u0441\u0443\u0431\u0431\u043e\u0442\u0430|\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435"),o.setData("sl/char","a-z\u010d\u0161\u017e"),o.setData("sl/quote",{left:"\u201e\u201a",right:"\u201c\u2018"}),o.setData("sr/char","abcdefghijklmnoprstuvz\u0107\u010d\u0111\u0161\u017e"),o.setData("sr/quote",{left:"\u201e\u2019",right:"\u201d\u2019"}),o.setData("sv/char","a-z\xe4\xe5\xe9\xf6"),o.setData("sv/quote",{left:"\u201d\u2019",right:"\u201d\u2019"}),o.setData("tr/char","abcdefghijklmnoprstuvyz\xe2\xe7\xee\xf6\xfb\xfc\u011f\u0131\u015f"),o.setData("tr/quote",{left:"\u201c\u2018",right:"\u201d\u2019"}),o.setData("uk/char","\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0438\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044c\u044e\u044f\u0454\u0456\u0457\u0491"),o.setData("uk/quote",{left:"\xab\u201e",right:"\xbb\u201c"}),o.addRule({name:"ru/dash/centuries",handler:function(e,t){var a="("+o.getData("common/dash")+")",n=new RegExp("(X|I|V)[ |\xa0]?"+a+"[ |\xa0]?(X|I|V)","g");return e.replace(n,"$1"+t.dash+"$3")},settings:{dash:"\u2013"}}),o.addRule({name:"ru/dash/daysMonth",handler:function(e,t){var a=new RegExp("(^|\\s)([123]?\\d)("+o.getData("common/dash")+")([123]?\\d)[ \xa0]("+o.getData("ru/monthGenCase")+")","g");return e.replace(a,"$1$2"+t.dash+"$4\xa0$5")},settings:{dash:"\u2013"}}),o.addRule({name:"ru/dash/de",handler:function(e){var t=new RegExp("([a-\u044f\u0451]+) \u0434\u0435"+o.getData("ru/dashAfterDe"),"g");return e.replace(t,"$1-\u0434\u0435")},disabled:!0}),o.addRule({name:"ru/dash/decade",handler:function(e,t){var a=new RegExp("(^|\\s)(\\d{3}|\\d)0("+o.getData("common/dash")+")(\\d{3}|\\d)0(-\u0435[ \xa0])(?=\u0433\\.?[ \xa0]?\u0433|\u0433\u043e\u0434)","g");return e.replace(a,"$1$20"+t.dash+"$40$5")},settings:{dash:"\u2013"}}),o.addRule({name:"ru/dash/directSpeech",handler:function(e){var t=o.getData("common/dash"),a=new RegExp('(["\xbb\u2018\u201c,])[ |\xa0]?('+t+")[ |\xa0]","g"),n=new RegExp("(^|"+o._privateLabel+")("+t+")( |\xa0)","gm"),r=new RegExp("([.\u2026?!])[ \xa0]("+t+")[ \xa0]","g");return e.replace(a,"$1\xa0\u2014 ").replace(n,"$1\u2014\xa0").replace(r,"$1 \u2014\xa0")}}),o.addRule({name:"ru/dash/izpod",handler:function(e){var t=new RegExp(o.getData("ru/dashBefore")+"(\u0418|\u0438)\u0437 \u043f\u043e\u0434"+o.getData("ru/dashAfter"),"g");return e.replace(t,"$1$2\u0437-\u043f\u043e\u0434")}}),o.addRule({name:"ru/dash/izza",handler:function(e){var t=new RegExp(o.getData("ru/dashBefore")+"(\u0418|\u0438)\u0437 \u0437\u0430"+o.getData("ru/dashAfter"),"g");return e.replace(t,"$1$2\u0437-\u0437\u0430")}}),o.addRule({name:"ru/dash/ka",handler:function(e){var t=new RegExp("([a-\u044f\u0451]+) \u043a\u0430(\u0441\u044c)?"+o.getData("ru/dashAfter"),"g");return e.replace(t,"$1-\u043a\u0430$2")}}),o.addRule({name:"ru/dash/koe",handler:function(e){var t=new RegExp(o.getData("ru/dashBefore")+"([\u041a\u043a]\u043e[\u0435\u0439])\\s([\u0430-\u044f\u0451]{3,})"+o.getData("ru/dashAfter"),"g");return e.replace(t,"$1$2-$3")}}),o.addRule({name:"ru/dash/main",index:"-5",handler:function(e){var t=o.getData("common/dash"),a=new RegExp("([ \xa0])("+t+")([ \xa0\\n])","g");return e.replace(a,"\xa0\u2014$3")}}),o.addRule({name:"ru/dash/month",handler:function(e,t){var a="("+o.getData("ru/month")+")",n="("+o.getData("ru/monthPreCase")+")",r=o.getData("common/dash"),i=new RegExp(a+" ?("+r+") ?"+a,"gi"),s=new RegExp(n+" ?("+r+") ?"+n,"gi"),u="$1"+t.dash+"$3";return e.replace(i,u).replace(s,u)},settings:{dash:"\u2013"}}),o.addRule({name:"ru/dash/surname",handler:function(e){var t=new RegExp("([\u0410-\u042f\u0401][\u0430-\u044f\u0451]+)\\s-([\u0430-\u044f\u0451]{1,3})(?![^\u0430-\u044f\u0451]|$)","g");return e.replace(t,"$1\xa0\u2014$2")}}),o.addRule({name:"ru/dash/taki",handler:function(e){var t=new RegExp("(\u0432\u0435\u0440\u043d\u043e|\u0434\u043e\u0432\u043e\u043b\u044c\u043d\u043e|\u043e\u043f\u044f\u0442\u044c|\u043f\u0440\u044f\u043c\u043e|\u0442\u0430\u043a|\u0432\u0441[\u0435\u0451]|\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e|\u043d\u0435\u0443\u0436\u0435\u043b\u0438)\\s(\u0442\u0430\u043a\u0438)"+o.getData("ru/dashAfter"),"g");return e.replace(t,"$1-$2")}}),o.addRule({name:"ru/dash/time",handler:function(e,t){var a=new RegExp(o.getData("ru/dashBefore")+"(\\d?\\d:[0-5]\\d)"+o.getData("common/dash")+"(\\d?\\d:[0-5]\\d)"+o.getData("ru/dashAfter"),"g");return e.replace(a,"$1$2"+t.dash+"$3")},settings:{dash:"\u2013"}}),o.addRule({name:"ru/dash/to",handler:function(e){var t=new RegExp("("+["\u043e\u0442\u043a\u0443\u0434\u0430","\u043a\u0443\u0434\u0430","\u0433\u0434\u0435","\u043a\u043e\u0433\u0434\u0430","\u0437\u0430\u0447\u0435\u043c","\u043f\u043e\u0447\u0435\u043c\u0443","\u043a\u0430\u043a","\u043a\u0430\u043a\u043e[\u0435\u0439\u043c]","\u043a\u0430\u043a\u0430\u044f","\u043a\u0430\u043a\u0438[\u0435\u043c\u0445]","\u043a\u0430\u043a\u0438\u043c\u0438","\u043a\u0430\u043a\u0443\u044e","\u0447\u0442\u043e","\u0447\u0435\u0433\u043e","\u0447\u0435[\u0439\u043c]","\u0447\u044c\u0438\u043c?","\u043a\u0442\u043e","\u043a\u043e\u0433\u043e","\u043a\u043e\u043c\u0443","\u043a\u0435\u043c"].join("|")+")( | -|- )(\u0442\u043e|\u043b\u0438\u0431\u043e|\u043d\u0438\u0431\u0443\u0434\u044c)"+o.getData("ru/dashAfter"),"gi");return e.replace(t,"$1-$3")}}),o.addRule({name:"ru/dash/weekday",handler:function(e,t){var a="("+o.getData("ru/weekday")+")",n=new RegExp(a+" ?("+o.getData("common/dash")+") ?"+a,"gi");return e.replace(n,"$1"+t.dash+"$3")},settings:{dash:"\u2013"}}),o.addRule({name:"ru/dash/years",handler:function(e,t){var a=o.getData("common/dash"),n=new RegExp("(\\D|^)(\\d{4})[ \xa0]?("+a+")[ \xa0]?(\\d{4})(?=[ \xa0]?\u0433)","g");return e.replace(n,function(e,a,n,r,i){return parseInt(n,10)<parseInt(i,10)?a+n+t.dash+i:e})},settings:{dash:"\u2013"}}),o.addRule({name:"ru/date/fromISO",handler:function(e){var t=new RegExp("(^|\\D)(\\d{4})(-|\\.|\\/)(\\d{2})(-|\\.|\\/)(\\d{2})(\\D|$)","gi"),a=new RegExp("(^|\\D)(\\d{2})(-|\\/)(\\d{2})(-|\\/)(\\d{4})(\\D|$)","gi");return e.replace(t,"$1$6.$4.$2$7").replace(a,"$1$4.$2.$6$7")}}),o.addRule({name:"ru/date/weekday",handler:function(e){var t=o.getData("ru/monthGenCase"),a=o.getData("ru/weekday"),n=new RegExp("(\\d)( |\xa0)("+t+"),( |\xa0)("+a+")","gi");return e.replace(n,function(){var e=arguments;return e[1]+e[2]+e[3].toLowerCase()+","+e[4]+e[5].toLowerCase()})}}),o.addRule({name:"ru/money/currency",handler:function(e){var t=new RegExp("(^|[\\D]{2})([$\u20ac\xa5\u04b0\xa3\u20a4\u20bd]) ?([\\d.,]+([ \xa0\u2009\u202f]\\d{3})*)([ \xa0\u2009\u202f]?(\u0442\u044b\u0441\\.|\u043c\u043b\u043d|\u043c\u043b\u0440\u0434|\u0442\u0440\u043b\u043d))?","gm"),a=new RegExp("(^|[\\D])([\\d.,]+) ?([$\u20ac\xa5\u04b0\xa3\u20a4\u20bd])","gm");return e.replace(t,function(e,t,a,n,r,i,s){return t+n+(s?"\xa0"+s:"")+"\xa0"+a}).replace(a,"$1$2\xa0$3")},disabled:!0}),o.addRule({name:"ru/money/ruble",handler:function(e){var t="(\\d+)( |\xa0)?(\u0440|\u0440\u0443\u0431)\\.",a=new RegExp("^"+t+"$","g"),n=new RegExp(t+"(?=[!?,:;])","g"),r=new RegExp(t+"(?=\\s+[A-\u042f\u0401])","g");return e.replace(a,"$1\xa0\u20bd").replace(n,"$1\xa0\u20bd").replace(r,"$1\xa0\u20bd.")},disabled:!0}),o.addRule({name:"ru/number/comma",handler:function(e){return e.replace(/(^|\s)(\d+)\.(\d+[\u00A0\u2009\u202F ]*?[%\u2030\xb0\xd7x])/gim,"$1$2,$3")}}),o.addRule({name:"ru/number/ordinals",handler:function(e,t,a){var n=new RegExp("(\\d[%\u2030]?)-(\u044b\u0439|\u043e\u0439|\u0430\u044f|\u043e\u0435|\u044b\u0435|\u044b\u043c|\u043e\u043c|\u044b\u0445|\u043e\u0433\u043e|\u043e\u043c\u0443|\u044b\u043c\u0438)(?!["+a.getData("char")+"])","g");return e.replace(n,function(e,t,a){return t+"-"+{"\u043e\u0439":"\u0439","\u044b\u0439":"\u0439","\u0430\u044f":"\u044f","\u043e\u0435":"\u0435","\u044b\u0435":"\u0435","\u044b\u043c":"\u043c","\u043e\u043c":"\u043c","\u044b\u0445":"\u0445","\u043e\u0433\u043e":"\u0433\u043e","\u043e\u043c\u0443":"\u043c\u0443","\u044b\u043c\u0438":"\u043c\u0438"}[a]})}}),o.addRule({name:"ru/nbsp/abbr",handler:function(e){function t(e,t,a,n){return["\u0440\u0444","\u0440\u0443","\u0440\u0443\u0441","\u043e\u0440\u0433","\u0443\u043a\u0440","\u0431\u0433","\u0441\u0440\u0431"].indexOf(n)>-1?e:t+a+".\xa0"+n+"."}var a=new RegExp("(^|\\s|"+o._privateLabel+")([\u0430-\u044f\u0451]{1,3})\\. ?([\u0430-\u044f\u0451]{1,3})\\.","g");return e.replace(a,t).replace(a,t)}}),o.addRule({name:"ru/nbsp/addr",handler:function(e){return e.replace(/(\s|^)(\u0434\u043e\u043c|\u0434\.|\u043a\u0432\.|\u043f\u043e\u0434\.|\u043f-\u0434) *(\d+)/gi,"$1$2\xa0$3").replace(/(\s|^)(\u043c\u043a\u0440-\u043d|\u043c\u043a-\u043d|\u043c\u043a\u0440\.|\u043c\u043a\u0440\u043d)\s/gi,"$1$2\xa0").replace(/(\s|^)(\u044d\u0442\.) *(-?\d+)/gi,"$1$2\xa0$3").replace(/(\s|^)(\d+) +\u044d\u0442\u0430\u0436([^\u0430-\u044f\u0451]|$)/gi,"$1$2\xa0\u044d\u0442\u0430\u0436$3").replace(/(\s|^)\u043b\u0438\u0442\u0435\u0440\s([\u0410-\u042f]|$)/gi,"$1\u043b\u0438\u0442\u0435\u0440\xa0$2").replace(/(\s|^)(\u043e\u0431\u043b|\u043a\u0440|\u0441\u0442|\u043f\u043e\u0441|\u0441|\u0434|\u0443\u043b|\u043f\u0435\u0440|\u043f\u0440|\u043f\u0440-\u0442|\u043f\u0440\u043e\u0441\u043f|\u043f\u043b|\u0431\u0443\u043b|\u0431-\u0440|\u043d\u0430\u0431|\u0448|\u0442\u0443\u043f|\u043e\u0444|\u043a\u043e\u043c\u043d?|\u0443\u0447|\u0432\u043b|\u0432\u043b\u0430\u0434|\u0441\u0442\u0440|\u043a\u043e\u0440)\. *([\u0430-\u044f\u0451a-z\d]+)/gi,"$1$2.\xa0$3").replace(/(\D[ \u00A0]|^)\u0433\. ?([\u0410-\u042f\u0401])/gm,"$1\u0433.\xa0$2")}}),o.addRule({name:"ru/nbsp/afterNumberSign",handler:function(e){return e.replace(/\u2116[ \u00A0\u2009]?(\d|\u043f\/\u043f)/g,"\u2116\u202f$1")}}),o.addRule({name:"ru/nbsp/beforeParticle",index:"+5",handler:function(e){var t="(\u043b\u0438|\u043b\u044c|\u0436\u0435|\u0436|\u0431\u044b|\u0431)",a=new RegExp("([\u0410-\u042f\u0401\u0430-\u044f\u0451]) "+t+'(?=[,;:?!"\u2018\u201c\xbb])',"g"),n=new RegExp("([\u0410-\u042f\u0401\u0430-\u044f\u0451])[ \xa0]"+t+"[ \xa0]","g");return e.replace(a,"$1\xa0$2").replace(n,"$1\xa0$2 ")}}),o.addRule({name:"ru/nbsp/centuries",handler:function(e){var t=o.getData("common/dash"),a="(^|\\s)([VIX]+)",n='(?=[,;:?!"\u2018\u201c\xbb]|$)',r=new RegExp(a+"[ \xa0]?\u0432\\.?"+n,"gm"),i=new RegExp(a+"("+t+")([VIX]+)[ \xa0]?\u0432\\.?([ \xa0]?\u0432\\.?)?"+n,"gm");return e.replace(r,"$1$2\xa0\u0432.").replace(i,"$1$2$3$4\xa0\u0432\u0432.")}}),o.addRule({name:"ru/nbsp/dayMonth",handler:function(e){var t=new RegExp("(\\d{1,2}) ("+o.getData("ru/shortMonth")+")","gi");return e.replace(t,"$1\xa0$2")}}),o.addRule({name:"ru/nbsp/groupNumbers",handler:function(e){return e.replace(/(^ ?|\D )(\d{1,3}([ \u00A0\u202F\u2009]\d{3})+)(?! ?[\d-])/gm,function(e,t,a){return t+a.replace(/\s/g,"\u202f")})}}),o.addRule({name:"ru/nbsp/initials",handler:function(e){var t=o.getData("ru/quote"),a=new RegExp("(^|[\xa0\u202f "+t.left+o._privateLabel+'"])([\u0410-\u042f\u0401])\\.[\xa0\u202f ]?([\u0410-\u042f\u0401])\\.[\xa0\u202f ]?([\u0410-\u042f\u0401][\u0430-\u044f\u0451]+)(?=[\\s.,;:?!"'+t.right+"]|$)","gm");return e.replace(a,"$1$2.\xa0$3.\xa0$4")}}),o.addRule({name:"ru/nbsp/m",index:"+5",handler:function(e){var t=o._privateLabel,a=new RegExp("(^|[\\s,."+t+"])(\\d+)[ \xa0]?(\u043c\u043c?|\u0441\u043c|\u043a\u043c|\u0434\u043c|\u0433\u043c|mm?|km|cm|dm)([23\xb2\xb3])?([\\s.!?,;"+t+"]|$)","gm");return e.replace(a,function(e,t,a,n,r,i){return t+a+"\xa0"+n+{2:"\xb2","\xb2":"\xb2",3:"\xb3","\xb3":"\xb3","":""}[r||""]+("\xa0"===i?" ":i)})}}),o.addRule({name:"ru/nbsp/mln",handler:function(e){return e.replace(/(\d) ?(\u0442\u044b\u0441|\u043c\u043b\u043d|\u043c\u043b\u0440\u0434|\u0442\u0440\u043b\u043d)(\.|\s|$)/gi,"$1\xa0$2$3")}}),o.addRule({name:"ru/nbsp/ooo",handler:function(e){return e.replace(/(^|[^a-\u044f\u0451A-\u042f\u0401])(\u041e\u041e\u041e|\u041e\u0410\u041e|\u0417\u0410\u041e|\u041d\u0418\u0418|\u041f\u0411\u041e\u042e\u041b) /g,"$1$2\xa0")}}),o.addRule({name:"ru/nbsp/page",handler:function(e){var t=new RegExp("(^|[)\\s"+o._privateLabel+"])(\u0441\u0442\u0440|\u0433\u043b|\u0440\u0438\u0441|\u0438\u043b\u043b?|\u0441\u0442|\u043f|c)\\. *(\\d+)([\\s.,?!;:]|$)","gim");return e.replace(t,"$1$2.\xa0$3$4")}}),o.addRule({name:"ru/nbsp/ps",handler:function(e){var t=new RegExp("(^|\\s|"+o._privateLabel+")[p\u0437]\\.[ \xa0]?([p\u0437]\\.[ \xa0]?)?[s\u044b]\\.:? ","gim");return e.replace(t,function(e,t,a){return t+(a?"P.\xa0P.\xa0S. ":"P.\xa0S. ")})}}),o.addRule({name:"ru/nbsp/rubleKopek",handler:function(e){return e.replace(/(\d) ?(?=(\u0440\u0443\u0431|\u043a\u043e\u043f)\.)/g,"$1\xa0")}}),o.addRule({name:"ru/nbsp/see",handler:function(e){var t=new RegExp("(^|\\s|"+o._privateLabel+"|\\()(\u0441\u043c|\u0438\u043c)\\.[ \xa0]?([\u0430-\u044f\u04510-9a-z]+)([\\s.,?!]|$)","gi");return e.replace(t,function(e,t,a,n,r){return("\xa0"===t?" ":t)+a+".\xa0"+n+r})}}),o.addRule({name:"ru/nbsp/year",handler:function(e){return e.replace(/(^|\D)(\d{4}) ?\u0433([ ,;.\n]|$)/g,"$1$2\xa0\u0433$3")}}),o.addRule({name:"ru/nbsp/years",index:"+5",handler:function(e){var t=o.getData("common/dash"),a=new RegExp("(^|\\D)(\\d{4})("+t+')(\\d{4})[ \xa0]?\u0433\\.?([ \xa0]?\u0433\\.)?(?=[,;:?!"\u2018\u201c\xbb\\s]|$)',"gm");return e.replace(a,"$1$2$3$4\xa0\u0433\u0433.")}}),o.addRule({name:"ru/other/accent",handler:function(e){return e.replace(/([\u0430-\u044f\u0451])([\u0410\u0415\u0401\u0418\u041e\u0423\u042b\u042d\u042e\u042f])([^\u0410-\u042f\u0401\w]|$)/g,function(e,t,a,n){return t+a.toLowerCase()+"\u0301"+n})},disabled:!0}),function(){function e(e){var a=e[0],l="",o=void 0,c=void 0;if(e.length<8)return t(e);if(e.length>10)if("+"===a){if(e[1]!==r)return e;o=!0,e=e.substr(2)}else"8"===a&&(c=!0,e=e.substr(1));for(var d=s;d>=u;d--){var p=+e.substr(0,d);if(i.indexOf(p)>-1){l=e.substr(0,d),e=e.substr(d);break}}return l||(l=e.substr(0,n),e=e.substr(n)),(o?"+"+r+"\xa0":"")+(c?"8\xa0":"")+function(e){var t=+e,a=e.length,n=[e],r=!1;if(a>3)switch(a){case 4:n=[e.substr(0,2),e.substr(2,2)];break;case 5:n=[e.substr(0,3),e.substr(3,3)];break;case 6:n=[e.substr(0,2),e.substr(2,2),e.substr(4,2)]}else r=t>900&&t<=999||495===t||499===t;return n=n.join("-"),r?n:"("+n+")"}(l)+"\xa0"+t(e)}function t(e){var t="";return e.length%2&&(t=e[0],t+=e.length<=5?"-":"",e=e.substr(1,e.length-1)),t+e.split(/(?=(?:\d\d)+$)/).join("-")}function a(e){return e.replace(/[^\d+]/g,"")}var n=5,r="7",i=[],s=8,u=2;[4162,416332,8512,851111,4722,4725,391379,8442,4732,4152,4154451,4154459,4154455,41544513,8142,8332,8612,8622,3525,812,8342,8152,3812,4862,3422,342633,8112,9142,8452,3432,3434,3435,4812,3919,8432,8439,3822,4872,3412,3511,3512,3022,4112,4852,4855,3852,3854,8182,818,90,3472,4741,4764,4832,4922,8172,8202,8722,4932,493,3952,3951,3953,411533,4842,3842,3843,8212,4942,3912,4712,4742,8362,495,499,4966,4964,4967,498,8312,8313,3832,383612,3532,8412,4232,423370,423630,8632,8642,8482,4242,8672,8652,4752,4822,482502,4826300,3452,8422,4212,3466,3462,8712,8352,"901-934","936-939","950-953",958,"960-969","977-989","991-997",999].forEach(function(e){if("string"==typeof e)for(var t=e.split("-"),a=+t[0];a<=+t[1];a++)i.push(a);else i.push(e)}),o.addRule({name:"ru/other/phone-number",live:!1,handler:function(t){var n=o._privateLabel,r=new RegExp("(^|,| |"+n+")(\\+7[\\d\\(\\) \xa0-]{10,18})(?=,|;|"+n+"|$)","gm");return t.replace(r,function(t,n,r){var i=a(r);return 12===i.length?n+e(i):t}).replace(/(^|[^\u0430-\u044f\u0451])([\u260e\u260f\u2706\ud83d\udce0\ud83d\udcde\ud83d\udcf1]|\u0442\.|\u0442\u0435\u043b\.|\u0444\.|\u043c\u043e\u0431\.|\u0444\u0430\u043a\u0441|\u0441\u043e\u0442\u043e\u0432\u044b\u0439|\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439|\u0442\u0435\u043b\u0435\u0444\u043e\u043d)(:?\s*?)([+\d(][\d \u00A0\-()]{3,}\d)/gi,function(t,n,r,i,s){var u=a(s);return u.length>=5?n+r+i+e(u):t})}})}(),function(){var e=["typograf-oa-lbracket","typograf-oa-n-lbracket","typograf-oa-sp-lbracket"],t="ru/optalign/bracket";o.addRule({name:t,handler:function(e){return e.replace(/( |\u00A0)\(/g,'<span class="typograf-oa-sp-lbracket">$1</span><span class="typograf-oa-lbracket">(</span>').replace(/^\(/gm,'<span class="typograf-oa-n-lbracket">(</span>')},disabled:!0,htmlAttrs:!1}).addInnerRule({name:t,queue:"start",handler:function(t){return o._removeOptAlignTags(t,e)}}).addInnerRule({name:t,queue:"end",handler:function(t){return o._removeOptAlignTagsFromTitle(t,e)}})}(),function(){var e=["typograf-oa-comma","typograf-oa-comma-sp"],t="ru/optalign/comma";o.addRule({name:t,handler:function(e,t,a){var n=new RegExp("(["+a.getData("char")+"\\d\u0301]+), ","gi");return e.replace(n,'$1<span class="typograf-oa-comma">,</span><span class="typograf-oa-comma-sp"> </span>')},disabled:!0,htmlAttrs:!1}).addInnerRule({name:t,queue:"start",handler:function(t){return o._removeOptAlignTags(t,e)}}).addInnerRule({name:t,queue:"end",handler:function(t){return o._removeOptAlignTagsFromTitle(t,e)}})}(),o._removeOptAlignTags=function(e,t){var a=new RegExp('<span class="('+t.join("|")+')">([^]*?)</span>',"g");return e.replace(a,"$2")},o._removeOptAlignTagsFromTitle=function(e,t){return e.replace(/<title>[^]*?<\/title>/i,function(e){return o._removeOptAlignTags(e,t)})},function(){var e=["typograf-oa-lquote","typograf-oa-n-lquote","typograf-oa-sp-lquote"],t="ru/optalign/quote";o.addRule({name:t,handler:function(e){var t=this.getSetting("common/punctuation/quote","ru"),a="(["+t.left[0]+(t.left[1]||"")+"])",n=new RegExp("(^|\n\n|"+o._privateLabel+")("+a+")","g"),r=new RegExp("([^\n"+o._privateLabel+"])([ \xa0\n])("+a+")","gi");return e.replace(n,'$1<span class="typograf-oa-n-lquote">$2</span>').replace(r,'$1<span class="typograf-oa-sp-lquote">$2</span><span class="typograf-oa-lquote">$3</span>')},disabled:!0,htmlAttrs:!1}).addInnerRule({name:t,queue:"start",handler:function(t){return o._removeOptAlignTags(t,e)}}).addInnerRule({name:t,queue:"end",handler:function(t){return o._removeOptAlignTagsFromTitle(t,e)}})}(),o.addRule({name:"ru/punctuation/ano",handler:function(e){var t=new RegExp("([^!?,:;\\-\u2012\u2013\u2014\\s])(\\s+)(\u0430|\u043d\u043e)(?= |\xa0|\\n)","g");return e.replace(t,"$1,$2$3")},queue:"hide-safe-tags-html"}),o.addRule({name:"ru/punctuation/exclamation",live:!1,handler:function(e){return e.replace(/(^|[^!])!{2}($|[^!])/gm,"$1!$2").replace(/(^|[^!])!{4}($|[^!])/gm,"$1!!!$2")}}),o.addRule({name:"ru/punctuation/exclamationQuestion",index:"+5",handler:function(e){var t=new RegExp("(^|[^!])!\\?([^?]|$)","g");return e.replace(t,"$1?!$2")}}),o.addRule({name:"ru/punctuation/hellipQuestion",handler:function(e){return e.replace(/(^|[^.])(\.\.\.|\u2026),/g,"$1\u2026").replace(/(!|\?)(\.\.\.|\u2026)(?=[^.]|$)/g,"$1..")}}),o.addRule({name:"ru/space/afterHellip",handler:function(e){return e.replace(/([\u0430-\u044f\u0451])(\.\.\.|\u2026)([\u0410-\u042f\u0401])/g,"$1$2 $3").replace(/([?!]\.\.)([\u0430-\u044f\u0451a-z])/gi,"$1 $2")}}),o.addRule({name:"ru/space/year",handler:function(e,t,a){var n=new RegExp("(^| |\xa0)(\\d{3,4})(\u0433\u043e\u0434([\u0430\u0443\u0435]|\u043e\u043c)?)([^"+a.getData("char")+"]|$)","g");return e.replace(n,"$1$2 $3$5")}}),o.addRule({name:"ru/symbols/NN",handler:function(e){return e.replace(/\u2116\u2116/g,"\u2116")}}),function(){var e={A:"\u0410",a:"\u0430",B:"\u0412",E:"\u0415",e:"\u0435",K:"\u041a",M:"\u041c",H:"\u041d",O:"\u041e",o:"\u043e",P:"\u0420",p:"\u0440",C:"\u0421",c:"\u0441",T:"\u0422",y:"\u0443",X:"\u0425",x:"\u0445"},t=Object.keys(e).join("");o.addRule({name:"ru/typo/switchingKeyboardLayout",handler:function(a){var n=new RegExp("(["+t+"]{1,3})(?=[\u0410-\u042f\u0401\u0430-\u044f\u0451]+?)","g");return a.replace(n,function(t,a){for(var n="",r=0;r<a.length;r++)n+=e[a[r]];return n})}})}(),o.addRule({name:"common/html/e-mail",queue:"end",handler:function(e,t,a){return a.isHTML?e:e.replace(/(^|[\s;(])([\w\-.]{2,})@([\w\-.]{2,})\.([a-z]{2,6})([)\s.,!?]|$)/gi,'$1<a href="mailto:$2@$3.$4">$2@$3.$4</a>$5')},disabled:!0,htmlAttrs:!1}),o.addRule({name:"common/html/escape",index:"+100",queue:"end",handler:function(e){var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};return e.replace(/[&<>"'/]/g,function(e){return t[e]})},disabled:!0}),o.addRule({name:"common/html/nbr",index:"+10",queue:"end",handler:function(e){return e.replace(/([^\n>])\n(?=[^\n])/g,"$1<br/>\n")},disabled:!0,htmlAttrs:!1}),o.addRule({name:"common/html/p",index:"+5",queue:"end",handler:function(e){var t=new RegExp("<("+o.blockElements.join("|")+")[>\\s]"),a=e.split("\n\n");return a.forEach(function(e,a,n){e.trim()&&(t.test(e)||(n[a]=e.replace(/^(\s*)/,"$1<p>").replace(/(\s*)$/,"</p>$1")))}),a.join("\n\n")},disabled:!0,htmlAttrs:!1}),o.addRule({name:"common/html/processingAttrs",queue:"hide-safe-tags-own",handler:function(e,t,a){var n=this,r=new RegExp("(^|\\s)("+t.attrs.join("|")+")=(\"[^\"]*?\"|'[^']*?')","gi"),i=o.deepCopy(a.prefs);return i.ruleFilter=function(e){return!1!==e.htmlAttrs},e.replace(/(<[-\w]+\s)([^>]+?)(?=>)/g,function(e,t,a){return t+a.replace(r,function(e,t,a,r){var s=r[0],u=r[r.length-1],l=r.slice(1,-1);return t+a+"="+s+n.execute(l,i)+u})})},settings:{attrs:["title","placeholder"]},disabled:!0,htmlAttrs:!1}),o.addRule({name:"common/html/quot",queue:"hide-safe-tags",handler:function(e){return e.replace(/&quot;/g,'"')}}),o.addRule({name:"common/html/stripTags",index:"+99",queue:"end",handler:function(e){return e.replace(/<[^>]+>/g,"")},disabled:!0}),o.addRule({name:"common/html/url",queue:"end",handler:function(e,t,a){return a.isHTML?e:e.replace(o._reUrl,function(e,t,a){a=a.replace(/([^/]+\/?)(\?|#)$/,"$1").replace(/^([^/]+)\/$/,"$1"),"http"===t?a=a.replace(/^([^/]+)(:80)([^\d]|\/|$)/,"$1$3"):"https"===t&&(a=a.replace(/^([^/]+)(:443)([^\d]|\/|$)/,"$1$3"));var n=a,r=t+"://"+a,i='<a href="'+r+'">';return"http"===t||"https"===t?(n=n.replace(/^www\./,""),i+("http"===t?n:t+"://"+n)+"</a>"):i+r+"</a>"})},disabled:!0,htmlAttrs:!1}),o.addRule({name:"common/nbsp/afterNumber",handler:function(e,t,a){var n="(^|\\D)(\\d{1,5}) (["+a.getData("char")+"]{2,})";return e.replace(new RegExp(n,"gi"),"$1$2\xa0$3")},disabled:!0}),o.addRule({name:"common/nbsp/afterParagraphMark",handler:function(e){return e.replace(/\xb6 ?(?=\d)/g,"\xb6\xa0")}}),o.addRule({name:"common/nbsp/afterSectionMark",handler:function(e,t,a){var n=a.prefs.locale[0];return e.replace(/\xa7[ \u00A0\u2009]?(?=\d|I|V|X)/g,"ru"===n?"\xa7\u202f":"\xa7\xa0")}}),o.addRule({name:"common/nbsp/afterShortWord",handler:function(e,t,a){var n=t.lengthShortWord,r="(^|["+(" \xa0("+o._privateLabel+o.getData("common/quote"))+"])(["+a.getData("char")+"]{1,"+n+"}) ",i=new RegExp(r,"gim");return e.replace(i,"$1$2\xa0").replace(i,"$1$2\xa0")},settings:{lengthShortWord:2}}),o.addRule({name:"common/nbsp/beforeShortLastNumber",handler:function(e,t,a){var n=a.getData("char"),r=n.toUpperCase(),i=new RegExp("(["+n+r+"]) (?=\\d{1,"+t.lengthLastNumber+"}[-+\u2212%'\""+a.getData("quote").right+"]?([.!?\u2026]( ["+r+"]|$)|$))","gm");return e.replace(i,"$1\xa0")},live:!1,settings:{lengthLastNumber:2}}),o.addRule({name:"common/nbsp/beforeShortLastWord",handler:function(e,t,a){var n=a.getData("char"),r=n.toUpperCase(),i=new RegExp("(["+n+"\\d]) (["+n+r+"]{1,"+t.lengthLastWord+"}[.!?\u2026])( ["+r+"]|$)","g");return e.replace(i,"$1\xa0$2$3")},settings:{lengthLastWord:3}}),o.addRule({name:"common/nbsp/dpi",handler:function(e){return e.replace(/(\d) ?(lpi|dpi)(?!\w)/,"$1\xa0$2")}}),function(){function e(e,t,a,n){return t+a.replace(/([^\u00A0])\u00A0([^\u00A0])/g,"$1 $2")+n}o.addRule({name:"common/nbsp/nowrap",queue:"end",handler:function(t){return t.replace(/(<nowrap>)(.*?)(<\/nowrap>)/g,e).replace(/(<nobr>)(.*?)(<\/nobr>)/g,e)}})}(),o.addRule({name:"common/nbsp/replaceNbsp",queue:"utf",live:!1,handler:o._replaceNbsp,disabled:!0}),o.addRule({name:"common/number/fraction",handler:function(e){return e.replace(/(^|\D)1\/2(\D|$)/g,"$1\xbd$2").replace(/(^|\D)1\/4(\D|$)/g,"$1\xbc$2").replace(/(^|\D)3\/4(\D|$)/g,"$1\xbe$2")}}),o.addRule({name:"common/number/mathSigns",handler:function(e){return o._replace(e,[[/!=/g,"\u2260"],[/<=/g,"\u2264"],[/(^|[^=])>=/g,"$1\u2265"],[/<=>/g,"\u21d4"],[/<</g,"\u226a"],[/>>/g,"\u226b"],[/~=/g,"\u2245"],[/(^|[^+])\+-/g,"$1\xb1"]])}}),o.addRule({name:"common/number/times",handler:function(e){return e.replace(/(\d)[ \u00A0]?[x\u0445][ \u00A0]?(\d)/g,"$1\xd7$2")}}),o.addRule({name:"common/other/delBOM",queue:"start",index:-1,handler:function(e){return 65279===e.charCodeAt(0)?e.slice(1):e}}),o.addRule({name:"common/other/repeatWord",handler:function(e,t,a){var n="[;:,.?! \n"+o.getData("common/quote")+"]",r=new RegExp("("+n+"|^)(["+a.getData("char")+"]{"+t.min+",}) \\2("+n+"|$)","gi");return e.replace(r,"$1$2$3")},settings:{min:2},disabled:!0}),o.addRule({name:"common/punctuation/apostrophe",handler:function(e,t,a){var n="(["+a.getData("char")+"])",r=new RegExp(n+"'"+n,"gi");return e.replace(r,"$1\u2019$2")}}),o.addRule({name:"common/punctuation/delDoublePunctuation",handler:function(e){return e.replace(/(^|[^,]),,(?!,)/g,"$1,").replace(/(^|[^:])::(?!:)/g,"$1:").replace(/(^|[^!?.])\.\.(?!\.)/g,"$1.").replace(/(^|[^;]);;(?!;)/g,"$1;").replace(/(^|[^?])\?\?(?!\?)/g,"$1?")}}),o.addRule({name:"common/punctuation/hellip",handler:function(e,t,a){return"ru"===a.prefs.locale[0]?e.replace(/(^|[^.])\.{3,4}(?=[^.]|$)/g,"$1\u2026"):e.replace(/(^|[^.])\.{3}(\.?)(?=[^.]|$)/g,"$1\u2026$2")}});var c={bufferQuotes:{left:"\uf005\uf006\uf007",right:"\uf008\uf009\uf0a0"},maxLevel:3,beforeLeft:" \n\t\xa0[(",afterRight:" \n\t\xa0!?.:;#*,\u2026)",process:function(e){var t=e.context.text;if(!this.count(t).total)return t;var a=e.settings,n=e.settings.left[0]===e.settings.right[0];return n&&(e.settings=o.deepCopy(e.settings),e.settings.left=this.bufferQuotes.left.slice(0,e.settings.left.length),e.settings.right=this.bufferQuotes.right.slice(0,e.settings.right.length)),e.settings.spacing&&(t=this.removeSpacing(t,e.settings)),t=this.set(t,e),e.settings.spacing&&(t=this.setSpacing(t,e.settings)),e.settings.removeDuplicateQuotes&&(t=this.removeDuplicates(t,e.settings)),n&&(t=this.returnOriginalQuotes(t,a,e.settings),e.settings=a),t},returnOriginalQuotes:function(e,t,a){for(var n={},r=0;r<a.left.length;r++)n[a.left[r]]=t.left[r],n[a.right[r]]=t.right[r];return e.replace(new RegExp("["+a.left+a.right+"]","g"),function(e){return n[e]})},count:function(e){var t={total:0};return e.replace(new RegExp("["+o.getData("common/quote")+"]","g"),function(e){return t[e]||(t[e]=0),t[e]++,t.total++,e}),t},removeDuplicates:function(e,t){var a=t.left[0],n=t.left[1]||a,r=t.right[0];return a!==n?e:e.replace(new RegExp(a+a,"g"),a).replace(new RegExp(r+r,"g"),r)},removeSpacing:function(e,t){for(var a=0,n=t.left.length;a<n;a++){var r=t.left[a],i=t.right[a];e=e.replace(new RegExp(r+"([ \u202f\xa0])","g"),r).replace(new RegExp("([ \u202f\xa0])"+i,"g"),i)}return e},setSpacing:function(e,t){for(var a=0,n=t.left.length;a<n;a++){var r=t.left[a],i=t.right[a];e=e.replace(new RegExp(r+"([^\u202f])","g"),r+"\u202f$1").replace(new RegExp("([^\u202f])"+i,"g"),"$1\u202f"+i)}return e},set:function(e,t){var a=o._privateLabel,n=o.getData("common/quote"),r=t.settings.left[0],i=t.settings.left[1]||r,s=t.settings.right[0],u=new RegExp("(^|["+this.beforeLeft+"])(["+n+"]{1,"+this.maxLevel+"})(?=[^\\s"+a+"])","gim"),l=new RegExp("([^\\s"+a+"])(["+n+"]{1,"+this.maxLevel+"})(?=["+this.afterRight+"]|$)","gim");return e=e.replace(u,function(e,t,a){return t+o._repeat(r,a.length)}).replace(l,function(e,t,a){return t+o._repeat(s,a.length)}),e=this.setAboveTags(e,t),r!==i&&(e=this.setInner(e,t.settings)),e},setAboveTags:function(e,t){var a=this,n=o._privateLabel,r=o.getData("common/quote"),i=t.settings.left[0],s=t.settings.right[0];return e.replace(new RegExp("(^|.)(["+r+"])(.|$)","gm"),function(r,u,l,o,c){if(u!==n&&o!==n)return r;if(u===n&&o===n)return'"'===l?u+a.getAboveTwoTags(e,c+1,t)+o:r;if(u===n){var d=a.afterRight.indexOf(o)>-1,p=a.getPrevTagInfo(e,c-1,t);return d&&p&&"html"===p.group?u+(p.isClosing?s:i)+o:u+(!o||d?s:i)+o}var g=a.beforeLeft.indexOf(u)>-1,h=a.getNextTagInfo(e,c+1,t);return g&&h&&"html"===h.group?u+(h.isClosing?s:i)+o:u+(!u||g?i:s)+o})},getAboveTwoTags:function(e,t,a){var n=this.getPrevTagInfo(e,t,a),r=this.getNextTagInfo(e,t,a);if(n&&"html"===n.group){if(!n.isClosing)return a.settings.left[0];if(r&&r.isClosing&&n.isClosing)return a.settings.right[0]}return e[t]},getPrevTagInfo:function(e,t,a){var n=a.safeTags.getPrevLabel(e,t-1);if(n){var r=a.safeTags.getTagByLabel(a.context,n);if(r)return a.safeTags.getTagInfo(r)}return null},getNextTagInfo:function(e,t,a){var n=a.safeTags.getNextLabel(e,t+1);if(n){var r=a.safeTags.getTagByLabel(a.context,n);if(r)return a.safeTags.getTagInfo(r)}return null},setInner:function(e,t){for(var a=[],n=[],r=0;r<t.left.length;r++)a.push(t.left[r]),n.push(t.right[r]);for(var i=t.left[0],s=t.right[0],u=a.length-1,l=-1,o="",c=0,d=e.length;c<d;c++){var p=e[c];p===i?(++l>u&&(l=u),o+=a[l]):p===s?l<=-1?o+=n[l=0]:(o+=n[l],--l<-1&&(l=-1)):('"'===p&&(l=-1),o+=p)}var g=this.count(o,t);return g[i]!==g[s]?e:o}};return o.addRule({name:"common/punctuation/quote",handler:function(e,t,a){var n=t[a.prefs.locale[0]];return n?c.process({context:a,settings:n,safeTags:this._safeTags}):e},settings:function(){var e={};return o.getLocales().forEach(function(t){e[t]=o.deepCopy(o.getData(t+"/quote"))}),e}}),o.addRule({name:"common/punctuation/quoteLink",queue:"show-safe-tags-html",index:"+5",handler:function(e,t,a){var n=this.getSetting("common/punctuation/quote",a.prefs.locale[0]);if(!n)return e;var r=o.HtmlEntities,i=r.getByUtf(n.left[0]),s=r.getByUtf(n.right[0]),u=r.getByUtf(n.left[1]),l=r.getByUtf(n.right[1]);u=u?"|"+u:"",l=l?"|"+l:"";var c=new RegExp("(<[aA]\\s[^>]*?>)("+i+u+")([^]*?)("+s+l+")(</[aA]>)","g");return e.replace(c,"$2$1$3$5$4")}}),o.addRule({name:"common/space/afterPunctuation",handler:function(e){var t=o._privateLabel,a=new RegExp("(!|;|\\?)([^).\u2026!;?\\s[\\])"+t+o.getData("common/quote")+"])","g"),n=new RegExp('(\\D)(,|:)([^)",:.?\\s\\/\\\\'+t+"])","g");return e.replace(a,"$1 $2").replace(n,"$1$2 $3")}}),o.addRule({name:"common/space/beforeBracket",handler:function(e,t,a){var n=new RegExp("(["+a.getData("char")+".!?,;\u2026)])\\(","gi");return e.replace(n,"$1 (")}}),o.addRule({name:"common/space/bracket",handler:function(e){return e.replace(/(\() +/g,"(").replace(/ +\)/g,")")}}),o.addRule({name:"common/space/delBeforePercent",handler:function(e){return e.replace(/(\d)( |\u00A0)(%|\u2030|\u2031)/g,"$1$3")}}),o.addRule({name:"common/space/delBeforePunctuation",handler:function(e){return e.replace(/([!?]) (?=[!?])/g,"$1").replace(/(^|[^!?:;,.\u2026]) ([!?:;,.])(?!\))/g,"$1$2")}}),o.addRule({name:"common/space/delLeadingBlanks",handler:function(e){return e.replace(/\n[ \t]+/g,"\n")},disabled:!0}),o.addRule({name:"common/space/delRepeatN",index:"-1",handler:function(e){return e.replace(/\n{3,}/g,"\n\n")}}),o.addRule({name:"common/space/delRepeatSpace",index:"-1",handler:function(e){return e.replace(/([^\n \t])[ \t]{2,}(?![\n \t])/g,"$1 ")}}),o.addRule({name:"common/space/delTrailingBlanks",index:"-3",handler:function(e){return e.replace(/[ \t]+\n/g,"\n")}}),o.addRule({name:"common/space/replaceTab",index:"-5",handler:function(e){return e.replace(/\t/g,"    ")}}),o.addRule({name:"common/space/squareBracket",handler:function(e){return e.replace(/(\[) +/g,"[").replace(/ +\]/g,"]")}}),o.addRule({name:"common/space/trimLeft",index:"-4",handler:String.prototype.trimLeft?function(e){return e.trimLeft()}:function(e){return e.replace(/^[\s\uFEFF\xA0]+/g,"")}}),o.addRule({name:"common/space/trimRight",index:"-3",live:!1,handler:String.prototype.trimRight?function(e){return e.trimRight()}:function(e){return e.replace(/[\s\uFEFF\xA0]+$/g,"")}}),o.addRule({name:"common/symbols/arrow",handler:function(e){return o._replace(e,[[/(^|[^-])->(?!>)/g,"$1\u2192"],[/(^|[^<])<-(?!-)/g,"$1\u2190"]])}}),o.addRule({name:"common/symbols/cf",handler:function(e){var t=new RegExp('(^|[^%])(\\d+)( |\xa0)?(C|F)([\\W \\.,:!\\?"\\]\\)]|$)',"g");return e.replace(t,"$1$2\u2009\xb0$4$5")}}),o.addRule({name:"common/symbols/copy",handler:function(e){return o._replace(e,[[/\(r\)/gi,"\xae"],[/(copyright )?\((c|\u0441)\)/gi,"\xa9"],[/\(tm\)/gi,"\u2122"]])}}),o});
/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof module&&module.exports?module.exports=b():a.svg4everybody=b()}(this,function(){function a(a,b,c){if(c){var d=document.createDocumentFragment(),e=!b.hasAttribute("viewBox")&&c.getAttribute("viewBox");e&&b.setAttribute("viewBox",e);for(var f=c.cloneNode(!0);f.childNodes.length;)d.appendChild(f.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=b._cachedDocument;c||(c=b._cachedDocument=document.implementation.createHTMLDocument(""),c.body.innerHTML=b.responseText,b._cachedTarget={}),b._embeds.splice(0).map(function(d){var e=b._cachedTarget[d.id];e||(e=b._cachedTarget[d.id]=c.getElementById(d.id)),a(d.parent,d.svg,e)})}},b.onreadystatechange()}function c(c){function e(){for(var c=0;c<o.length;){var h=o[c],i=h.parentNode,j=d(i),k=h.getAttribute("xlink:href")||h.getAttribute("href");if(!k&&g.attributeName&&(k=h.getAttribute(g.attributeName)),j&&k){if(f)if(!g.validate||g.validate(k,j,h)){i.removeChild(h);var l=k.split("#"),q=l.shift(),r=l.join("#");if(q.length){var s=m[q];s||(s=m[q]=new XMLHttpRequest,s.open("GET",q),s.send(),s._embeds=[]),s._embeds.push({parent:i,svg:j,id:r}),b(s)}else a(i,j,document.getElementById(r))}else++c,++p}else++c}(!o.length||o.length-p>0)&&n(e,67)}var f,g=Object(c),h=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,i=/\bAppleWebKit\/(\d+)\b/,j=/\bEdge\/12\.(\d+)\b/,k=/\bEdge\/.(\d+)\b/,l=window.top!==window.self;f="polyfill"in g?g.polyfill:h.test(navigator.userAgent)||(navigator.userAgent.match(j)||[])[1]<10547||(navigator.userAgent.match(i)||[])[1]<537||k.test(navigator.userAgent)&&l;var m={},n=window.requestAnimationFrame||setTimeout,o=document.getElementsByTagName("use"),p=0;f&&e()}function d(a){for(var b=a;"svg"!==b.nodeName.toLowerCase()&&(b=b.parentNode););return b}return c});
/*!
 * viewport-units-buggyfill v0.6.2
 * @web: https://github.com/rodneyrehm/viewport-units-buggyfill/
 * @author: Rodney Rehm - http://rodneyrehm.de/en/
 */

(function() {
  (function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define([], factory);
    } else if (typeof exports === 'object') {
      // Node. Does not work with strict CommonJS, but
      // only CommonJS-like enviroments that support module.exports,
      // like Node.
      module.exports = factory();
    } else {
      // Browser globals (root is window)
      root.viewportUnitsBuggyfill = factory();
    }
  }(this, function() {
    'use strict';
    /* global document, window, navigator, location, XMLHttpRequest, XDomainRequest, CustomEvent */

    var initialized = false;
    var options;
    var userAgent = window.navigator.userAgent;
    var viewportUnitExpression = /([+-]?[0-9.]+)(vh|vw|vmin|vmax)/g;
    var urlExpression = /(https?:)?\/\//
    var forEach = [].forEach;
    var dimensions;
    var declarations;
    var styleNode;
    var isBuggyIE = /MSIE [0-9]\./i.test(userAgent);
    var isOldIE = /MSIE [0-8]\./i.test(userAgent);
    var isOperaMini = userAgent.indexOf('Opera Mini') > -1;

    var isMobileSafari = /(iPhone|iPod|iPad).+AppleWebKit/i.test(userAgent) && (function() {
      // Regexp for iOS-version tested against the following userAgent strings:
      // Example WebView UserAgents:
      // * iOS Chrome on iOS8: "Mozilla/5.0 (iPad; CPU OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) CriOS/39.0.2171.50 Mobile/12B410 Safari/600.1.4"
      // * iOS Facebook on iOS7: "Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_1 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D201 [FBAN/FBIOS;FBAV/12.1.0.24.20; FBBV/3214247; FBDV/iPhone6,1;FBMD/iPhone; FBSN/iPhone OS;FBSV/7.1.1; FBSS/2; FBCR/AT&T;FBID/phone;FBLC/en_US;FBOP/5]"
      // Example Safari UserAgents:
      // * Safari iOS8: "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4"
      // * Safari iOS7: "Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A4449d Safari/9537.53"
      var iOSversion = userAgent.match(/OS (\d)/);
      // viewport units work fine in mobile Safari and webView on iOS 8+
      return iOSversion && iOSversion.length > 1 && parseInt(iOSversion[1]) < 10;
    })();

    var isBadStockAndroid = (function() {
      // Android stock browser test derived from
      // http://stackoverflow.com/questions/24926221/distinguish-android-chrome-from-stock-browser-stock-browsers-user-agent-contai
      var isAndroid = userAgent.indexOf(' Android ') > -1;
      if (!isAndroid) {
        return false;
      }

      var isStockAndroid = userAgent.indexOf('Version/') > -1;
      if (!isStockAndroid) {
        return false;
      }

      var versionNumber = parseFloat((userAgent.match('Android ([0-9.]+)') || [])[1]);
      // anything below 4.4 uses WebKit without *any* viewport support,
      // 4.4 has issues with viewport units within calc()
      return versionNumber <= 4.4;
    })();

    // added check for IE10, IE11 and Edge < 20, since it *still* doesn't understand vmax
    // http://caniuse.com/#feat=viewport-units
    if (!isBuggyIE) {
      isBuggyIE = !!navigator.userAgent.match(/MSIE 10\.|Trident.*rv[ :]*1[01]\.| Edge\/1\d\./);
    }

    // Polyfill for creating CustomEvents on IE9/10/11
    // from https://github.com/krambuhl/custom-event-polyfill
    try {
      // eslint-disable-next-line no-new, no-use-before-define
      new CustomEvent('test');
    } catch (e) {
      var CustomEvent = function(event, params) {
        var evt;
        params = params || {
          bubbles: false,
          cancelable: false,
          detail: undefined,
        };

        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
      };
      CustomEvent.prototype = window.Event.prototype;
      window.CustomEvent = CustomEvent; // expose definition to window
    }

    function debounce(func, wait) {
      var timeout;
      return function() {
        var context = this;
        var args = arguments;
        var callback = function() {
          func.apply(context, args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(callback, wait);
      };
    }

    // from http://stackoverflow.com/questions/326069/how-to-identify-if-a-webpage-is-being-loaded-inside-an-iframe-or-directly-into-t
    function inIframe() {
      try {
        return window.self !== window.top;
      } catch (e) {
        return true;
      }
    }

    function initialize(initOptions) {
      if (initialized) {
        return;
      }

      if (initOptions === true) {
        initOptions = {
          force: true,
        };
      }

      options = initOptions || {};
      options.isMobileSafari = isMobileSafari;
      options.isBadStockAndroid = isBadStockAndroid;

      if (options.ignoreVmax && !options.force && !isOldIE) {
        // modern IE (10 and up) do not support vmin/vmax,
        // but chances are this unit is not even used, so
        // allow overwriting the "hacktivation"
        // https://github.com/rodneyrehm/viewport-units-buggyfill/issues/56
        isBuggyIE = false;
      }

      if (isOldIE || (!options.force && !isMobileSafari && !isBuggyIE && !isBadStockAndroid && !isOperaMini && (!options.hacks || !options.hacks.required(options)))) {
        // this buggyfill only applies to mobile safari, IE9-10 and the Stock Android Browser.
        if (window.console && isOldIE) {
          console.info('viewport-units-buggyfill requires a proper CSSOM and basic viewport unit support, which are not available in IE8 and below');
        }

        return {
          init: function() {},
        };
      }

      // fire a custom event that buggyfill was initialize
      window.dispatchEvent(new CustomEvent('viewport-units-buggyfill-init'));

      options.hacks && options.hacks.initialize(options);

      initialized = true;
      styleNode = document.createElement('style');
      styleNode.id = 'patched-viewport';
      document[options.appendToBody ? 'body' : 'head'].appendChild(styleNode);

      // Issue #6: Cross Origin Stylesheets are not accessible through CSSOM,
      // therefore download and inject them as <style> to circumvent SOP.
      importCrossOriginLinks(function() {
        var _refresh = debounce(refresh, options.refreshDebounceWait || 100);
        // doing a full refresh rather than updateStyles because an orientationchange
        // could activate different stylesheets
        window.addEventListener('orientationchange', _refresh, true);
        // orientationchange might have happened while in a different window
        window.addEventListener('pageshow', _refresh, true);

        if (options.force || isBuggyIE || inIframe()) {
          window.addEventListener('resize', _refresh, true);
          options._listeningToResize = true;
        }

        options.hacks && options.hacks.initializeEvents(options, refresh, _refresh);

        refresh();
      });
    }

    function updateStyles() {
      styleNode.textContent = getReplacedViewportUnits();
      // move to the end in case inline <style>s were added dynamically
      styleNode.parentNode.appendChild(styleNode);
      // fire a custom event that styles were updated
      window.dispatchEvent(new CustomEvent('viewport-units-buggyfill-style'));
    }

    function refresh() {
      if (!initialized) {
        return;
      }

      findProperties();

      // iOS Safari will report window.innerWidth and .innerHeight as 0 unless a timeout is used here.
      // TODO: figure out WHY innerWidth === 0
      setTimeout(function() {
        updateStyles();
      }, 1);
    }

    // http://stackoverflow.com/a/23613052
    function processStylesheet(ss) {
      // cssRules respects same-origin policy, as per
      // https://code.google.com/p/chromium/issues/detail?id=49001#c10.
      try {
        if (!ss.cssRules) { return; }
      } catch (e) {
        if (e.name !== 'SecurityError') { throw e; }
        return;
      }
      // ss.cssRules is available, so proceed with desired operations.
      var rules = [];
      for (var i = 0; i < ss.cssRules.length; i++) {
        var rule = ss.cssRules[i];
        rules.push(rule);
      }
      return rules;
    }

    function findProperties() {
      declarations = [];
      forEach.call(document.styleSheets, function(sheet) {
        var cssRules = processStylesheet(sheet);

        if (!cssRules || sheet.ownerNode.id === 'patched-viewport' || sheet.ownerNode.getAttribute('data-viewport-units-buggyfill') === 'ignore') {
          // skip entire sheet because no rules are present, it's supposed to be ignored or it's the target-element of the buggyfill
          return;
        }

        if (sheet.media && sheet.media.mediaText && window.matchMedia && !window.matchMedia(sheet.media.mediaText).matches) {
          // skip entire sheet because media attribute doesn't match
          return;
        }

        forEach.call(cssRules, findDeclarations);
      });

      return declarations;
    }

    function findDeclarations(rule) {
      if (rule.type === 7) {
        var value;

        // there may be a case where accessing cssText throws an error.
        // I could not reproduce this issue, but the worst that can happen
        // this way is an animation not running properly.
        // not awesome, but probably better than a script error
        // see https://github.com/rodneyrehm/viewport-units-buggyfill/issues/21
        try {
          value = rule.cssText;
        } catch (e) {
          return;
        }

        viewportUnitExpression.lastIndex = 0;
        if (viewportUnitExpression.test(value) && !urlExpression.test(value)) {
          // KeyframesRule does not have a CSS-PropertyName
          declarations.push([rule, null, value]);
          options.hacks && options.hacks.findDeclarations(declarations, rule, null, value);
        }

        return;
      }

      if (!rule.style) {
        if (!rule.cssRules) {
          return;
        }

        forEach.call(rule.cssRules, function(_rule) {
          findDeclarations(_rule);
        });

        return;
      }

      forEach.call(rule.style, function(name) {
        var value = rule.style.getPropertyValue(name);
        // preserve those !important rules
        if (rule.style.getPropertyPriority(name)) {
          value += ' !important';
        }

        viewportUnitExpression.lastIndex = 0;
        if (viewportUnitExpression.test(value)) {
          declarations.push([rule, name, value]);
          options.hacks && options.hacks.findDeclarations(declarations, rule, name, value);
        }
      });
    }

    function getReplacedViewportUnits() {
      dimensions = getViewport();

      var css = [];
      var buffer = [];
      var open;
      var close;

      declarations.forEach(function(item) {
        var _item = overwriteDeclaration.apply(null, item);
        var _open = _item.selector.length ? (_item.selector.join(' {\n') + ' {\n') : '';
        var _close = new Array(_item.selector.length + 1).join('\n}');

        if (!_open || _open !== open) {
          if (buffer.length) {
            css.push(open + buffer.join('\n') + close);
            buffer.length = 0;
          }

          if (_open) {
            open = _open;
            close = _close;
            buffer.push(_item.content);
          } else {
            css.push(_item.content);
            open = null;
            close = null;
          }

          return;
        }

        if (_open && !open) {
          open = _open;
          close = _close;
        }

        buffer.push(_item.content);
      });

      if (buffer.length) {
        css.push(open + buffer.join('\n') + close);
      }

      // Opera Mini messes up on the content hack (it replaces the DOM node's innerHTML with the value).
      // This fixes it. We test for Opera Mini only since it is the most expensive CSS selector
      // see https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors
      if (isOperaMini) {
        css.push('* { content: normal !important; }');
      }

      return css.join('\n\n');
    }

    function overwriteDeclaration(rule, name, value) {
      var _value;
      var _selectors = [];

      _value = value.replace(viewportUnitExpression, replaceValues);

      if (options.hacks) {
        _value = options.hacks.overwriteDeclaration(rule, name, _value);
      }

      if (name) {
        // skipping KeyframesRule
        _selectors.push(rule.selectorText);
        _value = name + ': ' + _value + ';';
      }

      var _rule = rule.parentRule;
      while (_rule) {
        if (_rule.media) {
          _selectors.unshift('@media ' + _rule.media.mediaText);
        } else if (_rule.conditionText) {
          _selectors.unshift('@supports ' + _rule.conditionText);
        }

        _rule = _rule.parentRule;
      }

      return {
        selector: _selectors,
        content: _value,
      };
    }

    function replaceValues(match, number, unit) {
      var _base = dimensions[unit];
      var _number = parseFloat(number) / 100;
      return (_number * _base) + 'px';
    }

    function getViewport() {
      var vh = window.innerHeight;
      var vw = window.innerWidth;

      return {
        vh: vh,
        vw: vw,
        vmax: Math.max(vw, vh),
        vmin: Math.min(vw, vh),
      };
    }

    function importCrossOriginLinks(next) {
      var _waiting = 0;
      var decrease = function() {
        _waiting--;
        if (!_waiting) {
          next();
        }
      };

      forEach.call(document.styleSheets, function(sheet) {
        if (!sheet.href || origin(sheet.href) === origin(location.href) || sheet.ownerNode.getAttribute('data-viewport-units-buggyfill') === 'ignore') {
          // skip <style> and <link> from same origin or explicitly declared to ignore
          return;
        }

        _waiting++;
        convertLinkToStyle(sheet.ownerNode, decrease);
      });

      if (!_waiting) {
        next();
      }
    }

    function origin(url) {
      return url.slice(0, url.indexOf('/', url.indexOf('://') + 3));
    }

    function convertLinkToStyle(link, next) {
      getCors(link.href, function() {
        var style = document.createElement('style');
        style.media = link.media;
        style.setAttribute('data-href', link.href);
        style.textContent = this.responseText;
        link.parentNode.replaceChild(style, link);
        next();
      }, next);
    }

    function getCors(url, success, error) {
      var xhr = new XMLHttpRequest();
      if ('withCredentials' in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open('GET', url, true);
      } else if (typeof XDomainRequest !== 'undefined') {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open('GET', url);
      } else {
        throw new Error('cross-domain XHR not supported');
      }

      xhr.onload = success;
      xhr.onerror = error;
      xhr.send();
      return xhr;
    }

    return {
      version: '0.6.1',
      findProperties: findProperties,
      getCss: getReplacedViewportUnits,
      init: initialize,
      refresh: refresh,
    };
  }));
})();

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("scrollMonitor",[],e):"object"==typeof exports?exports.scrollMonitor=e():t.scrollMonitor=e()}(this,function(){return function(t){function e(o){if(i[o])return i[o].exports;var s=i[o]={exports:{},id:o,loaded:!1};return t[o].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";var o=i(1),s=o.isInBrowser,n=i(2),r=new n(s?document.body:null);r.setStateFromDOM(null),r.listenToDOM(),s&&(window.scrollMonitor=r),t.exports=r},function(t,e){"use strict";e.VISIBILITYCHANGE="visibilityChange",e.ENTERVIEWPORT="enterViewport",e.FULLYENTERVIEWPORT="fullyEnterViewport",e.EXITVIEWPORT="exitViewport",e.PARTIALLYEXITVIEWPORT="partiallyExitViewport",e.LOCATIONCHANGE="locationChange",e.STATECHANGE="stateChange",e.eventTypes=[e.VISIBILITYCHANGE,e.ENTERVIEWPORT,e.FULLYENTERVIEWPORT,e.EXITVIEWPORT,e.PARTIALLYEXITVIEWPORT,e.LOCATIONCHANGE,e.STATECHANGE],e.isOnServer="undefined"==typeof window,e.isInBrowser=!e.isOnServer,e.defaultOffsets={top:0,bottom:0}},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t){return c?0:t===document.body?window.innerHeight||document.documentElement.clientHeight:t.clientHeight}function n(t){return c?0:t===document.body?Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight):t.scrollHeight}function r(t){return c?0:t===document.body?window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop}var h=i(1),c=h.isOnServer,a=h.isInBrowser,l=h.eventTypes,p=i(3),u=!1;if(a)try{var w=Object.defineProperty({},"passive",{get:function(){u=!0}});window.addEventListener("test",null,w)}catch(t){}var d=!!u&&{capture:!1,passive:!0},f=function(){function t(e,i){function h(){if(a.viewportTop=r(e),a.viewportBottom=a.viewportTop+a.viewportHeight,a.documentHeight=n(e),a.documentHeight!==p){for(u=a.watchers.length;u--;)a.watchers[u].recalculateLocation();p=a.documentHeight}}function c(){for(w=a.watchers.length;w--;)a.watchers[w].update();for(w=a.watchers.length;w--;)a.watchers[w].triggerCallbacks()}o(this,t);var a=this;this.item=e,this.watchers=[],this.viewportTop=null,this.viewportBottom=null,this.documentHeight=n(e),this.viewportHeight=s(e),this.DOMListener=function(){t.prototype.DOMListener.apply(a,arguments)},this.eventTypes=l,i&&(this.containerWatcher=i.create(e));var p,u,w;this.update=function(){h(),c()},this.recalculateLocations=function(){this.documentHeight=0,this.update()}}return t.prototype.listenToDOM=function(){a&&(window.addEventListener?(this.item===document.body?window.addEventListener("scroll",this.DOMListener,d):this.item.addEventListener("scroll",this.DOMListener,d),window.addEventListener("resize",this.DOMListener)):(this.item===document.body?window.attachEvent("onscroll",this.DOMListener):this.item.attachEvent("onscroll",this.DOMListener),window.attachEvent("onresize",this.DOMListener)),this.destroy=function(){window.addEventListener?(this.item===document.body?(window.removeEventListener("scroll",this.DOMListener,d),this.containerWatcher.destroy()):this.item.removeEventListener("scroll",this.DOMListener,d),window.removeEventListener("resize",this.DOMListener)):(this.item===document.body?(window.detachEvent("onscroll",this.DOMListener),this.containerWatcher.destroy()):this.item.detachEvent("onscroll",this.DOMListener),window.detachEvent("onresize",this.DOMListener))})},t.prototype.destroy=function(){},t.prototype.DOMListener=function(t){this.setStateFromDOM(t)},t.prototype.setStateFromDOM=function(t){var e=r(this.item),i=s(this.item),o=n(this.item);this.setState(e,i,o,t)},t.prototype.setState=function(t,e,i,o){var s=e!==this.viewportHeight||i!==this.contentHeight;if(this.latestEvent=o,this.viewportTop=t,this.viewportHeight=e,this.viewportBottom=t+e,this.contentHeight=i,s)for(var n=this.watchers.length;n--;)this.watchers[n].recalculateLocation();this.updateAndTriggerWatchers(o)},t.prototype.updateAndTriggerWatchers=function(t){for(var e=this.watchers.length;e--;)this.watchers[e].update();for(e=this.watchers.length;e--;)this.watchers[e].triggerCallbacks(t)},t.prototype.createCustomContainer=function(){return new t},t.prototype.createContainer=function(e){"string"==typeof e?e=document.querySelector(e):e&&e.length>0&&(e=e[0]);var i=new t(e,this);return i.setStateFromDOM(),i.listenToDOM(),i},t.prototype.create=function(t,e){"string"==typeof t?t=document.querySelector(t):t&&t.length>0&&(t=t[0]);var i=new p(this,t,e);return this.watchers.push(i),i},t.prototype.beget=function(t,e){return this.create(t,e)},t}();t.exports=f},function(t,e,i){"use strict";function o(t,e,i){function o(t,e){if(0!==t.length)for(E=t.length;E--;)y=t[E],y.callback.call(s,e,s),y.isOne&&t.splice(E,1)}var s=this;this.watchItem=e,this.container=t,i?i===+i?this.offsets={top:i,bottom:i}:this.offsets={top:i.top||w.top,bottom:i.bottom||w.bottom}:this.offsets=w,this.callbacks={};for(var d=0,f=u.length;d<f;d++)s.callbacks[u[d]]=[];this.locked=!1;var m,v,b,I,E,y;this.triggerCallbacks=function(t){switch(this.isInViewport&&!m&&o(this.callbacks[r],t),this.isFullyInViewport&&!v&&o(this.callbacks[h],t),this.isAboveViewport!==b&&this.isBelowViewport!==I&&(o(this.callbacks[n],t),v||this.isFullyInViewport||(o(this.callbacks[h],t),o(this.callbacks[a],t)),m||this.isInViewport||(o(this.callbacks[r],t),o(this.callbacks[c],t))),!this.isFullyInViewport&&v&&o(this.callbacks[a],t),!this.isInViewport&&m&&o(this.callbacks[c],t),this.isInViewport!==m&&o(this.callbacks[n],t),!0){case m!==this.isInViewport:case v!==this.isFullyInViewport:case b!==this.isAboveViewport:case I!==this.isBelowViewport:o(this.callbacks[p],t)}m=this.isInViewport,v=this.isFullyInViewport,b=this.isAboveViewport,I=this.isBelowViewport},this.recalculateLocation=function(){if(!this.locked){var t=this.top,e=this.bottom;if(this.watchItem.nodeName){var i=this.watchItem.style.display;"none"===i&&(this.watchItem.style.display="");for(var s=0,n=this.container;n.containerWatcher;)s+=n.containerWatcher.top-n.containerWatcher.container.viewportTop,n=n.containerWatcher.container;var r=this.watchItem.getBoundingClientRect();this.top=r.top+this.container.viewportTop-s,this.bottom=r.bottom+this.container.viewportTop-s,"none"===i&&(this.watchItem.style.display=i)}else this.watchItem===+this.watchItem?this.watchItem>0?this.top=this.bottom=this.watchItem:this.top=this.bottom=this.container.documentHeight-this.watchItem:(this.top=this.watchItem.top,this.bottom=this.watchItem.bottom);this.top-=this.offsets.top,this.bottom+=this.offsets.bottom,this.height=this.bottom-this.top,void 0===t&&void 0===e||this.top===t&&this.bottom===e||o(this.callbacks[l],null)}},this.recalculateLocation(),this.update(),m=this.isInViewport,v=this.isFullyInViewport,b=this.isAboveViewport,I=this.isBelowViewport}var s=i(1),n=s.VISIBILITYCHANGE,r=s.ENTERVIEWPORT,h=s.FULLYENTERVIEWPORT,c=s.EXITVIEWPORT,a=s.PARTIALLYEXITVIEWPORT,l=s.LOCATIONCHANGE,p=s.STATECHANGE,u=s.eventTypes,w=s.defaultOffsets;o.prototype={on:function(t,e,i){switch(!0){case t===n&&!this.isInViewport&&this.isAboveViewport:case t===r&&this.isInViewport:case t===h&&this.isFullyInViewport:case t===c&&this.isAboveViewport&&!this.isInViewport:case t===a&&this.isInViewport&&this.isAboveViewport:if(e.call(this,this.container.latestEvent,this),i)return}if(!this.callbacks[t])throw new Error("Tried to add a scroll monitor listener of type "+t+". Your options are: "+u.join(", "));this.callbacks[t].push({callback:e,isOne:i||!1})},off:function(t,e){if(!this.callbacks[t])throw new Error("Tried to remove a scroll monitor listener of type "+t+". Your options are: "+u.join(", "));for(var i,o=0;i=this.callbacks[t][o];o++)if(i.callback===e){this.callbacks[t].splice(o,1);break}},one:function(t,e){this.on(t,e,!0)},recalculateSize:function(){this.height=this.watchItem.offsetHeight+this.offsets.top+this.offsets.bottom,this.bottom=this.top+this.height},update:function(){this.isAboveViewport=this.top<this.container.viewportTop,this.isBelowViewport=this.bottom>this.container.viewportBottom,this.isInViewport=this.top<this.container.viewportBottom&&this.bottom>this.container.viewportTop,this.isFullyInViewport=this.top>=this.container.viewportTop&&this.bottom<=this.container.viewportBottom||this.isAboveViewport&&this.isBelowViewport},destroy:function(){var t=this.container.watchers.indexOf(this),e=this;this.container.watchers.splice(t,1);for(var i=0,o=u.length;i<o;i++)e.callbacks[u[i]].length=0},lock:function(){this.locked=!0},unlock:function(){this.locked=!1}};for(var d=function(t){return function(e,i){this.on.call(this,t,e,i)}},f=0,m=u.length;f<m;f++){var v=u[f];o.prototype[v]=d(v)}t.exports=o}])});
//# sourceMappingURL=scrollMonitor.js.map
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject([1, 2, 3])
 * // => true
 *
 * isObject(Function)
 * // => true
 *
 * isObject(null)
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `debounce` and `throttle`.
 *
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', debounce(calculateLayout, 150))
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }))
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * const debounced = debounce(batchLog, 250, { 'maxWait': 1000 })
 * const source = new EventSource('/stream')
 * jQuery(source).on('message', debounced)
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel)
 *
 * // Check for pending invocations.
 * const status = debounced.pending() ? "Pending..." : "Ready"
 */
function debounce(func, wait, options) {
  var lastArgs = void 0,
      lastThis = void 0,
      maxWait = void 0,
      result = void 0,
      timerId = void 0,
      lastCallTime = void 0;

  var lastInvokeTime = 0;
  var leading = false;
  var maxing = false;
  var trailing = true;

  if (typeof func != 'function') {
    throw new TypeError('Expected a function');
  }
  wait = +wait || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs;
    var thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime;
    var timeSinceLastInvoke = time - lastInvokeTime;
    var timeWaiting = wait - timeSinceLastCall;

    return maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime;
    var timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(Date.now());
  }

  function pending() {
    return timerId !== undefined;
  }

  function debounced() {
    var time = Date.now();
    var isInvoking = shouldInvoke(time);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  debounced.pending = pending;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `throttle` and `debounce`.
 *
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', throttle(updatePosition, 100))
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * const throttled = throttle(renewToken, 300000, { 'trailing': false })
 * jQuery(element).on('click', throttled)
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel)
 */
function throttle(func, wait, options) {
  var leading = true;
  var trailing = true;

  if (typeof func != 'function') {
    throw new TypeError('Expected a function');
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/*!
 * jQuery Smart Banner
 * Copyright (c) 2012 Arnold Daniels <arnold@jasny.net>
 * Based on 'jQuery Smart Web App Banner' by Kurt Zenisek @ kzeni.com
 */
(function(root, factory) {
  if (typeof define == 'function' && define.amd) {
    define(['jquery'], factory);
  } else {
    factory(root.jQuery);
  }
})(this, function($) {
  var UA = navigator.userAgent;
  var isEdge = /Edge/i.test(UA);

  var SmartBanner = function(options) {
    // Get the original margin-top of the HTML element so we can take that into account.
    this.origHtmlMargin = parseFloat($('html').css('margin-top'));
    this.options = $.extend({}, $.smartbanner.defaults, options);

    // Check if it's already a standalone web app or running within a webui view of an app (not mobile safari).
    var standalone = navigator.standalone;

    // Detect banner type (iOS or Android).
    if (this.options.force) {
      this.type = this.options.force;
    }
    else if (UA.match(/Windows Phone/i) !== null && UA.match(/Edge|Touch/i) !== null) {
      this.type = 'windows';
    }
    else if (UA.match(/iPhone|iPod/i) !== null || (UA.match(/iPad/) && this.options.iOSUniversalApp)) {
      if (UA.match(/Safari/i) !== null &&
          (UA.match(/CriOS/i) !== null ||
           UA.match(/FxiOS/i) != null ||
            window.Number(UA.substr(UA.indexOf('OS ') + 3, 3).replace('_', '.')) < 6)) {
        // Check webview and native smart banner support (iOS 6+).
        this.type = 'ios';
      }
    }
    else if (UA.match(/\bSilk\/(.*\bMobile Safari\b)?/) || UA.match(/\bKF\w/) || UA.match('Kindle Fire')) {
      this.type = 'kindle';
    }
    else if (UA.match(/Android/i) !== null) {
      this.type = 'android';
    }
    // Don't show banner if device isn't iOS or Android, website is loaded in app or user dismissed banner.
    if (!this.type || standalone || this.getCookie('sb-closed') || this.getCookie('sb-installed')) {
      return;
    }
    // Calculate scale.
    this.scale = this.options.scale == 'auto' ? $(window).width() / window.screen.width : this.options.scale;
    if (this.scale < 1) {
      this.scale = 1;
    }
    // Get info from meta data.
    var meta = $(
      this.type == 'android'
        ? 'meta[name="google-play-app"]'
        : (this.type == 'ios'
            ? 'meta[name="apple-itunes-app"]'
            : (this.type == 'kindle'
                ? 'meta[name="kindle-fire-app"]'
                : 'meta[name="msApplication-ID"]'
              )
          )
    );

    if (!meta.length) {
      return;
    }
    // For Windows Store apps, get the PackageFamilyName for protocol launch.
    if (this.type == 'windows') {
      if (isEdge) {
        this.appId = $('meta[name="msApplication-PackageEdgeName"]').attr('content');
      }
      if (!this.appId) {
        this.appId = $('meta[name="msApplication-PackageFamilyName"]').attr('content');
      }
    }
    else {
      // Try to pull the appId out of the meta tag and store the result.
      var parsedMetaContent = /app-id=([^\s,]+)/.exec(meta.attr('content'));
      if (parsedMetaContent) {
        this.appId = parsedMetaContent[1];
      } else {
        return;
      }
    }
    this.title = this.options.title
      ? this.options.title
      : (meta.data('title') || $('title').text().replace(/\s*[|\-·].*$/, ''));

    this.author = this.options.author
      ? this.options.author
      : (meta.data('author') || ($('meta[name="author"]').length ? $('meta[name="author"]').attr('content') : window.location.hostname));

    this.iconUrl = meta.data('icon-url');
    this.price = meta.data('price');

    // Set default onInstall callback if not set in options.
    if (typeof this.options.onInstall == 'function') {
      this.options.onInstall = this.options.onInstall;
    } else {
      this.options.onInstall = function() {};
    }
    // Set default onClose callback if not set in options.
    if (typeof this.options.onClose == 'function') {
      this.options.onClose = this.options.onClose;
    } else {
      this.options.onClose = function() {};
    }
    // Create banner.
    this.create();
    this.show();
    this.listen();
  };

  SmartBanner.prototype = {

    constructor: SmartBanner,

    create: function() {
      var iconURL;
      var price = this.price || this.options.price;

      var link = this.options.url || (function() {
        switch (this.type) {
          case 'android':
            return 'market://details?id=';
          case 'kindle':
            return 'amzn://apps/android?asin=';
          case 'windows':
            return isEdge
              ? 'ms-windows-store://pdp/?productid='
              : 'ms-windows-store:navigate?appid=';
        }
        return 'https://itunes.apple.com/' + this.options.appStoreLanguage + '/app/id';
      }.call(this) + this.appId);

      var inStore = !price ? '' : (function() {
        var result = price + ' - ';
        switch (this.type) {
          case 'android':
            return result + this.options.inGooglePlay;
          case 'kindle':
            return result + this.options.inAmazonAppStore;
          case 'windows':
            return result + this.options.inWindowsStore;
        }
        return result + this.options.inAppStore
      }.call(this));

      var gloss = this.options.iconGloss == null
        ? (this.type=='ios')
        : this.options.iconGloss;

      if (this.type == 'android' && this.options.GooglePlayParams) {
        link += '&referrer=' + this.options.GooglePlayParams;
      }
      var banner = (
        '<div id="smartbanner" class="' + this.type + '">' +
          '<div class="sb-container">' +
            '<a href="#" class="sb-close">&times;</a>' +
            '<span class="sb-icon"></span>' +
            '<div class="sb-info">' +
              '<strong>' + this.title + '</strong>' +
              '<span>' + this.author + '</span>' +
              '<span>' + inStore + '</span>' +
            '</div>' +
            '<a href="' + link + '" class="sb-button">' +
              '<span>' + this.options.button + '</span>' +
            '</a>' +
          '</div>' +
        '</div>'
      );
      if (this.options.layer) {
        $(this.options.appendToSelector).append(banner);
      } else {
        $(this.options.appendToSelector).prepend(banner);
      }
      if (this.options.icon) {
        iconURL = this.options.icon;
      } else if(this.iconUrl) {
        iconURL = this.iconUrl;
      } else if ($('link[rel="apple-touch-icon-precomposed"]').length > 0) {
        iconURL = $('link[rel="apple-touch-icon-precomposed"]').attr('href');
        if (this.options.iconGloss == null) {
          gloss = false;
        }
      } else if ($('link[rel="apple-touch-icon"]').length > 0) {
        iconURL = $('link[rel="apple-touch-icon"]').attr('href');
      } else if ($('meta[name="msApplication-TileImage"]').length > 0) {
        iconURL = $('meta[name="msApplication-TileImage"]').attr('content');
      } else if ($('meta[name="msapplication-TileImage"]').length > 0) {
        // Redundant because ms docs show two case usages.
        iconURL = $('meta[name="msapplication-TileImage"]').attr('content');
      }
      if (iconURL) {
        $('#smartbanner .sb-icon').css('background-image', 'url(' + iconURL + ')');
        if (gloss) {
          $('#smartbanner .sb-icon').addClass('gloss');
        }
      } else{
        $('#smartbanner').addClass('no-icon');
      }
      this.bannerHeight = $('#smartbanner').outerHeight() + 2;

      if (this.scale > 1) {
        $('#smartbanner')
          .css('top', parseFloat($('#smartbanner').css('top')) * this.scale)
          .css('height', parseFloat($('#smartbanner').css('height')) * this.scale)
          .hide();
        $('#smartbanner .sb-container')
          .css('-webkit-transform', 'scale(' + this.scale + ')')
          .css('-msie-transform', 'scale(' + this.scale + ')')
          .css('-moz-transform', 'scale(' + this.scale + ')')
          .css('width', $(window).width() / this.scale);
      }
      $('#smartbanner')
        .css('position', this.options.layer ? 'absolute' : 'static');
    },

    listen: function() {
      $('#smartbanner .sb-close').on('click', $.proxy(this.close, this));
      $('#smartbanner .sb-button').on('click', $.proxy(this.install, this));
    },

    show: function(callback) {
      var banner = $('#smartbanner');
      banner.stop();

      if (this.options.layer) {
        banner
          .animate({ top: 0, display: 'block' }, this.options.speedIn)
          .addClass('shown')
          .show();
        $(this.pushSelector)
          .animate({
            paddingTop: this.origHtmlMargin + (this.bannerHeight * this.scale)
          }, this.options.speedIn, 'swing', callback);
      }
      else {
        if ($.support.transition) {
          banner.animate({ top: 0 }, this.options.speedIn).addClass('shown');
          var transitionCallback = function() {
            $('html').removeClass('sb-animation');
            if (callback) {
              callback();
            }
          };
          $(this.pushSelector)
            .addClass('sb-animation')
            .one($.support.transition.end, transitionCallback)
            .emulateTransitionEnd(this.options.speedIn)
            .css('margin-top', this.origHtmlMargin + (this.bannerHeight * this.scale));
        }
        else {
          banner
            .slideDown(this.options.speedIn)
            .addClass('shown');
        }
      }
    },

    hide: function(callback) {
      var banner = $('#smartbanner');
      banner.stop();

      if (this.options.layer) {
        banner.animate({
          top: -1 * this.bannerHeight * this.scale,
          display: 'block'
        }, this.options.speedIn)
        .removeClass('shown');

        $(this.pushSelector)
          .animate({
            paddingTop: this.origHtmlMargin
          }, this.options.speedIn, 'swing', callback);
      }
      else {
        if ($.support.transition) {
          if (this.type !== 'android') {
            banner
              .css('top', -1 * this.bannerHeight * this.scale)
              .removeClass('shown');
          }
          else {
            banner
              .css({display:'none'})
              .removeClass('shown');
          }
          var transitionCallback = function() {
            $('html').removeClass('sb-animation');
            if (callback) {
              callback();
            }
          };
          $(this.pushSelector)
            .addClass('sb-animation')
            .one($.support.transition.end, transitionCallback)
            .emulateTransitionEnd(this.options.speedOut)
            .css('margin-top', this.origHtmlMargin);
        }
        else {
          banner.slideUp(this.options.speedOut).removeClass('shown');
        }
      }
    },

    close: function(e) {
      e.preventDefault();
      this.hide();
      this.setCookie('sb-closed', 'true', this.options.daysHidden);
      this.options.onClose(e);
    },

    install: function(e) {
      if (this.options.hideOnInstall) {
        this.hide();
      }
      this.setCookie('sb-installed', 'true', this.options.daysReminder);
      this.options.onInstall(e);
    },

    setCookie: function(name, value, exdays) {
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + exdays);
      value = encodeURI(value) + ((exdays == null) ? '' : '; expires=' + exdate.toUTCString());
      document.cookie = name + '=' + value + '; path=/;';
    },

    getCookie: function(name) {
      var i, x, y, ARRcookies = document.cookie.split(';');
      for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf('='));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf('=') + 1);
        x = x.replace(/^\s+|\s+$/g, '');
        if (x == name) {
          return decodeURI(y);
        }
      }
      return null;
    },

    // Demo only.
    switchType: function() {
      var that = this;

      this.hide(function() {
        that.type = that.type == 'android' ? 'ios' : 'android';
        var meta = $(that.type == 'android' ? 'meta[name="google-play-app"]' : 'meta[name="apple-itunes-app"]').attr('content');
        that.appId = /app-id=([^\s,]+)/.exec(meta)[1];

        $('#smartbanner').detach();
        that.create();
        that.show();
      });
    }
  };

  $.smartbanner = function(option) {
    var $window = $(window);
    var data = $window.data('smartbanner');
    var options = typeof option == 'object' && option;
    if (!data) {
      $window.data('smartbanner', (data = new SmartBanner(options)));
    }
    if (typeof option == 'string') {
      data[option]();
    }
  };

  // override these globally if you like (they are all optional)
  $.smartbanner.defaults = {
    title: null, // What the title of the app should be in the banner (defaults to <title>)
    author: null, // What the author of the app should be in the banner (defaults to <meta name="author"> or hostname)
    price: 'FREE', // Price of the app
    appStoreLanguage: 'us', // Language code for App Store
    inAppStore: 'On the App Store', // Text of price for iOS
    inGooglePlay: 'In Google Play', // Text of price for Android
    inAmazonAppStore: 'In the Amazon Appstore',
    inWindowsStore: 'In the Windows Store', //Text of price for Windows
    GooglePlayParams: null, // Aditional parameters for the market
    icon: null, // The URL of the icon (defaults to <meta name="apple-touch-icon">)
    iconGloss: null, // Force gloss effect for iOS even for precomposed
    button: 'VIEW', // Text for the install button
    url: null, // The URL for the button. Keep null if you want the button to link to the app store.
    scale: 'auto', // Scale based on viewport size (set to 1 to disable)
    speedIn: 300, // Show animation speed of the banner
    speedOut: 400, // Close animation speed of the banner
    daysHidden: 15, // Duration to hide the banner after being closed (0 = always show banner)
    daysReminder: 90, // Duration to hide the banner after "VIEW" is clicked *separate from when the close button is clicked* (0 = always show banner)
    force: null, // Choose 'ios', 'android' or 'windows'. Don't do a browser check, just always show this banner
    hideOnInstall: true, // Hide the banner after "VIEW" is clicked.
    layer: false, // Display as overlay layer or slide down the page
    iOSUniversalApp: true, // If the iOS App is a universal app for both iPad and iPhone, display Smart Banner to iPad users, too.
    appendToSelector: 'body', //Append the banner to a specific selector
    pushSelector: 'html' // What element is going to push the site content down; this is where the banner append animation will start.
  };

  $.smartbanner.Constructor = SmartBanner;

  // ============================================================
  // Bootstrap transition
  // Copyright 2011-2014 Twitter, Inc.
  // Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)

  function transitionEnd () {
    var el = document.createElement('smartbanner');

    var transEndEventNames = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend'
    };

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return {end: transEndEventNames[name]};
      }
    }
    // Explicit for ie8.
    return false;
  }
  if ($.support.transition !== undefined) {
    // Prevent conflict with Twitter Bootstrap.
    return;
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function(duration) {
    var called = false, $el = this;
    $(this).one($.support.transition.end, function() {
      called = true;
    });
    var callback = function() {
      if (!called) {
        $($el).trigger($.support.transition.end);
      }
    };
    setTimeout(callback, duration);
    return this;
  };

  $(function() {
    $.support.transition = transitionEnd();
  });
  // ============================================================
});
