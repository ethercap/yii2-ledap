(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if(typeof define === 'function' && define.amd)
        define([], factory);
    else if(typeof exports === 'object')
        exports["ledap-vue-bootstrap"] = factory();
    else
        root["ledap-vue-bootstrap"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
    return /******/ (function(modules) { // webpackBootstrap
        /******/ 	// The module cache
        /******/ 	var installedModules = {};
        /******/
        /******/ 	// The require function
        /******/ 	function __webpack_require__(moduleId) {
            /******/
            /******/ 		// Check if module is in cache
            /******/ 		if(installedModules[moduleId]) {
                /******/ 			return installedModules[moduleId].exports;
                /******/ 		}
            /******/ 		// Create a new module (and put it into the cache)
            /******/ 		var module = installedModules[moduleId] = {
                /******/ 			i: moduleId,
                /******/ 			l: false,
                /******/ 			exports: {}
                /******/ 		};
            /******/
            /******/ 		// Execute the module function
            /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ 		// Flag the module as loaded
            /******/ 		module.l = true;
            /******/
            /******/ 		// Return the exports of the module
            /******/ 		return module.exports;
            /******/ 	}
        /******/
        /******/
        /******/ 	// expose the modules object (__webpack_modules__)
        /******/ 	__webpack_require__.m = modules;
        /******/
        /******/ 	// expose the module cache
        /******/ 	__webpack_require__.c = installedModules;
        /******/
        /******/ 	// define getter function for harmony exports
        /******/ 	__webpack_require__.d = function(exports, name, getter) {
            /******/ 		if(!__webpack_require__.o(exports, name)) {
                /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
                /******/ 		}
            /******/ 	};
        /******/
        /******/ 	// define __esModule on exports
        /******/ 	__webpack_require__.r = function(exports) {
            /******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/ 		}
            /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
            /******/ 	};
        /******/
        /******/ 	// create a fake namespace object
        /******/ 	// mode & 1: value is a module id, require it
        /******/ 	// mode & 2: merge all properties of value into the ns
        /******/ 	// mode & 4: return value when already ns object
        /******/ 	// mode & 8|1: behave like require
        /******/ 	__webpack_require__.t = function(value, mode) {
            /******/ 		if(mode & 1) value = __webpack_require__(value);
            /******/ 		if(mode & 8) return value;
            /******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
            /******/ 		var ns = Object.create(null);
            /******/ 		__webpack_require__.r(ns);
            /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
            /******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
            /******/ 		return ns;
            /******/ 	};
        /******/
        /******/ 	// getDefaultExport function for compatibility with non-harmony modules
        /******/ 	__webpack_require__.n = function(module) {
            /******/ 		var getter = module && module.__esModule ?
                /******/ 			function getDefault() { return module['default']; } :
                /******/ 			function getModuleExports() { return module; };
            /******/ 		__webpack_require__.d(getter, 'a', getter);
            /******/ 		return getter;
            /******/ 	};
        /******/
        /******/ 	// Object.prototype.hasOwnProperty.call
        /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
        /******/
        /******/ 	// __webpack_public_path__
        /******/ 	__webpack_require__.p = "";
        /******/
        /******/
        /******/ 	// Load entry module and return exports
        /******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
        /******/ })
        /************************************************************************/
        /******/ ({

            /***/ "1685":
            /***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

                /***/ }),

            /***/ "8875":
            /***/ (function(module, exports, __webpack_require__) {

                var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

                (function (root, factory) {
                    if (true) {
                        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
                            __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                                (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
                        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                    } else {}
                }(typeof self !== 'undefined' ? self : this, function () {
                    function getCurrentScript () {
                        const descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
                        // for chrome
                        if (!descriptor && 'currentScript' in document && document.currentScript) {
                            return document.currentScript
                        }

                        // for other browsers with native support for currentScript
                        if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
                            return document.currentScript
                        }

                        // IE 8-10 support script readyState
                        // IE 11+ & Firefox support stack trace
                        try {
                            throw new Error();
                        }
                        catch (err) {
                            // Find the second match for the "at" string to get file src url from stack.
                            var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
                                ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
                                stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
                                scriptLocation = (stackDetails && stackDetails[1]) || false,
                                line = (stackDetails && stackDetails[2]) || false,
                                currentLocation = document.location.href.replace(document.location.hash, ''),
                                pageSource,
                                inlineScriptSourceRegExp,
                                inlineScriptSource,
                                scripts = document.getElementsByTagName('script'); // Live NodeList collection

                            if (scriptLocation === currentLocation) {
                                pageSource = document.documentElement.outerHTML;
                                inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
                                inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
                            }

                            for (var i = 0; i < scripts.length; i++) {
                                // If ready state is interactive, return the script tag
                                if (scripts[i].readyState === 'interactive') {
                                    return scripts[i];
                                }

                                // If src matches, return the script tag
                                if (scripts[i].src === scriptLocation) {
                                    return scripts[i];
                                }

                                // If inline source matches, return the script tag
                                if (
                                    scriptLocation === currentLocation &&
                                    scripts[i].innerHTML &&
                                    scripts[i].innerHTML.trim() === inlineScriptSource
                                ) {
                                    return scripts[i];
                                }
                            }

                            // If no match, return null
                            return null;
                        }
                    };

                    return getCurrentScript
                }));


                /***/ }),

            /***/ "fb15":
            /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
// ESM COMPAT FLAG
                __webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

                if (typeof window !== 'undefined') {
                    var currentScript = window.document.currentScript
                    if (true) {
                        var getCurrentScript = __webpack_require__("8875")
                        currentScript = getCurrentScript()

                        // for backward compatibility, because previously we directly included the polyfill
                        if (!('currentScript' in document)) {
                            Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
                        }
                    }

                    var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
                    if (src) {
                        __webpack_require__.p = src[1] // eslint-disable-line
                    }
                }

// Indicate to webpack that this file can be concatenated
                /* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./src/theme.js
                var themeConfig = {
                    "form-item": {
                        template: "<component :is=\"tag\" class=\"form-group row\">\n            <slot name=\"label\" :model=\"model\" :attr=\"attr\">\n                <label class=\"col-sm-3 col-form-label text-right\"> {{label || model.getAttributeLabel(attr)}}{{model.isRequired(attr) ? '*' : ''}}\n                </label>\n            </slot>\n            <div class=\"col-sm-9\">\n                <slot :model=\"model\" :attr=\"attr\" :validate=\"validate\" :inputListeners=\"inputListeners\">\n                    <baseinput :model=\"model\" :attr=\"attr\" :inputListeners=\"inputListeners\" v-bind=\"$attrs\"></baseinput>\n                </slot>\n                <slot name=\"error\" :model=\"model\" :attr=\"attr\" :showError=\"showError\">\n                    <b-form-invalid-feedback :state=\"!Boolean(showError)\">\n                    {{showError}}\n                    </b-form-invalid-feedback>\n                </slot>\n            </div>\n        </component>"
                    },
                    "baseinput": {
                        template: "<div><template v-if=\"tag !== 'textarea'\">\n            <input class=\"form-control\" :name=\"attr\" :value=\"model[attr]\" :placeholder=\"model.getAttributeHint(attr)\" v-on=\"inputListeners\" v-bind=\"$attrs\" :maxlength=\"cMaxlength\">\n        </template>\n        <template v-else>\n            <textarea class=\"form-control\" :name=\"attr\" :value=\"model[attr]\" :placeholder=\"model.getAttributeHint(attr)\" v-on=\"inputListeners\" v-bind=\"$attrs\" :maxlength=\"cMaxlength\">\n            </textarea>\n        </template></div>"
                    },
                    "dropdown": {
                        template: "<select class=\"form-control\" :name=\"attr\" v-on=\"inputListeners\" v-bind=\"$attrs\">\n            <option v-for=\"key in dictOption.order\" :value=\"key\" :selected=\"key === model[attr]\">{{dictOption.list[key]}}</option>\n        </select>"
                    },
                    "groupinput": {
                        template: "<group class=\"btn-group\" :max=\"dictOption.max\" :excludes=\"dictOption.excludes\" :init-value=\"model[attr]\" :multiple=\"dictOption.multiple\" @change=\"groupChange\">\n            <slot name=\"default\" v-for=\"key in dictOption.order\" :attr=\"attr\" :data-key=\"key\" :value=\"dictOption.list[key]\" :disabled=\"dictOption.excludes.indexOf(key) > -1 ? true : false\">\n                <tab class=\"btn btn-outline-primary\" :disabled=\"dictOption.excludes.indexOf(key) > -1 ? true : false\" :data-key=\"key\" :key=\"key\"> {{dictOption.list[key]}}</tab>\n            </slot>\n        </group>"
                    },
                    searchinput: {
                        template: "<div class=\"position-relative\">\n        <input class=\"form-control\" :name=\"attr\" :value=\"value\" :placeholder=\"model.getAttributeHint(attr)\" v-on=\"listeners\" autocomplete=\"off\" v-bind=\"$attrs\">\n        <ul v-show=\"showList\" class=\"list-unstyled position-absolute w-100 border bg-light\" :class=\"[isHide ? 'invisible' : 'visible']\" style=\"z-index: 10;\">\n            <li v-for=\"(model, index) in models\" @mousedown=\"choose(model, index, $event)\" style=\"padding: 6px 12px; cusor: default;\">\n                <slot :model=\"model\" :index=\"index\">{{model[itemName]}}</slot>\n            </li>\n        </ul>\n    </div>"
                    },
                    select2: {
                        template: "<div class=\"position-relative\">\n    <div class=\"form-control d-flex align-items-center\" style=\"height:auto\">\n        <span v-if=\"multiple\" v-for=\"model,key in selected\" :key=\"key\">\n            <button class=\"btn btn-sm btn-light\" @click=\"choose(model, key, $event)\">{{model[itemName]}}{{'  x'}}</button>&nbsp;\n        </span>\n        <input :name=\"attr\" ref=\"input\" :value=\"value\" :placeholder=\"model.getAttributeHint(attr)\" v-on=\"listeners\" v-bind=\"$attrs\" autocomplete=\"off\" class=\"border-0 flex-fill mw-100\" style=\"outline-color:white;min-width:0;\">\n        <b-icon-x v-if=\"!multiple && value\" @click=\"clear\" style=\"cursor: pointer;\"></b-icon-x>\n    </div>\n    <ul v-show=\"showList\" class=\"list-unstyled position-absolute w-100 border bg-light\" :class=\"[isHide ? 'invisible' : 'visible']\" style=\"z-index: 10;\">\n        <div v-if=\"dataProvider.isLoading\" class=\"text-center py-2\">\u52A0\u8F7D\u4E2D</div>\n        <template v-else>\n            <template v-if=\"models.length\">\n                <li v-for=\"(model, index) in models\" @mousedown=\"choose(model, index, $event)\" style=\"padding: 6px 12px;cursor: pointer;\" :class='{\"bg-success\": selected.hasOwnProperty(model[keyName])}'>\n                    <slot name=\"tab\" :model=\"model\" :index=\"index\" :isActive=\"selected.hasOwnProperty(model[keyName])\">{{model[itemName]}}</slot>\n                </li>\n            </template>\n            <div v-else class=\"text-center py-2\">\u65E0\u6570\u636E</div>\n        </template>\n    </ul>\n</div>"
                    },
                    pager: {
                        template: "<div class=\"d-flex align-items-center\">\n        <slot name=\"total\">\n            <span>\u5171<span class=\"text-danger\">{{ dataProvider.pager.totalCount }}</span>\u6761\u8BB0\u5F55</span>\n            <span class=\"flex-fill\"></span>\n        </slot>\n        <slot :changePage=\"changePage\">\n            <a v-show=\"dataProvider.pager.hasPrev()\" @click=\"toPrev()\" class=\"text-primary\">\u4E0A\u4E00\u9875</a>\n            <a v-show=\"dataProvider.pager.hasNext()\" @click=\"toNext()\" class=\"ml-10 text-primary\">\u4E0B\u4E00\u9875</a>\n            <span class=\"mx-3\">\u7B2C {{ dataProvider.pager.currentPage}}/{{ dataProvider.pager.pageCount }} \u9875</span>\n        </slot>\n        <slot name=\"form\" :changePage=\"changePage\">\n            <form @submit.prevent.stop=\"changePage(jumpPage)\" class=\"d-flex align-items-center\">\n                <span>\u8DF3\u81F3&nbsp;</span>\n                <input type=\"text\" v-model=\"jumpPage\" class=\"text-center\" style=\"width:45px;outline:0\">\n                <span>&nbsp;\u9875&nbsp;</span>\n                <button type=\"submit\" class=\"btn btn-primary rounded-0\" style=\"padding:2px 8px\">\u8DF3\u8F6C</button>\n            </form>\n        </slot>\n    </div>"
                    },
                    step: {
                        template: "\n        <component :is=\"tagName\" :class=\"{'active text-success': isOpen()}\">\n            <slot></slot>\n        </component>"
                    }
                };
                /* harmony default export */ var theme = (themeConfig);
// EXTERNAL MODULE: ./src/theme.less
                var src_theme = __webpack_require__("1685");

// CONCATENATED MODULE: ./src/main.js

                // yii2-ledap 需要有一个全局变量，如果觉得这种方案不优雅，可以考虑将 webpack-cli 架构改成 gulp

                window.themeConfig = theme;
                /* harmony default export */ var main = (theme);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


                /* harmony default export */ var entry_lib = __webpack_exports__["default"] = (main);



                /***/ })

            /******/ });
});
//# sourceMappingURL=ledap-vue-bootstrap.umd.js.map