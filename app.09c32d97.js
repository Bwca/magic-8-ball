parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mash":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),function(e){e.Affirmative="affirmative",e.NonCommittal="non-committal",e.Negative="negative"}(e=exports.AnswerTypes||(exports.AnswerTypes={}));
},{}],"YQIr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./answer/answer-types.enum");exports.ANSWERS=[{text:"It is certain.",type:e.AnswerTypes.Affirmative},{text:"It is decidedly so.",type:e.AnswerTypes.Affirmative},{text:"Without a doubt.",type:e.AnswerTypes.Affirmative},{text:"Yes – definitely.",type:e.AnswerTypes.Affirmative},{text:"You may rely on it.",type:e.AnswerTypes.Affirmative},{text:"As I see it, yes.",type:e.AnswerTypes.Affirmative},{text:"Most likely.",type:e.AnswerTypes.Affirmative},{text:"Outlook good.",type:e.AnswerTypes.Affirmative},{text:"Yes.",type:e.AnswerTypes.Affirmative},{text:"Signs point to yes.",type:e.AnswerTypes.Affirmative},{text:"Reply hazy, try again.",type:e.AnswerTypes.NonCommittal},{text:"Ask again later.",type:e.AnswerTypes.NonCommittal},{text:"Better not tell you now.",type:e.AnswerTypes.NonCommittal},{text:"Cannot predict now.",type:e.AnswerTypes.NonCommittal},{text:"Concentrate and ask again.",type:e.AnswerTypes.NonCommittal},{text:"Don't count on it.",type:e.AnswerTypes.Negative},{text:"My reply is no.",type:e.AnswerTypes.Negative},{text:"My sources say no.",type:e.AnswerTypes.Negative},{text:"Outlook not so good.",type:e.AnswerTypes.Negative},{text:"Very doubtful.",type:e.AnswerTypes.Negative}];
},{"./answer/answer-types.enum":"mash"}],"ilvA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(t){var n=this;this.canvas=t,this.fitCanvasToScreen(),this.fillCanvas(),window.addEventListener("resize",function(){return n.fitCanvasToScreen()})}return t.prototype.showAnswer=function(){console.log("dispaying answer")},t.prototype.showBall=function(){console.log("rendering view")},t.prototype.fitCanvasToScreen=function(){this.canvas.setAttribute("height",String(window.innerHeight)),this.canvas.setAttribute("width",String(window.innerWidth)),this.fillCanvas()},t.prototype.fillCanvas=function(){var t=this.canvas.getContext("2d");if(!t)throw new Error("Error getting 2d context");var n=10*(this.canvas.width/100),e=this.canvas.width/2-n,i=this.canvas.height/2-n,r=new Path2D;r.moveTo(125,35),r.arc(e,i,n,0,2*Math.PI),t.fill(r)},t}();exports.CanvasRenderer=t;
},{}],"s70P":[function(require,module,exports) {

},{}],"XWAl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("./html-renderer.module.scss");var e=function(){function e(){}return e.prototype.hideAnswer=function(){this.answerContainer.classList.remove("is-visible")},e.prototype.question=function(){this.hideAnswer(),this.ball.classList.add("is-shaking")},e.prototype.showAnswer=function(e){this.answer.textContent=e,this.ball.classList.remove("is-shaking"),this.answerContainer.classList.add("is-visible")},e.prototype.showBall=function(){var e=document.createElement("section");e.className="canvas";var t=document.createElement("article");t.className="ball",this.ball=t;var s=document.createElement("div");s.className="answer-portal";var n=document.createElement("div");n.className="answer-container",this.answerContainer=n;var a=document.createElement("div");a.className="answer",this.answer=a,n.appendChild(a),s.appendChild(n),t.appendChild(s),e.appendChild(t),document.body.appendChild(e)},e}();exports.HtmlRenderer=e;
},{"./html-renderer.module.scss":"s70P"}],"Jzw2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../canvas-renderer/canvas-renderer"),r=require("../html-renderer/html-renderer");function n(){return u()}function t(){var r=document.querySelector("canvas");if(!r)throw new Error("NO CANVAS FOUND");return new e.CanvasRenderer(r)}function u(){return new r.HtmlRenderer}exports.makeRenderer=n;
},{"../canvas-renderer/canvas-renderer":"ilvA","../html-renderer/html-renderer":"XWAl"}],"b60D":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./make-renderer/make-renderer"));
},{"./make-renderer/make-renderer":"Jzw2"}],"EVxB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,t,r=require("./answers.const"),n=require("./renderer"),o=n.makeRenderer();function i(){e||t||(o.question(),e=setTimeout(function(){clearTimeout(e),e=0,u(s())},2e3))}function u(e){o.showAnswer(e.text),t=setTimeout(function(){clearTimeout(t),t=0,o.hideAnswer()},5e3)}function s(){var e=r.ANSWERS.length-1,t=Math.floor(Math.random()*Math.floor(e));return r.ANSWERS[t]}o.showBall(),document.addEventListener("click",i);
},{"./answers.const":"YQIr","./renderer":"b60D"}]},{},["EVxB"], null)