// src/index.js

import XInput from './components/XInput.vue';

// 개별 컴포넌트 export
export { XInput };

// plugin 방식 export (Vue.use() 또는 app.use()로 등록 가능)
export default {
  install(app) {
    app.component('XInput', XInput);
  }
};
