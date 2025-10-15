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
  DataHandler: () => (/* reexport */ src_DataHandler),
  VInput: () => (/* reexport */ VInput),
  VSelect: () => (/* reexport */ VSelect),
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

;// ./src/DataHandler.js
const DataHandler = {

  assign(target, source) {
    if (Array.isArray(target) && Array.isArray(source)) {
      this.assignArray(target, source)
    } else {
      this.assignObject(target, source)
    }
  },

  assignObject(target, source) {
    for (const key in target) {
      delete target[key]
    }
    Object.assign(target, source)
  },

  assignArray(target, source) {
    target.length = 0;
    target.push(...source);
  }

}

/* harmony default export */ const src_DataHandler = (DataHandler);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(274);
;// ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/VInput.vue?vue&type=script&setup=true&lang=js


const _hoisted_1 = ["value", "type", "readonly", "disabled", "placeholder", "checked"]

;


/* harmony default export */ const VInputvue_type_script_setup_true_lang_js = ({
  __name: 'VInput',
  props: {
  modelValue: [String, Number, Boolean],
  type: {
    type: String,
    default: 'text'
  },
  readonly: Boolean,
  disabled: Boolean,
  placeholder: String
},
  emits: ['update:modelValue'],
  setup(__props, { emit: __emit }) {

const props = __props

const emit = __emit;

function handleChange(event) {
  let value = event.target.value;
  let type = event.target.type;
  if (type === 'number') {
    value = value === '' ? null : Number(value);
  }
  if (type === 'checkbox') {
    value = event.target.checked;
  }
  // emit
  emit('update:modelValue', value);
}

(0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(() => props.modelValue, (newValue, oldValue) => {
  console.log('[v-input]:', oldValue, '->', newValue)
});

return (_ctx, _cache) => {
  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("input", {
    value: __props.modelValue,
    type: __props.type,
    onChange: handleChange,
    readonly: __props.readonly,
    disabled: __props.disabled,
    placeholder: __props.placeholder,
    checked: __props.type === 'checkbox' ? __props.modelValue === true : undefined
  }, null, 40, _hoisted_1))
}
}

});
;// ./src/components/VInput.vue?vue&type=script&setup=true&lang=js
 
;// ./src/components/VInput.vue



const __exports__ = VInputvue_type_script_setup_true_lang_js;

/* harmony default export */ const VInput = (__exports__);
;// ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/VSelect.vue?vue&type=script&setup=true&lang=js


const VSelectvue_type_script_setup_true_lang_js_hoisted_1 = ["value", "readonly", "disabled"]
const _hoisted_2 = ["value"]

;


/* harmony default export */ const VSelectvue_type_script_setup_true_lang_js = ({
  __name: 'VSelect',
  props: {
  modelValue: [String, Number],
  readonly: Boolean,
  disabled: Boolean,
  options: {
    type: Array,
    required: false,
    default: () => []
  },
  optionValueProperty: {
    type: String,
    default: 'value'
  },
  optionTextProperty: {
    type: String,
    default: 'text'
  }
},
  emits: ['update:modelValue', 'update:options'],
  setup(__props, { emit: __emit }) {

const props = __props

const emit = __emit

function handleChange(event) {
  let value = event.target.value;
  emit('update:modelValue', value);
}

(0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(() => props.modelValue, (newValue, oldValue) => {
  console.log('[v-select]:', oldValue, '->', newValue)
})

return (_ctx, _cache) => {
  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("select", {
    value: __props.modelValue,
    onChange: handleChange,
    readonly: __props.readonly,
    disabled: __props.disabled
  }, [
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "default"),
    ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)(__props.options, (option, index) => {
      return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("option", {
        key: index,
        value: option[__props.optionValueProperty]
      }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(option[__props.optionTextProperty]), 9, _hoisted_2))
    }), 128))
  ], 40, VSelectvue_type_script_setup_true_lang_js_hoisted_1))
}
}

});
;// ./src/components/VSelect.vue?vue&type=script&setup=true&lang=js
 
;// ./src/components/VSelect.vue



const VSelect_exports_ = VSelectvue_type_script_setup_true_lang_js;

/* harmony default export */ const VSelect = (VSelect_exports_);
;// ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/VTextarea.vue?vue&type=script&setup=true&lang=js


const VTextareavue_type_script_setup_true_lang_js_hoisted_1 = ["value", "readonly", "disabled", "placeholder"]

;


/* harmony default export */ const VTextareavue_type_script_setup_true_lang_js = ({
  __name: 'VTextarea',
  props: {
  modelValue: [String],
  readonly: Boolean,
  disabled: Boolean,
  placeholder: String
},
  emits: ['update:modelValue'],
  setup(__props, { emit: __emit }) {

const props = __props

const emit = __emit;

function handleChange(event) {
  let value = event.target.value;
  // emit
  emit('update:modelValue', value);
}

(0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(() => props.modelValue, (newValue, oldValue) => {
  console.log('[v-textarea]:', oldValue, '->', newValue)
});

return (_ctx, _cache) => {
  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("textarea", {
    value: __props.modelValue,
    onChange: handleChange,
    readonly: __props.readonly,
    disabled: __props.disabled,
    placeholder: __props.placeholder
  }, null, 40, VTextareavue_type_script_setup_true_lang_js_hoisted_1))
}
}

});
;// ./src/components/VTextarea.vue?vue&type=script&setup=true&lang=js
 
;// ./src/components/VTextarea.vue



const VTextarea_exports_ = VTextareavue_type_script_setup_true_lang_js;

/* harmony default export */ const VTextarea = (VTextarea_exports_);
;// ./src/index.js







/* harmony default export */ const src_0 = ({
  install(app) {
    app.component('VInput', VInput);
    app.component('VSelect', VSelect);
    app.component('VTextarea', VTextarea);
  }
});

;// ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ const entry_lib = (src_0);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=vue-component.umd.js.map