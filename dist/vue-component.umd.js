(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-component"] = factory(require("vue"));
	else
		root["vue-component"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), (__WEBPACK_EXTERNAL_MODULE__274__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 262:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.A = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 274:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__274__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  XInput: () => (/* reexport */ XInput),
  XTable: () => (/* reexport */ XTable),
  "default": () => (/* binding */ entry_lib)
});

;// ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) // removed by dead control flow
{ var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ const setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(274);
;// ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/XInput.vue?vue&type=template&id=868979d0&scoped=true


const _hoisted_1 = { class: "x-input-wrapper" }
const _hoisted_2 = ["for"]
const _hoisted_3 = ["id", "type", "placeholder", "disabled", "readonly", "value"]
const _hoisted_4 = {
  key: 1,
  class: "x-input-error"
}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_1, [
    ($props.label)
      ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("label", {
          key: 0,
          for: $props.id,
          class: "x-input-label"
        }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.label), 9, _hoisted_2))
      : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true),
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("input", {
      id: $props.id,
      type: $props.type,
      placeholder: $props.placeholder,
      disabled: $props.disabled,
      readonly: $props.readonly,
      value: $props.modelValue,
      onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:modelValue', $event.target.value))),
      class: "x-input"
    }, null, 40, _hoisted_3),
    ($props.error)
      ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", _hoisted_4, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.error), 1))
      : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)
  ]))
}
;// ./src/components/XInput.vue?vue&type=template&id=868979d0&scoped=true

;// ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/XInput.vue?vue&type=script&lang=js

/* harmony default export */ const XInputvue_type_script_lang_js = ({
  name: 'XInput',
  props: {
    modelValue: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: () => `x-input-${Math.random().toString(36).substr(2, 9)}`
    }
  }
});

;// ./src/components/XInput.vue?vue&type=script&lang=js
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-52.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-52.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-52.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/XInput.vue?vue&type=style&index=0&id=868979d0&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// ./src/components/XInput.vue?vue&type=style&index=0&id=868979d0&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(262);
;// ./src/components/XInput.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(XInputvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-868979d0"]])

/* harmony default export */ const XInput = (__exports__);
;// ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/XTable.vue?vue&type=template&id=1b9a9005&scoped=true


const XTablevue_type_template_id_1b9a9005_scoped_true_hoisted_1 = { class: "x-table" }

function XTablevue_type_template_id_1b9a9005_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", XTablevue_type_template_id_1b9a9005_scoped_true_hoisted_1, [
    ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($options.rows, (row, rowIndex) => {
      return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
        class: "x-row",
        key: rowIndex
      }, [
        ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)(row, (cell, cellIndex) => {
          return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
            class: "x-cell",
            key: cellIndex
          }, [
            ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveDynamicComponent)(cell)))
          ]))
        }), 128))
      ]))
    }), 128))
  ]))
}
;// ./src/components/XTable.vue?vue&type=template&id=1b9a9005&scoped=true

;// ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/XTable.vue?vue&type=script&lang=js

/* harmony default export */ const XTablevue_type_script_lang_js = ({
  name: 'XTable',
  props: {
    columns: {
      type: Number,
      default: 2
    },
    gap: {
      type: String,
      default: '1rem'
    }
  },
  computed: {
    slotComponents() {
      // 슬롯 요소를 배열로 추출
      return this.$slots.default ? this.$slots.default().filter(v => v.type) : []
    },
    rows() {
      const result = []
      const items = this.slotComponents
      for (let i = 0; i < items.length; i += this.columns) {
        result.push(items.slice(i, i + this.columns))
      }
      return result
    }
  }
});

;// ./src/components/XTable.vue?vue&type=script&lang=js
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-52.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-52.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-52.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/XTable.vue?vue&type=style&index=0&id=1b9a9005&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// ./src/components/XTable.vue?vue&type=style&index=0&id=1b9a9005&scoped=true&lang=css

;// ./src/components/XTable.vue




;


const XTable_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(XTablevue_type_script_lang_js, [['render',XTablevue_type_template_id_1b9a9005_scoped_true_render],['__scopeId',"data-v-1b9a9005"]])

/* harmony default export */ const XTable = (XTable_exports_);
;// ./src/index.js
// src/index.js




// 개별 컴포넌트 export


// plugin 방식 export (Vue.use() 또는 app.use()로 등록 가능)
/* harmony default export */ const src_0 = ({
  install(app) {
    app.component('XInput', XInput);
    app.component('XTable', XTable);
  }
});

;// ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ const entry_lib = (src_0);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=vue-component.umd.js.map